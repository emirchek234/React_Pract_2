import { Link, Navigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { formatPrice } from '../data/products'

export default function Dashboard() {
  const { user, cartCount, cartTotal } = useApp()
  if (!user) return <Navigate to="/login" replace />

  return (
    <section className="page-section">
      <div className="dashboard-welcome"><p className="eyebrow light-eyebrow">ЛИЧНЫЙ КАБИНЕТ</p><h1>Привет, {user.name}!</h1><p>Добро пожаловать в Nova Store. Здесь собрана информация о твоей активности.</p></div>
      <div className="dashboard-grid">
        <div className="stat-card"><span className="stat-icon">🛒</span><p className="muted">Товаров в корзине</p><strong>{cartCount}</strong><Link to="/cart">Открыть корзину →</Link></div>
        <div className="stat-card"><span className="stat-icon">₽</span><p className="muted">Сумма корзины</p><strong>{formatPrice(cartTotal)}</strong><Link to="/cart">Посмотреть заказ →</Link></div>
        <div className="stat-card"><span className="stat-icon">✨</span><p className="muted">Статус аккаунта</p><strong className="status-text">Активен</strong><span className="muted small-muted">Демонстрационный профиль</span></div>
      </div>
      <div className="dashboard-bottom"><div><h2>Продолжим покупки?</h2><p className="muted">В каталоге уже есть товары, которые могут тебе понравиться.</p></div><Link to="/" className="primary-button">Перейти в каталог</Link></div>
    </section>
  )
}
