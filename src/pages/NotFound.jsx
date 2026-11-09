import { Link } from 'react-router-dom'

export default function NotFound() {
  return <section className="empty-state not-found"><span>404</span><h1>Страница не найдена</h1><p>Возможно, адрес был введён неправильно.</p><Link to="/" className="primary-button">На главную</Link></section>
}
