import { contact, navLinks } from '../data/content'
import { IconClock, IconPhone, IconPin, IconTelegram } from './icons'

interface FooterProps {
  onBook: () => void
}

export default function Footer({ onBook }: FooterProps) {
  return (
    <footer id="contacts" className="relative border-t border-noir-bone/10 bg-noir-black pt-20">
      <div className="container-editorial">
        <div className="grid grid-cols-1 gap-14 pb-16 md:grid-cols-12 md:gap-6 md:pb-24">
          <div className="flex flex-col justify-between gap-10 md:col-span-5">
            <div>
              <span className="font-display text-4xl tracking-[0.1em] text-noir-bone md:text-5xl">NOIR</span>
              <p className="mt-5 max-w-xs text-sm text-noir-bone/50">
                Приватный барбершоп в центре Новосибирска. Работаем по записи.
              </p>
            </div>
            <button type="button" onClick={onBook} className="btn-primary w-fit">
              Записаться
            </button>
          </div>

          <div className="flex flex-col gap-4 md:col-span-3 md:col-start-7">
            <span className="eyebrow mb-2">Контакты</span>
            <a href={`tel:${contact.phoneHref}`} className="flex items-center gap-3 text-noir-bone/75 transition-colors hover:text-noir-brass">
              <IconPhone className="h-4 w-4 shrink-0 text-noir-brass" />
              {contact.phone}
            </a>
            <a href={contact.telegramHref} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-noir-bone/75 transition-colors hover:text-noir-brass">
              <IconTelegram className="h-4 w-4 shrink-0 text-noir-brass" />
              {contact.telegram}
            </a>
            <span className="flex items-start gap-3 text-noir-bone/75">
              <IconPin className="h-4 w-4 shrink-0 text-noir-brass" />
              {contact.address}
            </span>
          </div>

          <div className="flex flex-col gap-4 md:col-span-3 md:col-start-10">
            <span className="eyebrow mb-2">Часы работы</span>
            {contact.hours.map((h) => (
              <span key={h.days} className="flex items-start gap-3 text-noir-bone/75">
                <IconClock className="mt-0.5 h-4 w-4 shrink-0 text-noir-brass" />
                <span>
                  {h.days} <span className="text-noir-bone/40">·</span> {h.time}
                </span>
              </span>
            ))}
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3 border-t border-noir-bone/10 py-8 font-mono text-[0.68rem] uppercase tracking-widest2 text-noir-bone/50">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-noir-brass">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3 border-t border-noir-bone/10 py-8 font-mono text-[0.65rem] uppercase tracking-widest2 text-noir-bone/35 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} NOIR — приватный барбершоп</span>
          <span>Новосибирск · запись обязательна</span>
        </div>
      </div>
    </footer>
  )
}
