import { env } from '$env/dynamic/private'
import {
  MESSAGES, SafeTranscriptError, isAllowedAudioUrl, transcribeStoredAudio
} from '$lib/server/transcribeAudio.js'

export const config = { maxDuration: 800, split: true }

export async function POST ({ request }) {
  const want = String(env?.BB192_BACKFILL_SECRET ?? process.env.BB192_BACKFILL_SECRET ?? '').trim()
  const got = String(request.headers.get('x-bb192-secret') || '').trim()
  if (!want || got !== want) return json(401, { error: 'unauthorized' })

  const apiKey = String(env?.OPENAI_API_KEY ?? process.env.OPENAI_API_KEY ?? '').trim()
  if (!apiKey) return json(503, { error: MESSAGES.failed, detail: 'no-openai' })

  let body
  try { body = await request.json() } catch { return json(400, { error: MESSAGES.unreadable }) }
  const url = body?.audioDownloadURL
  if (typeof url !== 'string' || !isAllowedAudioUrl(url)) return json(400, { error: MESSAGES.unreadable })

  try {
    const result = await transcribeStoredAudio({ url, apiKey })
    return json(200, result.error
      ? { error: result.error, segments: result.segments || [] }
      : { segments: result.segments, error: '' })
  } catch (err) {
    const message = err instanceof SafeTranscriptError ? err.message : MESSAGES.failed
    if (!(err instanceof SafeTranscriptError)) console.error('bb192 backfill failed')
    return json(200, { error: message, segments: [] })
  }
}

function json (status, body) {
  return new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } })
}
