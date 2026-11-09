import { Link, useNavigate, useParams } from 'react-router-dom'
import { products, formatPrice } from '../data/products'
import { useApp } from '../context/AppContext'

export default function ProductDetails() {
  const { id } = useParams()
  const product = products.find((item) => item.id === Number(id))
  const { addToCart } = useApp()
  const navigate = useNavigate()

  if (!product) return <section className="page-section empty-state"><span>🧭</span><h2>Товар не найден</h2><Link to="/" className="primary-button">Вернуться в каталог</Link></section>

  return (
    <section className="page-section">
      <Link to="/" className="back-link">← Назад в каталог</Link>
      <div className="details-layout">
        <div className="details-art">{product.icon}</div>
        <div className="details-info"><p className="eyebrow">{product.category}</p><h1>{product.name}</h1><p className="details-description">{product.description}</p><div className="details-price">{formatPrice(product.price)}</div><button className="primary-button" onClick={() => { addToCart(product); navigate('/cart') }}>Добавить в корзину</button><p className="muted details-hint">После добавления откроется страница корзины.</p></div>
      </div>
    </section>
  )
}
