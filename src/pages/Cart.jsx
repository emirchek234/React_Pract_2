import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { formatPrice } from '../data/products'

export default function Cart() {
  const { cart, removeFromCart, changeQuantity, clearCart, cartTotal, cartCount } = useApp()

  return (
    <section className="page-section">
      <div className="page-heading"><div><p className="eyebrow">ВАШИ ПОКУПКИ</p><h1>Корзина</h1><p className="muted">Товаров в корзине: {cartCount}</p></div></div>
      {cart.length === 0 ? (
        <div className="empty-state cart-empty"><span>🛒</span><h2>Корзина пока пуста</h2><p>Добавь товары из каталога, и они появятся здесь.</p><Link to="/" className="primary-button">Перейти в каталог</Link></div>
      ) : (
        <div className="cart-layout">
          <div className="cart-list">
            {cart.map((item) => (
              <article className="cart-item" key={item.id}>
                <div className="cart-product-icon">{item.icon}</div>
                <div className="cart-item-info"><h3>{item.name}</h3><p className="muted">{formatPrice(item.price)} за шт.</p></div>
                <div className="quantity-control">
                  <button onClick={() => changeQuantity(item.id, -1)} aria-label="Уменьшить">−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => changeQuantity(item.id, 1)} aria-label="Увеличить">+</button>
                </div>
                <strong className="cart-line-total">{formatPrice(item.price * item.quantity)}</strong>
                <button className="remove-button" onClick={() => removeFromCart(item.id)}>Удалить</button>
              </article>
            ))}
            <button className="text-button clear-button" onClick={clearCart}>Очистить корзину</button>
          </div>
          <aside className="summary-card">
            <p className="eyebrow">ВАШ ЗАКАЗ</p><h2>Итого</h2>
            <div className="summary-row"><span>Товары ({cartCount})</span><span>{formatPrice(cartTotal)}</span></div>
            <div className="summary-row"><span>Доставка</span><span className="free-label">Бесплатно</span></div>
            <div className="summary-divider" />
            <div className="summary-total"><span>К оплате</span><strong>{formatPrice(cartTotal)}</strong></div>
            <button className="primary-button checkout-button" onClick={() => alert('Демонстрационный проект: оформление заказа не подключено.')}>Оформить заказ</button>
            <p className="summary-note">Это учебный магазин. Оплата не производится.</p>
          </aside>
        </div>
      )}
    </section>
  )
}
