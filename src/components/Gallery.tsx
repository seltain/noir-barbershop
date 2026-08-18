import { galleryItems } from '../data/content'
import ImageWithFallback from './ImageWithFallback'
import Reveal from './Reveal'

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-noir-black py-28 md:py-40">
      <div className="container-editorial">
        <Reveal as="div" className="mb-16 flex flex-col gap-6 md:mb-20">
          <span className="eyebrow">04 — Галерея</span>
          <h2 className="max-w-2xl font-display text-noir-bone text-[clamp(2.4rem,5.5vw,4.5rem)]">
            Кадры из мастерской
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-12 md:auto-rows-[110px] md:gap-4">
          {galleryItems.map((item, i) => (
            <Reveal
              as="figure"
              key={item.image}
              delay={(i % 4) * 70}
              className={`group relative aspect-[4/3] overflow-hidden bg-noir-graphite md:aspect-auto ${item.span}`}
            >
              <ImageWithFallback
                src={item.image}
                alt={item.alt}
                className={`h-full w-full scale-[1.01] object-cover transition-transform duration-[1100ms] ease-editorial group-hover:scale-110 ${item.focus ?? ''}`}
              />
              <div
                className="pointer-events-none absolute inset-0 bg-noir-black/25 transition-colors duration-500 ease-editorial group-hover:bg-noir-black/55"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
                style={{ background: 'linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.85) 100%)' }}
              />
              <figcaption className="absolute bottom-4 left-4 font-mono text-[0.65rem] uppercase tracking-widest2 text-noir-bone/80 transition-colors duration-500 group-hover:text-noir-brass">
                {item.caption}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
