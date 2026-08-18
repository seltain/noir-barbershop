import { useState } from 'react'

interface ImageWithFallbackProps {
  src: string
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
}

/**
 * Renders the photo, or — if the file is missing — a dark placeholder labelled
 * with the expected filename, so gaps in the photo set stay visible instead of broken.
 */
export default function ImageWithFallback({ src, alt, className = '', loading = 'lazy' }: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false)
  const filename = src.split('/').pop()

  if (failed) {
    return (
      <div className={`flex items-center justify-center border border-noir-bone/10 bg-noir-graphite ${className}`}>
        <span className="px-4 text-center font-mono text-[0.62rem] uppercase leading-relaxed tracking-widest2 text-noir-bone/40">
          нет файла
          <br />
          {filename}
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      onError={() => setFailed(true)}
      // Unified film treatment so photos from different shoots/sources read as one series:
      // pulled-down saturation, slightly darker exposure, a touch more contrast, warm brass cast.
      className={`saturate-[0.8] sepia-[0.14] contrast-[1.06] brightness-[0.93] ${className}`}
    />
  )
}
