import { masters } from '../data/content'
import ImageWithFallback from './ImageWithFallback'
import Reveal from './Reveal'

const layout = [
  { wrap: 'md:col-span-6', aspect: 'aspect-[4/5]', offset: '' },
  { wrap: 'md:col-span-3 md:col-start-7', aspect: 'aspect-[3/4]', offset: 'md:mt-24' },
  { wrap: 'md:col-span-3 md:col-start-10', aspect: 'aspect-[3/4]', offset: 'md:mt-8' },
]

export default function Masters() {
  return (
    <section id="masters" className="relative bg-noir-black py-28 md:py-40">
      <div className="container-editorial">
        <Reveal as="div" className="mb-16 flex flex-col gap-6 md:mb-24">
          <span className="eyebrow">03 — Мастера</span>
          <h2 className="max-w-3xl font-display text-noir-bone text-[clamp(2.4rem,5.5vw,4.5rem)]">
            Три мастера. Один стандарт.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-6">
          {masters.map((master, i) => {
            const pos = layout[i] ?? layout[0]
            return (
              <Reveal as="div" key={master.name} delay={i * 100} className={`${pos.wrap} ${pos.offset}`}>
                <div className={`group relative overflow-hidden bg-noir-graphite ${pos.aspect}`}>
                  <ImageWithFallback
                    src={master.image}
                    alt={master.alt}
                    className={`h-full w-full object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.06] ${master.focus}`}
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{ background: 'linear-gradient(180deg, rgba(10,10,10,0) 55%, rgba(10,10,10,0.5) 100%)' }}
                  />
                  <span className="absolute right-5 top-5 font-mono text-xs text-noir-bone/70">
                    0{i + 1}
                  </span>
                </div>

                <div className="mt-6 flex flex-col gap-2">
                  <h3 className="font-display text-2xl text-noir-bone">{master.name}</h3>
                  <span className="brass-line w-8" />
                  <p className="font-mono text-[0.68rem] uppercase tracking-widest2 text-noir-brass">{master.role}</p>
                  <p className="text-sm text-noir-bone/50">
                    {master.experience} · {master.specialization}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
