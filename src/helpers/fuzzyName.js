/** Prefix / substring / word-prefix / 1-char typo. Higher is better; -1 = miss. */
export function fuzzyScore (name, query) {
  const h = String(name || '').toLowerCase()
  const n = String(query || '').trim().toLowerCase()
  if (!n) return 1
  if (!h) return -1
  if (h.startsWith(n)) return 100 - Math.min(h.length - n.length, 20)
  const at = h.indexOf(n)
  if (at >= 0) return 70 - Math.min(at, 30)
  if (h.split(/\s+/).some(w => w.startsWith(n))) return 55
  if (n.length > 2) {
    for (let i = 0; i < n.length; i++) {
      if (h.includes(n.slice(0, i) + n.slice(i + 1))) return 25
    }
  }
  return -1
}

/** O(n) in-memory filter; empty query returns `items` unchanged. */
export function fuzzyFilter (items, query, getName = (x) => x?.name) {
  const n = String(query || '').trim()
  if (!n) return items
  return items
    .map((item, i) => ({ item, score: fuzzyScore(getName(item), n), i }))
    .filter(r => r.score >= 0)
    .sort((a, b) => b.score - a.score || a.i - b.i)
    .map(r => r.item)
}
