<div
  class="transcript-panel"
  role="region"
  aria-label="Transcript"
  data-transcript-path={path}
  on:focusin={() => claimPlayback(path)}
  on:pointerdown={pressPanel}
>
  {#if paragraphs.length === 0}
    <p class="transcript-status">{problem || 'No transcript yet.'}</p>
  {:else}
    <div class="transcript-doc" use:trackDoc>
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
              on:click={(event) => pressWord(word, event)}
              on:keydown={(event) => onWordKeydown(word, event)}
              on:pointerenter={(event) => hoverWord(word, event)}
              on:pointermove={(event) => hoverWord(word, event)}
              on:pointerleave={() => leaveWord(word)}
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
  import {
    claimPlayback,
    hoverSeeksPlayback,
    playbackPathOf,
    playPlayback,
    seekPlayback,
    subscribePlayback
  } from '/src/helpers/playbackBridge.js'

  export let videoDoc

  let time = 0
  let duration = 0
  let playing = false
  let playFromPointer = false
  let docEl = null
  let revealedId = null
  let hoveredWordId = null
  let pointerHold = 0
  let scrubFrame = 0
  let scrubAt = null
  const wordNodes = {}
  const playback = { stop: () => {}, shown: null }

  $: path = playbackPathOf(videoDoc)
  $: segments = readCachedTranscript(videoDoc) || []
  $: problem = readTranscriptProblem(videoDoc, $transcriptProblems)
  $: documentModel = buildTranscriptDocument(segments, duration)
  $: words = documentModel.words
  $: paragraphs = documentModel.paragraphs
  $: currentWord = wordAtTime(words, time)
  $: progress = progressInWord(currentWord, time)
  $: revealCurrent(currentWord)
  $: followPlayback(path)

  function followPlayback(nextPath) {
    playback.stop()
    playback.shown = null
    playing = false
    playFromPointer = false
    duration = 0
    let pending = null
    playback.stop = subscribePlayback(nextPath, (snapshot) => {
      if (Number.isFinite(snapshot.duration) && snapshot.duration > 0) {
        duration = snapshot.duration
      }
      if (snapshot.playing === true) {
        playing = true
        playFromPointer = false
        if (hoveredWordId != null) {
          hoveredWordId = null
          clearTimeout(pointerHold)
          cancelScrub()
        }
      } else if (snapshot.playing === false) {
        playing = false
      }
      const next = snapshot.time
      if (!Number.isFinite(next)) return
      if (playFromPointer && snapshot.playing !== true && next + 0.35 < time) return
      if (hoveredWordId != null) {
        playback.shown = time
        pending = null
        return
      }
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
    node.addEventListener('pointerdown', clearTextSelection)
    return {
      destroy() {
        node.removeEventListener('pointerdown', clearTextSelection)
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
    if (hoveredWordId != null || typeof requestAnimationFrame !== 'function') return
    requestAnimationFrame(() => {
      if (hoveredWordId != null) return
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
    cancelScrub()
    time = at
    playback.shown = at
    seekPlayback(path, at)
  }

  function timeInWord(word, event) {
    const rect = event.currentTarget.getBoundingClientRect()
    const ratio = rect.width > 0 ? (event.clientX - rect.left) / rect.width : 0
    const clamped = ratio < 0 ? 0 : ratio > 1 ? 1 : ratio
    return word.start + (word.end - word.start) * clamped
  }

  function pressWord(word, event) {
    const at = timeInWord(word, event)
    playFromPointer = true
    placeAt(at)
    if (!playPlayback(path, at)) playFromPointer = false
  }

  function scrubTo(at) {
    time = at
    playback.shown = at
    if (scrubFrame) {
      scrubAt = at
      return
    }
    seekPlayback(path, at)
    const sent = at
    scrubAt = at
    scrubFrame = requestAnimationFrame(() => {
      scrubFrame = 0
      const next = scrubAt
      scrubAt = null
      if (next == null || next === sent) return
      seekPlayback(path, next)
    })
  }

  function cancelScrub() {
    if (!scrubFrame) return
    cancelAnimationFrame(scrubFrame)
    scrubFrame = 0
    scrubAt = null
  }

  function flushScrub() {
    if (!scrubFrame) return
    const next = scrubAt
    cancelScrub()
    if (next == null) return
    seekPlayback(path, next)
  }

  function hoverWord(word, event) {
    if (playFromPointer) return
    if (!hoverSeeksPlayback({
      pointerType: event.pointerType,
      buttons: event.buttons,
      playing
    })) return
    hoveredWordId = word.id
    scrubTo(timeInWord(word, event))
    clearTimeout(pointerHold)
    pointerHold = setTimeout(() => {
      if (hoveredWordId === word.id) hoveredWordId = null
    }, 160)
  }

  function leaveWord(word) {
    if (hoveredWordId !== word.id) return
    hoveredWordId = null
    clearTimeout(pointerHold)
    if (playFromPointer) {
      cancelScrub()
      return
    }
    flushScrub()
  }

  function pressPanel() {
    claimPlayback(path)
    if (hoveredWordId == null) return
    hoveredWordId = null
    clearTimeout(pointerHold)
    flushScrub()
  }

  function clearTextSelection() {
    const selection = window.getSelection && window.getSelection()
    if (selection && selection.rangeCount) selection.removeAllRanges()
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
    cancelScrub()
    clearTimeout(pointerHold)
  })
</script>

<style>
  .transcript-panel {
    display: flex;
    flex-direction: column;
    min-height: 0;
    padding: 4px 2px 8px;
    color: inherit;
  }

  .transcript-status {
    margin: 8px 12px;
    font-size: 1rem;
    line-height: 1.65;
    color: inherit;
  }

  .transcript-doc {
    overflow-y: auto;
    max-height: min(42vh, calc(100vh - 180px));
    padding: 10px 14px 20px;
    text-align: left;
    touch-action: pan-y;
    -webkit-user-select: none;
    user-select: none;
    scrollbar-width: thin;
    scrollbar-color: rgba(128, 128, 128, 0.5) transparent;
  }

  .transcript-paragraph {
    margin: 0 0 1em;
    max-width: 38rem;
    font-size: 1.0625rem;
    line-height: 1.7;
    color: inherit;
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
    cursor: default;
    border-radius: 1px;
  }

  .transcript-word:focus { outline: none; }

  .transcript-word.is-current {
    --caret: #F7C686;
    position: relative;
    z-index: 1;
  }

  .transcript-word.is-current::before {
    content: '';
    position: absolute;
    inset: 0.05em auto 0 calc(var(--p) * 100%);
    width: 0.4em;
    transform: translateX(-50%);
    pointer-events: none;
    background:
      linear-gradient(var(--caret), var(--caret)) center / 1px 100% no-repeat,
      linear-gradient(var(--caret), var(--caret)) center top / 100% 1px no-repeat,
      linear-gradient(var(--caret), var(--caret)) center bottom / 100% 1px no-repeat;
  }

  .transcript-word:hover,
  .transcript-word:focus-visible {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 2px;
  }
</style>
