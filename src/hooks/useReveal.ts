import { useEffect, useRef, useState } from 'react'

/**
 * Reveals an element once it scrolls into view, via IntersectionObserver.
 * Fires only once. Respects prefers-reduced-motion by revealing immediately.
 */
export function useReveal<T extends HTMLElement>(rootMargin = '0px 0px -80px 0px') {
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.15, rootMargin },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [rootMargin])

  return { ref, isVisible }
}
