<div class="transcript-panel">
  {#if paragraphs.length === 0}
    <p class="transcript-status">{problem || 'No transcript yet.'}</p>
  {:else}
    <div class="transcript-doc" class:is-sliding={sliding} use:trackDoc>
      {#each paragraphs as paragraph (paragraph.id)}
        <p class="transcript-paragraph">
          {#each paragraph.words as word (word.id)}
            <button
              type="button"
              class="transcript-word"
              class:is-current={currentWord && word.id === currentWord.id}
              style={currentWord && word.id === currentWord.id ? `--p:${progress}` : undefined}
              tabindex={wordTabIndex(word)}
              use:rememberWord={word}
              on:click={(event) => placeCursor(word, event)}
              on:keydown={(event) => onWordKeydown(word, event)}
            >{word.text}</button>
          {/each}
        </p>
      {/each}
    </div>
  {/if}
</div>

<script>
  import { onDestroy } from 'svelte'
  import {
    readCachedTranscript,
    readTranscriptProblem,
    transcriptProblems
  } from '/src/helpers/transcript.js'
  import {
    buildTranscriptDocument,
    progressInWord,
    wordAtTime
  } from '/src/helpers/transcriptDocument.js'
  import { playbackPathOf, seekPlayback, subscribePlayback } from '/src/helpers/playbackBridge.js'

  export let videoDoc

  let time = 0
  let sliding = false
  let docEl = null
  let revealedId = null
  let slideOrigin = null
  const wordNodes = {}
  const playback = { stop: () => {}, shown: null }

  $: path = playbackPathOf(videoDoc)
  $: segments = readCachedTranscript(videoDoc) || []
  $: problem = readTranscriptProblem(videoDoc, $transcriptProblems)
  $: documentModel = buildTranscriptDocument(segments)
  $: words = documentModel.words
  $: paragraphs = documentModel.paragraphs
  $: currentWord = wordAtTime(words, time)
  $: progress = progressInWord(currentWord, time)
  $: revealCurrent(currentWord)
  $: followPlayback(path)

  function followPlayback(nextPath) {
    playback.stop()
    playback.shown = null
    let pending = null
    playback.stop = subscribePlayback(nextPath, (snapshot) => {
      const next = snapshot.time
      if (!Number.isFinite(next)) return
      // While the marker is being dragged, the pointer owns the playhead.
      if (sliding) {
        playback.shown = time
        pending = null
        return
      }
      // A seek (scrub, or a click in this transcript) may jump backward.
      // A single backward tick may not: this recording's clock was published
      // twice and a bad sample pulled the row highlight back to an earlier cue.
      if (snapshot.reason === 'seek' || playback.shown == null || next + 0.35 >= playback.shown) {
        playback.shown = next
        pending = null
        time = playback.shown
        return
      }
      if (pending != null && Math.abs(pending - next) < 0.5) {
        playback.shown = next
        pending = null
        time = playback.shown
        return
      }
      pending = next
    })
  }

  function trackDoc(node) {
    docEl = node
    node.addEventListener('pointerdown', onPointerDown)
    return {
      destroy() {
        node.removeEventListener('pointerdown', onPointerDown)
        if (docEl === node) docEl = null
      }
    }
  }

  function rememberWord(node, word) {
    wordNodes[word.id] = node
    return {
      destroy() {
        if (wordNodes[word.id] === node) delete wordNodes[word.id]
      }
    }
  }

  function revealCurrent(word) {
    if (!word || word.id === revealedId) return
    revealedId = word.id
    // Scrolling under an active drag moves the paragraph away from the pointer.
    if (sliding || typeof requestAnimationFrame !== 'function') return
    requestAnimationFrame(() => {
      if (sliding) return
      const node = wordNodes[word.id]
      if (!node || !docEl) return
      const docRect = docEl.getBoundingClientRect()
      const wordRect = node.getBoundingClientRect()
      if (wordRect.top < docRect.top) docEl.scrollTop -= docRect.top - wordRect.top
      else if (wordRect.bottom > docRect.bottom) docEl.scrollTop += wordRect.bottom - docRect.bottom
    })
  }

  function wordTabIndex(word) {
    if (!currentWord) return word.id === 0 ? 0 : -1
    return word.id === currentWord.id ? 0 : -1
  }

  function placeAt(at) {
    time = at
    playback.shown = at
    seekPlayback(path, at)
  }

  function placeCursor(word, event) {
    const rect = event.currentTarget.getBoundingClientRect()
    const ratio = rect.width > 0 ? (event.clientX - rect.left) / rect.width : 0
    const clamped = Math.min(1, Math.max(0, ratio))
    placeAt(word.start + (word.end - word.start) * clamped)
  }

  // Nearest word to the pointer, then the fraction across that word.
  function timeAtPoint(clientX, clientY) {
    let best = null
    let bestScore = Infinity
    for (let i = 0; i < words.length; i += 1) {
      const word = words[i]
      const node = wordNodes[word.id]
      if (!node) continue
      const rect = node.getBoundingClientRect()
      if (rect.width === 0 && rect.height === 0) continue
      const dx = clientX < rect.left ? rect.left - clientX : clientX > rect.right ? clientX - rect.right : 0
      const dy = clientY < rect.top ? rect.top - clientY : clientY > rect.bottom ? clientY - rect.bottom : 0
      const score = dx + dy * 8
      if (score >= bestScore) continue
      bestScore = score
      const ratio = rect.width > 0 ? (clientX - rect.left) / rect.width : 0
      const clamped = ratio < 0 ? 0 : ratio > 1 ? 1 : ratio
      best = word.start + (word.end - word.start) * clamped
    }
    return best
  }

  function onPointerDown(event) {
    if (event.button !== 0 || slideOrigin) return
    if (timeAtPoint(event.clientX, event.clientY) == null) return
    slideOrigin = { x: event.clientX, y: event.clientY }
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
    window.addEventListener('pointercancel', onPointerUp)
  }

  // A small horizontal slide scrubs the paragraph. A vertical move stays a scroll.
  function onPointerMove(event) {
    if (!slideOrigin) return
    const dx = event.clientX - slideOrigin.x
    const dy = event.clientY - slideOrigin.y
    if (!sliding) {
      if (dx * dx + dy * dy < 16) return
      if (Math.abs(dy) > Math.abs(dx)) {
        onPointerUp()
        return
      }
      sliding = true
    }
    const at = timeAtPoint(event.clientX, event.clientY)
    if (at == null) return
    placeAt(at)
  }

  function onPointerUp() {
    const didDrag = sliding
    slideOrigin = null
    sliding = false
    window.removeEventListener('pointermove', onPointerMove)
    window.removeEventListener('pointerup', onPointerUp)
    window.removeEventListener('pointercancel', onPointerUp)
    if (!didDrag) return
    // pointerup is followed by a click on the word where the drag began.
    const swallow = (event) => {
      event.preventDefault()
      event.stopPropagation()
    }
    window.addEventListener('click', swallow, true)
    setTimeout(() => window.removeEventListener('click', swallow, true), 0)
  }

  function onWordKeydown(word, event) {
    let index = word.id
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') index += 1
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') index -= 1
    else return
    event.preventDefault()
    const next = words[Math.min(words.length - 1, Math.max(0, index))]
    const node = wordNodes[next.id]
    if (node) node.focus()
    placeAt(next.start)
  }

  onDestroy(() => {
    playback.stop()
    onPointerUp()
  })
</script>

<style>
  .transcript-panel {
    display: flex;
    flex-direction: column;
    min-height: 0;
    padding: 4px 2px 8px;
  }

  .transcript-status {
    margin: 8px;
    font-size: 0.8125rem;
    line-height: 1.4;
    color: rgba(0, 0, 0, 0.7);
  }

  .transcript-doc {
    overflow-y: auto;
    max-height: calc(100vh - 180px);
    padding: 8px 10px 16px;
    text-align: left;
    touch-action: pan-y;
  }

  .transcript-paragraph {
    margin: 0 0 0.85em;
    font-size: 0.875rem;
    line-height: 1.55;
    color: rgba(0, 0, 0, 0.88);
  }

  .transcript-word {
    display: inline;
    appearance: none;
    margin: 0 0.28em 0 0;
    padding: 0;
    border: 0;
    background: none;
    font: inherit;
    color: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    text-align: inherit;
    cursor: text;
    border-radius: 1px;
  }

  .transcript-word:focus {
    outline: none;
  }

  .transcript-word:focus-visible {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 2px;
  }

  .transcript-doc.is-sliding,
  .transcript-doc.is-sliding .transcript-word {
    cursor: grabbing;
  }

  .transcript-word.is-current {
    position: relative;
    z-index: 1;
  }

  .transcript-word.is-current::before {
    content: '';
    position: absolute;
    z-index: 1;
    top: -0.55em;
    bottom: -0.12em;
    left: calc(var(--p) * 100%);
    width: 18px;
    transform: translateX(-50%);
    cursor: ew-resize;
    background-image:
      linear-gradient(#007dcf, #007dcf),
      linear-gradient(#fff, #fff),
      radial-gradient(circle at center, #007dcf 5px, #fff 5px 6.5px, transparent 7.5px);
    background-size: 4px calc(100% - 8px), 6px calc(100% - 8px), 16px 16px;
    background-position: center bottom, center bottom, center top;
    background-repeat: no-repeat;
  }

  .transcript-word:hover {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 2px;
  }
</style>
