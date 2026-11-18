export function fuzzyFilter (items, query, getName = (x) => x?.name) {
  const n = String(query || '').trim().toLowerCase()
  if (!n) return items
  return items
    .map((item, i) => {
      const h = String(getName(item) || '').toLowerCase()
      let score = -1
      if (!h) score = -1
      else if (h.startsWith(n)) score = 100
      else if (h.includes(n)) score = 70
      else if (h.split(/\s+/).some(w => w.startsWith(n))) score = 55
      return { item, score, i }
    })
    .filter(r => r.score >= 0)
    .sort((a, b) => b.score - a.score || a.i - b.i)
    .map(r => r.item)
}
