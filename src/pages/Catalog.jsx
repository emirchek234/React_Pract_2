import { useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Catalog() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Все')
  const categories = ['Все', ...new Set(products.map((item) => item.category))]
  const filtered = useMemo(() => products.filter((product) =>
    (category === 'Все' || product.category === category) &&
    product.name.toLowerCase().includes(search.toLowerCase()),
  ), [category, search])

  return (
    <section>
      <div className="hero">
        <div>
          <p className="eyebrow light-eyebrow">ТЕХНИКА ДЛЯ ТВОИХ ИДЕЙ</p>
          <h1>Всё нужное.<br /><span>В одном месте.</span></h1>
          <p className="hero-description">Подбери технику и аксессуары для работы, творчества и отдыха.</p>
          <a href="#catalog" className="hero-button">Смотреть каталог <span>↓</span></a>
        </div>
        <div className="hero-visual"><div className="hero-circle">✦</div><div className="hero-device">🎧</div><div className="floating-tag">NEW COLLECTION</div></div>
      </div>

      <div className="section-heading" id="catalog">
        <div><p className="eyebrow">ВЫБИРАЙ СВОЁ</p><h2>Каталог товаров</h2><p className="muted">Подобрали полезные устройства на каждый день.</p></div>
        <div className="catalog-tools">
          <input className="search-input" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Поиск товара..." />
        </div>
      </div>
      <div className="category-row">
        {categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`filter-chip ${category === item ? 'selected' : ''}`}>{item}</button>)}
      </div>
      {filtered.length ? <div className="product-grid">{filtered.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="empty-state"><span>🔎</span><h3>Ничего не найдено</h3><p>Попробуй изменить поисковый запрос.</p></div>}
    </section>
  )
}
