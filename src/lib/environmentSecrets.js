
import { dev } from '$app/env'

if (dev) {
  export const API_KEY_SECRET = import('./dailyCreds.js')
} else {
  export const API_KEY_SECRET = process.env.DAILY_API_KEY
}
