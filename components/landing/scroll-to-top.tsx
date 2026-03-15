"use client"

import { useEffect } from "react"

/**
 * On initial page load, scroll to top (hero) and clear any hash from the URL.
 * This prevents the browser from auto-scrolling to #services or another hash
 * when the site is opened. Only runs once on mount.
 */
export function ScrollToTop() {
  useEffect(() => {
    if (typeof window === "undefined") return
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }
    const { pathname, search } = window.location
    if (window.location.hash) {
      window.history.replaceState(null, "", pathname + search)
    }
    window.scrollTo(0, 0)
  }, [])
  return null
}
