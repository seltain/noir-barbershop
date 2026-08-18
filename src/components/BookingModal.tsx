import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { services } from '../data/content'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'
import { IconCheck, IconClose } from './icons'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('')
  const [date, setDate] = useState('')
  const firstFieldRef = useRef<HTMLInputElement | null>(null)

  useLockBodyScroll(isOpen)

  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => firstFieldRef.current?.focus(), 50)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setSubmitted(false)
      setName('')
      setPhone('')
      setService('')
      setDate('')
    }, 300)
    return () => clearTimeout(t)
  }, [isOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <button
        type="button"
        aria-label="Закрыть форму записи"
        onClick={onClose}
        className="absolute inset-0 bg-noir-black/85 backdrop-blur-sm"
      />

      <div className="relative w-full max-w-lg border border-noir-bone/10 bg-noir-graphite p-8 md:p-12">
        <button
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
          className="absolute right-6 top-6 text-noir-bone/60 transition-colors hover:text-noir-brass"
        >
          <IconClose className="h-6 w-6" />
        </button>

        {!submitted ? (
          <>
            <span className="eyebrow">Запись</span>
            <h3 id="booking-title" className="mt-4 font-display text-3xl text-noir-bone md:text-4xl">
              Забронировать время
            </h3>

            <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-7">
              <Field label="Имя">
                <input
                  ref={firstFieldRef}
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Как к вам обращаться"
                  className="field-input"
                />
              </Field>

              <Field label="Телефон">
                <input
                  required
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  className="field-input"
                />
              </Field>

              <Field label="Услуга">
                <select
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="field-input bg-noir-graphite"
                >
                  <option value="" disabled>
                    Выберите услугу
                  </option>
                  {services.map((s) => (
                    <option key={s.name} value={s.name}>
                      {s.name} — {s.price}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Дата">
                <input
                  required
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="field-input"
                />
              </Field>

              <button type="submit" className="btn-primary mt-4 w-full">
                Отправить заявку
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center gap-6 py-10 text-center">
            <IconCheck className="h-14 w-14 text-noir-brass" />
            <h3 className="font-display text-3xl text-noir-bone">Заявка отправлена</h3>
            <p className="max-w-xs text-sm text-noir-bone/60">
              Мы свяжемся с вами в течение часа, чтобы подтвердить время визита.
            </p>
            <button type="button" onClick={onClose} className="btn-primary mt-2">
              Готово
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-3">
      <span className="font-mono text-[0.65rem] uppercase tracking-widest2 text-noir-bone/50">{label}</span>
      {children}
    </label>
  )
}
