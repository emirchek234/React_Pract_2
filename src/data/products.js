export const products = [
  { id: 1, name: 'Наушники Pulse Pro', category: 'Аудио', price: 5490, icon: '🎧', description: 'Беспроводные наушники с чистым звуком и активным шумоподавлением.' },
  { id: 2, name: 'Механическая клавиатура K87', category: 'Периферия', price: 7290, icon: '⌨️', description: 'Компактная механическая клавиатура с приятным ходом клавиш.' },
  { id: 3, name: 'Мышь Vector X', category: 'Периферия', price: 3290, icon: '🖱️', description: 'Лёгкая игровая мышь с точным сенсором и удобной формой.' },
  { id: 4, name: 'Монитор Vision 27', category: 'Мониторы', price: 24990, icon: '🖥️', description: '27-дюймовый монитор с высокой частотой обновления.' },
  { id: 5, name: 'Колонка Sound Mini', category: 'Аудио', price: 4190, icon: '🔊', description: 'Компактная колонка для музыки дома и в поездках.' },
  { id: 6, name: 'Геймпад Nova', category: 'Аксессуары', price: 3890, icon: '🎮', description: 'Удобный контроллер для игр на компьютере.' },
  { id: 7, name: 'Веб-камера Focus HD', category: 'Аксессуары', price: 2790, icon: '📷', description: 'Камера с чётким изображением для звонков и стримов.' },
  { id: 8, name: 'Микрофон Studio', category: 'Аудио', price: 8990, icon: '🎙️', description: 'Настольный микрофон для записи голоса и общения.' },
]

export const formatPrice = (price) =>
  new Intl.NumberFormat('ru-RU').format(price) + ' ₽'
