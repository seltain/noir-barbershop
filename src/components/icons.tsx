interface IconProps {
  className?: string
}

/** Hand-drawn, thin-line marks — no icon-set imports, matching the brand's single brass line motif. */

export function IconMenu({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <line x1="4" y1="10" x2="28" y2="10" stroke="currentColor" strokeWidth="1.25" />
      <line x1="4" y1="16" x2="22" y2="16" stroke="currentColor" strokeWidth="1.25" />
      <line x1="4" y1="22" x2="28" y2="22" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  )
}

export function IconClose({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <line x1="6" y1="6" x2="26" y2="26" stroke="currentColor" strokeWidth="1.25" />
      <line x1="26" y1="6" x2="6" y2="26" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  )
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6.5 3.5c.7 1.6 1.5 3 2.4 4.1.3.4.3.9-.1 1.3L7.4 10.3c.9 2.1 2.5 3.9 4.7 5.1l1.5-1.5c.4-.4.9-.4 1.3-.1 1.2.9 2.6 1.6 4.1 2.2.6.2.9.8.7 1.4l-.7 2c-.2.5-.7.8-1.2.8-7.5-.4-13.5-6.4-13.9-13.9 0-.5.3-1 .8-1.2l2-.7c.6-.2 1.2.1 1.4.7.1.1.1.2 0 .2z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconPin({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21s7-6.6 7-12A7 7 0 1 0 5 9c0 5.4 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  )
}

export function IconTelegram({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="m3.5 12.3 15.4-6.5c.7-.3 1.3.2 1.1 1l-2.6 12.6c-.2.9-1 1.1-1.6.6l-4-3-2 2c-.3.3-.6.2-.7-.2l-.9-3.5-4-1.2c-.7-.2-.7-1 .3-1.3Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconClock({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.4" stroke="currentColor" strokeWidth="1.1" />
      <path d="M12 7.6V12l3 2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  )
}

export function IconArrowDown({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 28" fill="none" className={className} aria-hidden="true">
      <line x1="8" y1="0" x2="8" y2="22" stroke="currentColor" strokeWidth="1" />
      <path d="M3 17 8 22 13 17" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="14.5" stroke="currentColor" strokeWidth="1" />
      <path d="M9.5 16.5 13.5 20.5 22.5 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
