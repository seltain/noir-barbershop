import { createElement, type CSSProperties, type ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

interface RevealProps {
  children: ReactNode
  as?: 'div' | 'li' | 'article' | 'figure' | 'span' | 'p' | 'h2'
  delay?: number
  className?: string
}

/** Fades and lifts children into place once they scroll into view. Fires once. */
export default function Reveal({ children, as = 'div', delay = 0, className = '' }: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLElement>()

  const style: CSSProperties | undefined = delay ? { transitionDelay: `${delay}ms` } : undefined

  return createElement(
    as,
    {
      ref,
      className: `reveal${isVisible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`,
      style,
    },
    children,
  )
}
