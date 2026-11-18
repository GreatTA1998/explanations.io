<div
  class="transcript-panel"
  role="region"
  aria-label="Transcript"
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
              class:in-sentence={playing && sentence && word.id >= sentence.from && word.id <= sentence.to}
              style={!playing && currentWord && word.id === currentWord.id ? `--p:${progress}` : undefined}
              tabindex={!currentWord ? (word.id === 0 ? 0 : -1) : (word.id === currentWord.id ? 0 : -1)}
              use:rememberWord={word}
              on:click={(event) => pressWord(word, event)}
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
  import { readCachedTranscript, readTranscriptProblem, transcriptProblems } from '/src/helpers/transcript.js'
  import { buildTranscriptDocument, progressInWord, sentenceAtTime, wordAtTime } from '/src/helpers/transcriptDocument.js'
  import { playbackAudio, playbackPathOf, playPlayback, seekPlayback } from '/src/helpers/playbackClock.js'

  export let videoDoc

  let time = 0, duration = 0, playing = false
  let docEl = null, revealedId = null, clockFrame = 0
  const wordNodes = {}

  $: path = playbackPathOf(videoDoc)
  $: segments = readCachedTranscript(videoDoc) || []
  $: problem = readTranscriptProblem(videoDoc, $transcriptProblems)
  $: documentModel = buildTranscriptDocument(segments, duration)
  $: words = documentModel.words
  $: paragraphs = documentModel.paragraphs
  $: currentWord = wordAtTime(words, time)
  $: sentence = sentenceAtTime(words, time)
  $: progress = progressInWord(currentWord, time)
  $: revealCurrent(currentWord)
  $: { path; restartClock() }

  function restartClock () {
    stopClock(); playing = false; duration = 0
    const tick = () => {
      const audio = playbackAudio(path)
      if (audio) {
        if (Number.isFinite(audio.duration) && audio.duration > 0) duration = audio.duration
        playing = !audio.paused
        const next = audio.currentTime || 0
        if (Number.isFinite(next)) time = next
      }
      clockFrame = requestAnimationFrame(tick)
    }
    clockFrame = requestAnimationFrame(tick)
  }

  function stopClock () { if (clockFrame) cancelAnimationFrame(clockFrame); clockFrame = 0 }

  function trackDoc (node) {
    docEl = node
    node.addEventListener('pointerdown', clearTextSelection)
    return {
      destroy () {
        node.removeEventListener('pointerdown', clearTextSelection)
        if (docEl === node) docEl = null
      }
    }
  }

  function rememberWord (node, word) {
    wordNodes[word.id] = node
    return { destroy () { if (wordNodes[word.id] === node) delete wordNodes[word.id] } }
  }

  function revealCurrent (word) {
    if (!word || word.id === revealedId) return
    revealedId = word.id
    if (typeof requestAnimationFrame !== 'function') return
    requestAnimationFrame(() => {
      const node = wordNodes[word.id]
      if (!node || !docEl) return
      const docRect = docEl.getBoundingClientRect(), wordRect = node.getBoundingClientRect()
      if (wordRect.top < docRect.top) docEl.scrollTop -= docRect.top - wordRect.top
      else if (wordRect.bottom > docRect.bottom) docEl.scrollTop += wordRect.bottom - docRect.bottom
    })
  }

  function timeInWord (word, event) {
    const rect = event.currentTarget.getBoundingClientRect()
    const ratio = rect.width > 0 ? (event.clientX - rect.left) / rect.width : 0
    const clamped = ratio < 0 ? 0 : ratio > 1 ? 1 : ratio
    return word.start + (word.end - word.start) * clamped
  }

  function pressWord (word, event) {
    const at = timeInWord(word, event)
    time = at
    seekPlayback(path, at)
    playPlayback(path, at)
  }

  function clearTextSelection () {
    const selection = window.getSelection && window.getSelection()
    if (selection?.rangeCount) selection.removeAllRanges()
  }

  function onWordKeydown (word, event) {
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.preventDefault()
    pressWord(word, event)
  }

  onDestroy(stopClock)
</script>

<style>
  .transcript-panel { display: flex; flex-direction: column; min-height: 0; padding: 4px 2px 8px; color: inherit; }
  .transcript-status { margin: 8px 12px; font-size: 1rem; line-height: 1.65; color: inherit; }
  .transcript-doc {
    position: relative; overflow-y: auto; padding: 10px 14px 20px; text-align: left; touch-action: pan-y;
    -webkit-user-select: none; user-select: none;
    scrollbar-width: thin; scrollbar-color: rgba(128, 128, 128, 0.5) transparent;
  }
  .transcript-paragraph { margin: 0 0 1em; max-width: 38rem; font-size: 1.0625rem; line-height: 1.7; color: inherit; }
  .transcript-word {
    display: inline; appearance: none; margin: 0; padding: 0 0.14em; border: 0; background: none;
    font: inherit; color: inherit; line-height: inherit; letter-spacing: inherit; text-align: inherit;
    cursor: default; border-radius: 1px; position: relative; z-index: 1;
  }
  .transcript-word:focus { outline: none; }
  .transcript-word.in-sentence {
    --caret: #F7C686;
    box-shadow: inset 0 -2px 0 var(--caret);
  }
  .transcript-word.is-current { --caret: #F7C686; position: relative; z-index: 1; }
  .transcript-word.is-current::before {
    content: ''; position: absolute; inset: 0.05em auto 0 calc(var(--p) * 100%);
    width: 0.4em; transform: translateX(-50%); pointer-events: none;
    background:
      linear-gradient(var(--caret), var(--caret)) center / 1px 100% no-repeat,
      linear-gradient(var(--caret), var(--caret)) center top / 100% 1px no-repeat,
      linear-gradient(var(--caret), var(--caret)) center bottom / 100% 1px no-repeat;
  }
  .transcript-word.in-sentence.is-current::before { display: none; }
  .transcript-word:hover,
  .transcript-word:focus-visible { text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 2px; }
</style>
