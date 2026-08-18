import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Services from './components/Services'
import Masters from './components/Masters'
import Gallery from './components/Gallery'
import Atmosphere from './components/Atmosphere'
import BookingCTA from './components/BookingCTA'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'

export default function App() {
  const [isBookingOpen, setBookingOpen] = useState(false)
  const openBooking = () => setBookingOpen(true)

  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[200] -translate-y-24 bg-noir-brass px-5 py-3 font-mono text-xs uppercase text-noir-black transition-transform focus:translate-y-0"
      >
        Перейти к содержимому
      </a>

      <Header onBook={openBooking} />

      <main id="main-content">
        <Hero onBook={openBooking} />
        <Philosophy />
        <Services />
        <Masters />
        <Gallery />
        <Atmosphere />
        <BookingCTA onBook={openBooking} />
      </main>

      <Footer onBook={openBooking} />

      <BookingModal isOpen={isBookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  )
}
