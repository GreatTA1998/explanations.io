<div
  class="transcript-panel"
  role="region"
  aria-label="Transcript"
  data-transcript-path={path}
  on:focusin={() => claimPlayback(path)}
  on:pointerdown={pressPanel}
>
  {#if paragraphs.length}
    <!-- TEMP sentence-look scaffold — delete with LOOKS/bands block -->
    <button type="button" class="look-cycle" title="TEMP sentence look · Alt+L" on:click|stopPropagation={cycleLook}>{lookName}</button>
  {/if}
  {#if paragraphs.length === 0}
    <p class="transcript-status">{problem || 'No transcript yet.'}</p>
  {:else}
    <div class="transcript-doc" class:is-playing={playing} data-look={lookName} use:trackDoc>
      {#if playing && bands.length}
        <div class="sentence-hl" aria-hidden="true">
          {#each bands as b, i (i)}<i style="transform:translate({b.left}px,{b.top}px);width:{b.width}px;height:{b.height}px"></i>{/each}
        </div>
      {/if}
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
  import { readCachedTranscript, readTranscriptProblem, transcriptProblems } from '/src/helpers/transcript.js'
  import { buildTranscriptDocument, progressInWord, sentenceBounds, wordAtTime } from '/src/helpers/transcriptDocument.js'
  import {
    claimPlayback, hoverSeeksPlayback, playbackAudio, playbackPathOf, playPlayback, seekPlayback
  } from '/src/helpers/playbackClock.js'

  export let videoDoc

  let time = 0, duration = 0, playing = false, playFromPointer = false
  let docEl = null, revealedId = null, hoveredWordId = null
  let pointerHold = 0, scrubFrame = 0, scrubAt = null, shown = null, pending = null, clockFrame = 0
  const wordNodes = {}

  // TEMP sentence-look scaffold (Alt+L / badge) — delete after pick
  const LOOKS = ['underline', 'wash', 'rail', 'dim']
  let look = 0, bands = [], bandFrame = 0
  $: lookName = LOOKS[look]
  $: { playing; sentence; look; time; scheduleBands() }
  function cycleLook () { look = (look + 1) % LOOKS.length }
  function onLookKey (e) {
    if (e.altKey && !e.metaKey && !e.ctrlKey && (e.key === 'l' || e.key === 'L')) { e.preventDefault(); cycleLook() }
  }
  function scheduleBands () {
    if (typeof requestAnimationFrame !== 'function') return
    if (bandFrame) cancelAnimationFrame(bandFrame)
    bandFrame = requestAnimationFrame(() => { bandFrame = 0; paintBands() })
  }
  function paintBands () {
    if (!playing || !sentence || !docEl) { bands = []; return }
    const a = wordNodes[sentence.from], b = wordNodes[sentence.to]
    if (!a || !b) { bands = []; return }
    const range = document.createRange(); range.setStartBefore(a); range.setEndAfter(b)
    const box = docEl.getBoundingClientRect(), ox = box.left - docEl.scrollLeft, oy = box.top - docEl.scrollTop
    const merged = mergeRows([...range.getClientRects()].filter((r) => r.width > 1 && r.height > 1)
      .map((r) => ({ top: r.top - oy, left: r.left - ox, width: r.width, height: r.height })))
    if (lookName !== 'rail' || !merged.length) { bands = merged; return }
    const top = Math.min(...merged.map((m) => m.top)), bottom = Math.max(...merged.map((m) => m.top + m.height))
    bands = [{ top, left: Math.min(...merged.map((m) => m.left)) - 8, width: 2, height: bottom - top }]
  }
  function mergeRows (rects) {
    const rows = []
    for (const r of rects) {
      const row = rows.find((x) => Math.abs(x.top + x.height / 2 - (r.top + r.height / 2)) < r.height * 0.45)
      if (!row) { rows.push({ ...r }); continue }
      const right = Math.max(row.left + row.width, r.left + r.width), bottom = Math.max(row.top + row.height, r.top + r.height)
      row.left = Math.min(row.left, r.left); row.width = right - row.left
      row.top = Math.min(row.top, r.top); row.height = bottom - row.top
    }
    return rows
  }
  if (typeof window !== 'undefined') { window.addEventListener('keydown', onLookKey); window.addEventListener('resize', scheduleBands) }
  // end TEMP

  $: path = playbackPathOf(videoDoc)
  $: segments = readCachedTranscript(videoDoc) || []
  $: problem = readTranscriptProblem(videoDoc, $transcriptProblems)
  $: documentModel = buildTranscriptDocument(segments, duration)
  $: words = documentModel.words
  $: paragraphs = documentModel.paragraphs
  $: currentWord = wordAtTime(words, time)
  $: sentence = sentenceBounds(words, currentWord)
  $: progress = progressInWord(currentWord, time)
  $: revealCurrent(currentWord)
  $: { path; restartClock() }

  function restartClock () {
    stopClock(); shown = pending = null; playing = playFromPointer = false; duration = 0
    const tick = () => {
      const audio = playbackAudio(path)
      if (audio) {
        if (Number.isFinite(audio.duration) && audio.duration > 0) duration = audio.duration
        const nextPlaying = !audio.paused
        if (nextPlaying) {
          playing = true; playFromPointer = false
          if (hoveredWordId != null) { hoveredWordId = null; clearTimeout(pointerHold); cancelScrub() }
        } else playing = false
        acceptTime(audio.currentTime || 0, audio.seeking ? 'seek' : 'tick')
      }
      clockFrame = requestAnimationFrame(tick)
    }
    clockFrame = requestAnimationFrame(tick)
  }

  function stopClock () { if (clockFrame) cancelAnimationFrame(clockFrame); clockFrame = 0 }

  function acceptTime (next, reason) {
    if (!Number.isFinite(next)) return
    if (playFromPointer && reason !== 'seek' && !playing && next + 0.35 < time) return
    if (hoveredWordId != null) { shown = time; pending = null; return }
    if (reason === 'seek' || shown == null || next + 0.35 >= shown || (pending != null && Math.abs(pending - next) < 0.5)) {
      shown = next; pending = null; time = shown; return
    }
    pending = next
  }

  function trackDoc (node) {
    docEl = node
    node.addEventListener('pointerdown', clearTextSelection)
    node.addEventListener('scroll', scheduleBands, { passive: true })
    return {
      destroy () {
        node.removeEventListener('pointerdown', clearTextSelection)
        node.removeEventListener('scroll', scheduleBands)
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
    if (hoveredWordId != null || typeof requestAnimationFrame !== 'function') return
    requestAnimationFrame(() => {
      if (hoveredWordId != null) return
      const node = wordNodes[word.id]
      if (!node || !docEl) return
      const docRect = docEl.getBoundingClientRect(), wordRect = node.getBoundingClientRect()
      if (wordRect.top < docRect.top) docEl.scrollTop -= docRect.top - wordRect.top
      else if (wordRect.bottom > docRect.bottom) docEl.scrollTop += wordRect.bottom - docRect.bottom
      scheduleBands()
    })
  }

  function placeAt (at) { cancelScrub(); time = shown = at; seekPlayback(path, at) }

  function timeInWord (word, event) {
    const rect = event.currentTarget.getBoundingClientRect()
    const ratio = rect.width > 0 ? (event.clientX - rect.left) / rect.width : 0
    const clamped = ratio < 0 ? 0 : ratio > 1 ? 1 : ratio
    return word.start + (word.end - word.start) * clamped
  }

  function pressWord (word, event) {
    const at = timeInWord(word, event); playFromPointer = true; placeAt(at)
    if (!playPlayback(path, at)) playFromPointer = false
  }

  function scrubTo (at) {
    time = shown = at
    if (scrubFrame) { scrubAt = at; return }
    seekPlayback(path, at)
    const sent = scrubAt = at
    scrubFrame = requestAnimationFrame(() => {
      scrubFrame = 0
      const next = scrubAt; scrubAt = null
      if (next != null && next !== sent) seekPlayback(path, next)
    })
  }

  function cancelScrub () {
    if (!scrubFrame) return
    cancelAnimationFrame(scrubFrame); scrubFrame = 0; scrubAt = null
  }

  function flushScrub () {
    if (!scrubFrame) return
    const next = scrubAt; cancelScrub()
    if (next != null) seekPlayback(path, next)
  }

  function hoverWord (word, event) {
    if (playFromPointer) return
    if (!hoverSeeksPlayback({ pointerType: event.pointerType, buttons: event.buttons, playing })) return
    hoveredWordId = word.id
    scrubTo(timeInWord(word, event))
    clearTimeout(pointerHold)
    pointerHold = setTimeout(() => { if (hoveredWordId === word.id) hoveredWordId = null }, 160)
  }

  function leaveWord (word) {
    if (hoveredWordId !== word.id) return
    hoveredWordId = null; clearTimeout(pointerHold)
    if (playFromPointer) cancelScrub(); else flushScrub()
  }

  function pressPanel () {
    claimPlayback(path)
    if (hoveredWordId == null) return
    hoveredWordId = null; clearTimeout(pointerHold); flushScrub()
  }

  function clearTextSelection () {
    const selection = window.getSelection && window.getSelection()
    if (selection?.rangeCount) selection.removeAllRanges()
  }

  function onWordKeydown (word, event) {
    let index = word.id
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') index += 1
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') index -= 1
    else return
    event.preventDefault()
    const next = words[Math.min(words.length - 1, Math.max(0, index))]
    wordNodes[next.id]?.focus()
    placeAt(next.start)
  }

  onDestroy(() => {
    stopClock(); cancelScrub(); clearTimeout(pointerHold)
    if (bandFrame) cancelAnimationFrame(bandFrame)
    if (typeof window !== 'undefined') {
      window.removeEventListener('keydown', onLookKey)
      window.removeEventListener('resize', scheduleBands)
    }
  })
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
    display: inline; appearance: none; margin: 0 0.28em 0 0; padding: 0; border: 0; background: none;
    font: inherit; color: inherit; line-height: inherit; letter-spacing: inherit; text-align: inherit;
    cursor: default; border-radius: 1px; position: relative; z-index: 1;
  }
  .transcript-word:focus { outline: none; }
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

  /* TEMP look styles — delete with scaffold */
  .look-cycle { align-self: flex-end; margin: 0 10px 2px; padding: 0; border: 0; background: none; font: inherit; font-size: 0.7rem; color: rgba(160,160,160,.9); cursor: pointer; }
  .sentence-hl { position: absolute; inset: 0; pointer-events: none; z-index: 0; --caret: #F7C686; }
  .sentence-hl i { position: absolute; left: 0; top: 0; display: block; box-sizing: border-box; }
  .transcript-doc[data-look='underline'] .sentence-hl i,
  .transcript-doc[data-look='dim'] .sentence-hl i { background: linear-gradient(var(--caret), var(--caret)) 0 100% / 100% 2px no-repeat; }
  .transcript-doc[data-look='wash'] .sentence-hl i { background: color-mix(in srgb, var(--caret) 34%, transparent); border-radius: 3px; }
  .transcript-doc[data-look='rail'] .sentence-hl i { background: var(--caret); border-radius: 1px; }
  .transcript-doc[data-look='rail'].is-playing .in-sentence { color: color-mix(in srgb, #F7C686 48%, currentColor); }
  .transcript-doc[data-look='dim'].is-playing .transcript-word { opacity: 0.4; }
  .transcript-doc[data-look='dim'].is-playing .in-sentence { opacity: 1; }
</style>
