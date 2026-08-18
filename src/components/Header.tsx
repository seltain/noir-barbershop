import { useEffect, useState } from 'react'
import { navLinks, contact } from '../data/content'
import { IconClose, IconMenu } from './icons'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'

interface HeaderProps {
  onBook: () => void
}

export default function Header({ onBook }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useLockBodyScroll(menuOpen)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          menuOpen
            ? 'bg-noir-black border-b border-noir-bone/10'
            : scrolled
              ? 'bg-noir-black/90 backdrop-blur-sm border-b border-noir-bone/10'
              : 'bg-transparent'
        }`}
      >
        <div className="container-editorial flex h-20 items-center justify-between lg:h-24">
          <a
            href="#top"
            className="font-display text-xl tracking-[0.14em] text-noir-bone md:text-2xl"
            onClick={closeMenu}
          >
            NOIR
          </a>

          <nav className="hidden items-center gap-6 lg:flex xl:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative font-mono text-[0.68rem] uppercase tracking-widest2 text-noir-bone/80 transition-colors duration-300 hover:text-noir-bone"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-noir-brass transition-all duration-300 ease-editorial group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <button type="button" onClick={onBook} className="btn-primary hidden !px-6 !py-3 lg:inline-flex">
              Записаться
            </button>
            <button
              type="button"
              aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="relative z-[60] text-noir-bone lg:hidden"
            >
              {menuOpen ? <IconClose className="h-7 w-7" /> : <IconMenu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </header>

      {/*
        Rendered as a sibling of <header>, not nested inside it — a fixed-position child
        combined with the header's backdrop-blur produced a compositing bug where the hero
        photo bled through this panel. Keeping it separate avoids that stacking context entirely.
      */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 top-20 z-40 flex flex-col justify-between bg-noir-black px-6 pb-10 pt-6 transition-opacity duration-300 lg:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="border-b border-noir-bone/10 py-5 font-display text-3xl text-noir-bone"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-6">
          <button
            type="button"
            onClick={() => {
              onBook()
              closeMenu()
            }}
            className="btn-primary w-full"
          >
            Записаться
          </button>
          <div className="flex flex-col gap-1 font-mono text-xs uppercase tracking-widest2 text-noir-bone/60">
            <span>{contact.address}</span>
            <span>{contact.phone}</span>
          </div>
        </div>
      </div>
    </>
  )
}
