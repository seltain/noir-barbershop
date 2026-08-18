import ImageWithFallback from './ImageWithFallback'
import { IconArrowDown } from './icons'

interface HeroProps {
  onBook: () => void
}

export default function Hero({ onBook }: HeroProps) {
  return (
    <section id="top" className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-noir-black">
      <ImageWithFallback
        src="/images/hero.jpg"
        alt="Мастер NOIR держит ножницы — атмосфера приватного барбершопа"
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover object-[70%_20%]"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.35) 30%, rgba(10,10,10,0.55) 68%, rgba(10,10,10,0.96) 100%)',
        }}
      />

      <div className="container-editorial relative z-10 flex w-full flex-col gap-10 pb-16 pt-32 md:pb-20">
        <span className="eyebrow">Приватный барбершоп — Новосибирск</span>

        <h1 className="select-none font-display leading-[0.86] tracking-[-0.01em] text-noir-bone text-[clamp(4.2rem,20vw,13.5rem)]">
          NOIR
        </h1>

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-2xl font-display text-[clamp(1.6rem,4.2vw,3rem)] leading-[1.12] text-noir-bone">
            Твой стиль.
            <br />
            Твоя подпись.
          </p>

          <div className="flex flex-col gap-6 md:items-end">
            <p className="max-w-xs font-body text-sm text-noir-bone/70 md:text-right">
              Закрытая атмосфера и индивидуальный сервис — пространство, куда приходят за уверенностью.
            </p>
            <div className="flex flex-wrap items-center gap-8">
              <button type="button" onClick={onBook} className="btn-primary">
                Записаться
              </button>
              <a href="#services" className="btn-ghost">
                Услуги
              </a>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#philosophy"
        aria-label="Прокрутить к следующему разделу"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 text-noir-brass/80 transition-colors hover:text-noir-brass md:block"
      >
        <IconArrowDown className="h-7 w-4" />
      </a>
    </section>
  )
}
