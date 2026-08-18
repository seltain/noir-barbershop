import Reveal from './Reveal'

interface BookingCTAProps {
  onBook: () => void
}

export default function BookingCTA({ onBook }: BookingCTAProps) {
  return (
    <section id="booking" className="relative bg-noir-black py-28 md:py-40">
      <div className="container-editorial">
        <Reveal as="div" className="flex flex-col items-center gap-10 text-center">
          <span className="brass-line w-14" />
          <h2 className="max-w-4xl font-display leading-[1.05] text-noir-bone text-[clamp(2.6rem,7vw,6rem)]">
            Готов к своей
            <br />
            лучшей стрижке?
          </h2>
          <p className="max-w-md font-body text-sm text-noir-bone/55">
            Свободные окна разбирают быстро — оставьте заявку, и мы подберём удобное время.
          </p>
          <button type="button" onClick={onBook} className="btn-primary !px-12 !py-5">
            Записаться
          </button>
        </Reveal>
      </div>
    </section>
  )
}
