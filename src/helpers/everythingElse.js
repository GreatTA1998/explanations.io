import { classDetailsDrawerWidth } from "../store.js"
import { get } from 'svelte/store'

export const drawerExpandedWidth = 240

export function  toggleClassDetailsDrawerWidth () {
  if (get(classDetailsDrawerWidth) === drawerExpandedWidth) {
    classDetailsDrawerWidth.set(0)
  }
  else if (get(classDetailsDrawerWidth) === 0) {
    classDetailsDrawerWidth.set(drawerExpandedWidth)
  }
}