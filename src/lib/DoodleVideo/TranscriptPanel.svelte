<div class="transcript-panel">
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
  let docEl = null
  let revealedId = null
  const wordNodes = {}
  const playback = { stop: () => {} }

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
    let shown = null
    let pending = null
    playback.stop = subscribePlayback(nextPath, (snapshot) => {
      const next = snapshot.time
      if (!Number.isFinite(next)) return
      // A seek (scrub, or a click in this transcript) may jump backward.
      // A single backward tick may not: this recording's clock was published
      // twice and a bad sample pulled the row highlight back to an earlier cue.
      if (snapshot.reason === 'seek' || shown == null || next + 0.35 >= shown) {
        shown = next
        pending = null
        time = shown
        return
      }
      if (pending != null && Math.abs(pending - next) < 0.5) {
        shown = next
        pending = null
        time = shown
        return
      }
      pending = next
    })
  }

  function trackDoc(node) {
    docEl = node
    return {
      destroy() {
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
    if (typeof requestAnimationFrame !== 'function') return
    requestAnimationFrame(() => {
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

  function placeCursor(word, event) {
    const rect = event.currentTarget.getBoundingClientRect()
    const ratio = rect.width > 0 ? (event.clientX - rect.left) / rect.width : 0
    const clamped = Math.min(1, Math.max(0, ratio))
    const at = word.start + (word.end - word.start) * clamped
    seekPlayback(path, at)
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
    seekPlayback(path, next.start)
  }

  onDestroy(() => playback.stop())
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

  .transcript-word.is-current {
    background-image: linear-gradient(
      90deg,
      transparent calc(var(--p) * 100% - 0.7px),
      rgba(0, 0, 0, 0.9) calc(var(--p) * 100% - 0.7px),
      rgba(0, 0, 0, 0.9) calc(var(--p) * 100% + 0.7px),
      transparent calc(var(--p) * 100% + 0.7px)
    );
  }

  .transcript-word:hover {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 2px;
  }
</style>
