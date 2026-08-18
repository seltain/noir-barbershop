import ImageWithFallback from './ImageWithFallback'
import Reveal from './Reveal'

export default function Atmosphere() {
  return (
    <section className="relative flex h-[85vh] min-h-[520px] w-full items-center overflow-hidden bg-noir-black">
      <ImageWithFallback
        src="/images/atmosphere.jpg"
        alt="Кресло и рабочее место мастера NOIR в приглушённом свете"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(90deg, rgba(10,10,10,0.9) 10%, rgba(10,10,10,0.35) 55%, rgba(10,10,10,0.75) 100%)' }}
      />

      <div className="container-editorial relative z-10">
        <Reveal as="div" className="max-w-3xl">
          <span className="eyebrow">05 — Атмосфера</span>
          <h2 className="mt-8 font-display leading-[1.1] text-noir-bone text-[clamp(2.6rem,7vw,5.5rem)]">
            Здесь важна
            <br />
            каждая деталь.
          </h2>
        </Reveal>
      </div>
    </section>
  )
}
