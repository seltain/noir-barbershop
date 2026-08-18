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
  /** Object-position tuned to this specific portrait's headroom */
  focus: string
}

export const masters: Master[] = [
  {
    name: 'Данила Орлов',
    role: 'Ведущий мастер, арт-директор NOIR',
    experience: '12 лет за креслом',
    specialization: 'Авторские стрижки, построение формы',
    image: '/images/master-1.jpg',
    alt: 'Портрет Данилы Орлова, ведущего мастера и арт-директора NOIR, в чёрном кожаном фартуке с инструментом',
    focus: 'object-[50%_6%]',
  },
  {
    name: 'Тимур Агеев',
    role: 'Мастер бороды и бритья',
    experience: '9 лет за креслом',
    specialization: 'Королевское бритьё, моделирование бороды',
    image: '/images/master-2.jpg',
    alt: 'Портрет Тимура Агеева, мастера бороды и бритья NOIR, в чёрном кожаном фартуке с инструментом',
    focus: 'object-[50%_18%]',
  },
  {
    name: 'Роман Белых',
    role: 'Барбер',
    experience: '6 лет за креслом',
    specialization: 'Fade, классические стрижки',
    image: '/images/master-3.jpg',
    alt: 'Портрет Романа Белых, барбера NOIR, в чёрном кожаном фартуке с инструментом',
    focus: 'object-[50%_8%]',
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
    alt: 'Чёрно-белый крупный план: мастер укладывает и расчёсывает волосы клиента руками',
    caption: 'Работа с формой',
    span: 'md:col-span-7 md:row-span-2',
  },
  {
    image: '/images/gallery-4.jpg',
    alt: 'Мастер в чёрных перчатках держит два парикмахерских ножниц крест-накрест',
    caption: 'Инструмент мастера',
    span: 'md:col-span-5 md:row-span-3',
    focus: 'object-[52%_55%]',
  },
  {
    image: '/images/gallery-2.jpg',
    alt: 'Барбер бреет клиента опасной бритвой в кресле в тёплом свете',
    caption: 'Момент бритья',
    span: 'md:col-span-5 md:row-span-2',
    focus: 'object-[50%_76%]',
  },
  {
    image: '/images/gallery-6.jpg',
    alt: 'Профиль мужской стрижки fade с чётким переходом у окна с каплями дождя',
    caption: 'Чёткая линия',
    span: 'md:col-span-3 md:row-span-2',
  },
  {
    image: '/images/gallery-3.jpg',
    alt: 'Барбер в очках подравнивает бороду клиента у кирпичной стены',
    caption: 'За работой',
    span: 'md:col-span-4 md:row-span-2',
    focus: 'object-[50%_28%]',
  },
  {
    image: '/images/gallery-5.jpg',
    alt: 'Ряд барберских кресел вдоль зеркальной стены в тёмном интерьере NOIR',
    caption: 'Ряд кресел',
    span: 'md:col-span-4 md:row-span-3',
    focus: 'object-[55%_46%]',
  },
  {
    image: '/images/gallery-7.jpg',
    alt: 'Мастер стрижёт клиента в тёмном зале барбершопа NOIR с латунными деталями',
    caption: 'В процессе',
    span: 'md:col-span-8 md:row-span-2',
    focus: 'object-[48%_24%]',
  },
]

// Hourly appointment start times within working hours (10:00–21:00)
export const timeSlots = [
  '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
  '16:00', '17:00', '18:00', '19:00', '20:00',
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
