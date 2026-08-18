import { services } from '../data/content'
import Reveal from './Reveal'

export default function Services() {
  return (
    <section id="services" className="relative bg-noir-black py-28 md:py-40">
      <div className="container-editorial">
        <Reveal as="div" className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-6">
            <span className="eyebrow">02 — Услуги</span>
            <h2 className="font-display text-noir-bone text-[clamp(2.4rem,5.5vw,4.5rem)]">Меню мастерской</h2>
          </div>
          <p className="max-w-xs font-mono text-xs uppercase leading-relaxed tracking-widest2 text-noir-bone/45">
            Пять форматов работы. Каждый — приём одного клиента, без спешки и параллельных кресел.
          </p>
        </Reveal>

        <ul className="border-t border-noir-bone/10">
          {services.map((service, i) => (
            <Reveal as="li" key={service.name} delay={i * 60} className="group relative border-b border-noir-bone/10">
              <div className="relative overflow-hidden">
                <span className="absolute left-0 top-0 h-full w-0 bg-noir-brass transition-all duration-500 ease-editorial group-hover:w-[3px]" />
                <div className="grid grid-cols-[2rem_1fr] items-start gap-x-4 gap-y-3 py-7 transition-transform duration-500 ease-editorial group-hover:translate-x-4 md:grid-cols-[3rem_5fr_3fr_auto] md:items-center md:gap-x-8 md:py-9">
                  <span className="font-mono text-xs text-noir-brass md:text-sm">{service.index}</span>

                  <div className="flex flex-col gap-2">
                    <span className="font-display text-2xl text-noir-bone md:text-3xl">{service.name}</span>
                    <span className="max-w-md font-body text-sm text-noir-bone/45">{service.description}</span>
                  </div>

                  <span className="col-start-2 font-mono text-[0.7rem] uppercase tracking-widest2 text-noir-bone/50 md:col-start-3 md:text-right md:text-xs">
                    {service.duration}
                  </span>

                  <span className="col-start-2 justify-self-start font-mono text-lg text-noir-bone transition-colors duration-500 group-hover:text-noir-brass md:col-start-4 md:justify-self-end md:text-xl">
                    {service.price}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>

        <p className="mt-8 font-mono text-[0.68rem] uppercase tracking-widest2 text-noir-bone/35">
          Полный прайс и дополнительные позиции — уточняйте у мастера при записи
        </p>
      </div>
    </section>
  )
}
