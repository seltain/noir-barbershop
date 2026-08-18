export const navLinks = [
  { label: 'Философия', href: '#philosophy' },
  { label: 'Услуги', href: '#services' },
  { label: 'Мастера', href: '#masters' },
  { label: 'Галерея', href: '#gallery' },
  { label: 'Контакты', href: '#contacts' },
]

export interface Service {
  index: string
  name: string
  duration: string
  price: string
  description: string
}

export const services: Service[] = [
  {
    index: '01',
    name: 'Классическая стрижка',
    duration: '60 мин',
    price: '2 500 ₽',
    description: 'Форма, подобранная под структуру волос и черты лица.',
  },
  {
    index: '02',
    name: 'Fade',
    duration: '60 мин',
    price: '2 800 ₽',
    description: 'Плавный переход без границ — техника, требующая ювелирной точности.',
  },
  {
    index: '03',
    name: 'Моделирование бороды',
    duration: '40 мин',
    price: '1 800 ₽',
    description: 'Чёткий контур и линия, которая держит форму неделями.',
  },
  {
    index: '04',
    name: 'Стрижка + борода',
    duration: '90 мин',
    price: '3 900 ₽',
    description: 'Полный образ за один визит — без компромиссов по времени.',
  },
  {
    index: '05',
    name: 'Королевское бритьё',
    duration: '50 мин',
    price: '2 900 ₽',
    description: 'Опасная бритва, горячее полотенце — ритуал в лучшем смысле слова.',
  },
]

export interface Master {
  name: string
  role: string
  experience: string
  specialization: string
  image: string
  alt: string
}

export const masters: Master[] = [
  {
    name: 'Данила Орлов',
    role: 'Ведущий мастер, арт-директор NOIR',
    experience: '12 лет за креслом',
    specialization: 'Авторские стрижки, построение формы',
    image: '/images/master-1.jpg',
    alt: 'Данила Орлов, ведущий мастер и арт-директор барбершопа NOIR, держит ножницы',
  },
  {
    name: 'Тимур Агеев',
    role: 'Мастер бороды и бритья',
    experience: '9 лет за креслом',
    specialization: 'Королевское бритьё, моделирование бороды',
    image: '/images/master-2.jpg',
    alt: 'Тимур Агеев, мастер бороды и бритья барбершопа NOIR',
  },
  {
    name: 'Роман Белых',
    role: 'Барбер',
    experience: '6 лет за креслом',
    specialization: 'Fade, классические стрижки',
    image: '/images/master-3.jpg',
    alt: 'Роман Белых, барбер NOIR, в интерьере барбершопа',
  },
]

export interface GalleryItem {
  image: string
  alt: string
  caption: string
  /** Grid sizing class applied at md+ breakpoints for the asymmetric mosaic */
  span: string
  /** Extra classes for object-position / cropping (e.g. to hide a watermark) */
  focus?: string
}

export const galleryItems: GalleryItem[] = [
  {
    image: '/images/gallery-1.jpg',
    alt: 'Барбер работает над стрижкой клиента у зеркала',
    caption: 'Работа с формой',
    span: 'md:col-span-7 md:row-span-2',
  },
  {
    image: '/images/gallery-4.jpg',
    alt: 'Крупный план: моделирование бороды триммером',
    caption: 'Линия бороды',
    span: 'md:col-span-5 md:row-span-3',
    focus: 'object-top',
  },
  {
    image: '/images/gallery-2.jpg',
    alt: 'Барбер укладывает волосы феном в интерьере с тёплым светом',
    caption: 'Инструмент мастера',
    span: 'md:col-span-5 md:row-span-2',
  },
  {
    image: '/images/gallery-6.jpg',
    alt: 'Стрижка филировочными ножницами со стороны затылка',
    caption: 'Финальный штрих',
    span: 'md:col-span-3 md:row-span-2',
  },
  {
    image: '/images/gallery-3.jpg',
    alt: 'Клиент улыбается, читая газету во время стрижки',
    caption: 'Момент паузы',
    span: 'md:col-span-4 md:row-span-2',
  },
  {
    image: '/images/gallery-5.jpg',
    alt: 'Крупный план работы триммером у линии затылка',
    caption: 'Контур виска',
    span: 'md:col-span-4 md:row-span-3',
    focus: 'object-top',
  },
  {
    image: '/images/gallery-7.jpg',
    alt: 'Интерьер зоны кресел барбершопа NOIR',
    caption: 'Рабочее место',
    span: 'md:col-span-8 md:row-span-2',
    focus: 'object-bottom',
  },
]

export const contact = {
  address: 'Новосибирск, Красный проспект, 15',
  phone: '+7 (383) 210-45-67',
  phoneHref: '+73832104567',
  telegram: '@noir_nsk',
  telegramHref: 'https://t.me/noir_nsk',
  hours: [
    { days: 'Пн — Сб', time: '10:00 — 21:00' },
    { days: 'Вс', time: 'по предварительной записи' },
  ],
}
