import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { formatPrice } from '../data/products'

export default function ProductCard({ product }) {
  const { addToCart } = useApp()
  const navigate = useNavigate()

  function handleAdd() {
    addToCart(product)
    // После добавления пользователь может перейти в корзину.
  }

  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-art" aria-label={`Подробнее: ${product.name}`}>
        <span>{product.icon}</span>
        <small>{product.category}</small>
      </Link>
      <div className="product-info">
        <p className="eyebrow">{product.category}</p>
        <Link to={`/product/${product.id}`} className="product-name">{product.name}</Link>
        <div className="product-bottom">
          <strong>{formatPrice(product.price)}</strong>
          <button className="primary-button small-button" onClick={handleAdd}>В корзину</button>
        </div>
        <button className="text-button" onClick={() => { addToCart(product); navigate('/cart') }}>
          Купить и перейти в корзину →
        </button>
      </div>
    </article>
  )
}
