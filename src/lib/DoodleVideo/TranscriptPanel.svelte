<div class="transcript-panel">
  {#if segments.length === 0}
    <p class="transcript-status">No transcript yet.</p>
  {:else}
    <div class="transcript-list" use:trackList>
      {#each segments as segment (`${segment.start}-${segment.end}-${segment.text}`)}
        <button
          type="button"
          class="transcript-line"
          class:is-active={segment === activeSegment}
          aria-current={segment === activeSegment ? 'true' : undefined}
          use:rememberLine={segment}
          on:click={() => seekPlayback(path, segment.start)}
        >
          <span class="transcript-time">{formatTranscriptTime(segment.start)}</span>
          <span class="transcript-text">{segment.text}</span>
        </button>
      {/each}
    </div>
  {/if}
</div>

<script>
  import { onMount } from 'svelte'
  import { formatTranscriptTime, readCachedTranscript } from '/src/helpers/transcript.js'
  import { playbackPathOf, seekPlayback, subscribePlayback } from '/src/helpers/playbackBridge.js'

  export let videoDoc

  let time = 0
  let listEl = null
  let scrolledSegment = null
  const lineNodes = {}

  $: path = playbackPathOf(videoDoc)
  $: segments = readCachedTranscript(videoDoc) || []
  $: activeSegment = findActiveSegment(segments, time)
  $: scrollActiveLine(activeSegment)

  onMount(() => {
    return subscribePlayback(path, (snapshot) => {
      time = snapshot.time
    })
  })

  function findActiveSegment(lines, playbackTime) {
    if (!lines.length || !Number.isFinite(playbackTime)) return null
    let active = null
    for (const line of lines) {
      if (playbackTime + 0.05 >= line.start) active = line
      else break
    }
    return active
  }

  function lineKey(segment) {
    return `${segment.start}-${segment.end}-${segment.text}`
  }

  function trackList(node) {
    listEl = node
    return {
      destroy() {
        if (listEl === node) listEl = null
      }
    }
  }

  function rememberLine(node, segment) {
    const key = lineKey(segment)
    lineNodes[key] = node
    return {
      destroy() {
        if (lineNodes[key] === node) delete lineNodes[key]
      }
    }
  }

  function scrollActiveLine(segment) {
    if (!segment || segment === scrolledSegment) return
    requestAnimationFrame(() => {
      const line = lineNodes[lineKey(segment)]
      if (!line || !listEl) return
      scrolledSegment = segment
      const top = line.offsetTop
      const bottom = top + line.offsetHeight
      if (top < listEl.scrollTop) listEl.scrollTop = top
      else if (bottom > listEl.scrollTop + listEl.clientHeight) {
        listEl.scrollTop = bottom - listEl.clientHeight
      }
    })
  }
</script>

<style>
  .transcript-panel {
    display: flex;
    flex-direction: column;
    min-height: 0;
    padding: 8px 4px 12px;
  }

  .transcript-status {
    margin: 8px;
    font-size: 0.8125rem;
    line-height: 1.4;
    color: rgba(0, 0, 0, 0.7);
  }

  .transcript-list {
    overflow-y: auto;
    max-height: calc(100vh - 180px);
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .transcript-line {
    display: flex;
    gap: 8px;
    width: 100%;
    text-align: left;
    padding: 6px 8px;
    border-radius: 4px;
    align-items: baseline;
  }

  .transcript-line:hover,
  .transcript-line.is-active {
    background: rgba(255, 255, 255, 0.72);
  }

  .transcript-time {
    flex: 0 0 auto;
    font-variant-numeric: tabular-nums;
    color: rgba(0, 0, 0, 0.55);
    font-size: 0.75rem;
  }

  .transcript-text {
    font-size: 0.875rem;
    line-height: 1.35;
    text-align: left;
  }
</style>
