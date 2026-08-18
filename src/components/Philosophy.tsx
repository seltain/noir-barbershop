import Reveal from './Reveal'

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative bg-noir-black py-28 md:py-44">
      <div className="container-editorial">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-6">
          <Reveal as="div" className="md:col-span-3">
            <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-8">
              <span className="eyebrow">01 — Философия</span>
              <span className="brass-line hidden w-10 md:block" />
            </div>
          </Reveal>

          <Reveal as="h2" delay={100} className="font-display leading-[1.28] text-noir-bone md:col-span-9 md:col-start-4 text-[clamp(1.7rem,3.6vw,3.1rem)]">
            Хороший барбер стрижёт волосы.{' '}
            <span className="text-noir-brass">Мастер NOIR</span> работает с вашей уверенностью.{' '}
            <span className="text-noir-bone/55">
              Здесь нет случайных людей и лишних разговоров — только точность, тишина и результат, ради которого
              стоит записываться заранее.
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
