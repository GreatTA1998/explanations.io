import { readable, writable } from 'svelte/store';
import { onAuthStateChanged, getAuth } from 'firebase/auth'

export const hasFetchedUser = writable(false)
export const user = writable({}) // {} means not logged in, cannot be null

export const currentTool = writable({
    type: 'pencil',
    color: 'white',
    lineWidth: 3
})