import { NavLink, Outlet, Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export default function Layout() {
  const { theme, toggleTheme, cartCount, user, logout } = useApp()

  const linkClass = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <Link to="/" className="brand"><span className="brand-mark">N</span> nova<span>store</span></Link>
          <nav className="nav-links">
            <NavLink to="/" end className={linkClass}>Каталог</NavLink>
            <NavLink to="/cart" className={linkClass}>Корзина <span className="cart-count">{cartCount}</span></NavLink>
            <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
          </nav>
          <div className="header-actions">
            <button className="icon-button theme-button" onClick={toggleTheme} aria-label="Сменить тему">
              {theme === 'light' ? '🌙' : '☀️'} <span>{theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}</span>
            </button>
            {user ? (
              <button className="login-button" onClick={logout}>Выйти</button>
            ) : (
              <Link className="login-button" to="/login">Войти</Link>
            )}
          </div>
        </div>
      </header>
      <main className="main-content"><Outlet /></main>
      <footer className="footer">
        <span>© 2026 Nova Store</span>
        <span>Практическая работа · React Router и Context API</span>
      </footer>
    </div>
  )
}
