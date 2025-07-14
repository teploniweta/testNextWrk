import { OfferData } from '@/types';


export const mockOffers: OfferData[] = [
  {
    id: '1',
    description: '🤑🔥🕘Аренда Вип Сервера | 24 часа🕒🔥🤑, VIP-сервер',
    seller: {
      id: '1',
      avatar: '/images/ava_1.png',
      nickname: '0xHearts.com',
      rating: 4.8,
      timeOnSite: '3 года ',
      reviewsCount: 4288,
      isOnline: true
    },
    availability: 322,
    price: 0.64,
    deliveryMethod: 'instant'
  },
  {
    id: '2',
    description: '❤ФРУКТ СПИРИТ, СПИРИТ, БЛОКС ФРУКТ, SPIRIT💛💢, Предметы, Трейд',
    seller: {
      id: '2',
      avatar: '/images/ava_2.png',
      nickname: 'IgorDun4enkoff',
      rating: 4.9,
      timeOnSite: '1 год ',
      reviewsCount: 45,
      isOnline: false
    },
    availability: Infinity,
    price: 0.63,
    deliveryMethod: 'manual'
  },
  {
    id: '3',
    description: '🤲Куплю и пройду рейд БУДДЫ - БУДДА РЕЙД - БУДА - место будды - Рейды буды - BUDDHA RAID - 🤲, Услуги',
    seller: {
      id: '3',
      avatar: '/images/ava_3.png',
      nickname: 'Dendi',
      rating: 4.6,
      timeOnSite: '2 дня ',
      reviewsCount: 4,
      isOnline: true
    },
    availability: 4556,
    price: 0.60,
    deliveryMethod: 'automated'
  },
  {
    id: '4',
    description: '💀 / Рейд Теста - Куплю и пройду рейд Теста - РЕЙДЫ ТЕСТА - МЕСТО ТЕСТА - ДОУЧ - 💀, Услуги',
    seller: {
      id: '4',
      avatar: '/images/ava_4.png',
      nickname: 'gewbie',
      rating: 1.0,
      timeOnSite: '5 лет ',
      reviewsCount: 200,
      isOnline: true
    },
    availability: 15666,
    price: 0.55,
    deliveryMethod: 'instant'
  },
  {
    id: '5',
    description: '😈Фрукт Будда 💛 💛Buddha Fruit💛, Предметы, Трейд',
    seller: {
      id: '5',
      avatar: '/images/ava_5.png',
      nickname: 'gewbie',
      rating: 3.6,
      timeOnSite: '5 лет ',
      reviewsCount: 200,
      isOnline: false
    },
    availability: 104242,
    price: 0.55,
    deliveryMethod: 'manual'
  },
  {
    id: '6',
    description: '💖spirit fruit | Спирит | фрукт Спирит💖, Предметы, Трейд',
    seller: {
      id: '6',
      avatar: '/images/ava_1.png',
      nickname: '0xHearts.com',
      rating: 4.3,
      timeOnSite: '3 года ',
      reviewsCount: 4288,
      isOnline: true
    },
    availability: 322,
    price: 0.64,
    deliveryMethod: 'instant'
  },
  {
    id: '7',
    description: '🟦Rumble Fruit🟦фрукт Грохот, Предметы, Трейд',
    seller: {
      id: '7',
      avatar: '/images/ava_2.png',
      nickname: 'IgorDun4enkoff',
      rating: 2.1,
      timeOnSite: '1 год ',
      reviewsCount: 45,
      isOnline: false
    },
    availability: Infinity,
    price: 0.63,
    deliveryMethod: 'automated'
  },
  {
    id: '8',
    description: '🐘 Фрукт Мамонта 🐘 Мамонт/Mammoth 🐘, Предметы, Трейд',
    seller: {
      id: '8',
      avatar: '/images/ava_3.png',
      nickname: 'Dendi',
      rating: 4.8,
      timeOnSite: '2 дня ',
      reviewsCount: 4,
      isOnline: true
    },
    availability: 1502410,
    price: 0.60,
    deliveryMethod: 'instant'
  },
  {
    id: '9',
    description: '🔑 🔪  Заспавню и убью катакури в1 / Получение бледного шарфа / бледный шарф  🔪 🔑, Услуги',
    seller: {
      id: '9',
      avatar: '/images/ava_4.png',
      nickname: 'gewbie',
      rating: 5.0,
      timeOnSite: '5 лет ',
      reviewsCount: 200,
      isOnline: true
    },
    availability: 15666,
    price: 0.55,
    deliveryMethod: 'manual'
  },
  {
    id: '10',
    description: '🍯🍯ФРУКТ DOUGH, ДРОУ, БЛОКС ФРУКТ, DOUGH🌟💛, Предметы, Трейд',
    seller: {
      id: '10',
      avatar: '/images/ava_5.png',
      nickname: 'gewbie',
      rating: 1.8,
      timeOnSite: '5 лет ',
      reviewsCount: 200,
      isOnline: false
    },
    availability: 25663,
    price: 0.62,
    deliveryMethod: 'instant'
  }
];

export const gameFilters = [
  { name: 'Все', count: 1532 },
  { name: 'Белки', count: 43 },
  { name: 'Аккаунты', count: 87 },
  { name: 'Предметы', count: 234 },
  { name: 'VIP-сервер', count: 12 },
  { name: 'Услуги', count: 98 },
  { name: 'Гайды', count: 5 },
  { name: 'CS:GO', count: 156 },
  { name: 'Dota 2', count: 78 },
  { name: 'Valorant', count: 234 },
  { name: 'Apex Legends', count: 45 },
  { name: 'Fortnite', count: 167 },
  { name: 'League of Legends', count: 89 },
  { name: 'Overwatch 2', count: 123 },
  { name: 'PUBG', count: 67 },
  { name: 'Minecraft', count: 345 },
  { name: 'GTA V', count: 78 },
  { name: 'Red Dead Redemption 2', count: 34 },
  { name: 'Cyberpunk 2077', count: 23 },
  { name: 'Call of Duty', count: 98 },
  { name: 'FIFA 24', count: 56 },
  { name: 'Rocket League', count: 87 },
  { name: 'Among Us', count: 12 },
  { name: 'Fall Guys', count: 23 },
  { name: 'World of Warcraft', count: 145 },
  { name: 'Destiny 2', count: 67 },
  { name: 'Rainbow Six Siege', count: 89 },
  { name: 'Rust', count: 78 },
  { name: 'The Witcher 3', count: 34 },
  { name: 'Elden Ring', count: 56 },
  { name: "Baldur's Gate 3", count: 23 },
  { name: 'Hollow Knight', count: 12 },
  { name: 'Stardew Valley', count: 34 },
  { name: 'Terraria', count: 67 },
  { name: 'Hades', count: 23 },
  { name: 'Celeste', count: 12 }
];

export const categoryFilters = [
  { name: 'Все' },
  { name: 'Белки' },
  { name: 'Аккаунты' },
  { name: 'Предметы' },
  { name: 'VIP-сервер' },
  { name: 'Услуги' },
  { name: 'Гайды' }
];

export const deliveryOptions = [
  { value: '', label: 'Способ доставки' },
  { value: 'instant', label: 'Моментальная доставка' },
  { value: 'manual', label: 'Ручная доставка' },
  { value: 'automated', label: 'Автоматическая доставка' }
];

export const sortOptions = [
  { value: 'newest', label: 'Сначала новые' },
  { value: 'price_asc', label: 'Цена: по возрастанию' },
  { value: 'price_desc', label: 'Цена: по убыванию' },
  { value: 'rating', label: 'По рейтингу продавца' }
]; 