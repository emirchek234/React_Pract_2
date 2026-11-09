import { useState } from 'react'
import { Navigate, useNavigate, Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export default function Login() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { user, login } = useApp()
  const navigate = useNavigate()

  if (user) return <Navigate to="/dashboard" replace />

  function handleSubmit(event) {
    event.preventDefault()
    if (!name.trim() || !password.trim()) {
      setError('Заполни оба поля, чтобы продолжить.')
      return
    }
    login(name.trim())
    navigate('/dashboard')
  }

  return (
    <section className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <div className="auth-icon">✦</div><p className="eyebrow">РАДЫ ТЕБЯ ВИДЕТЬ</p><h1>Вход в аккаунт</h1><p className="muted">Введи любые данные для демонстрационного входа.</p>
        <label>Имя пользователя<input value={name} onChange={(e) => setName(e.target.value)} placeholder="Например, Алексей" /></label>
        <label>Пароль<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Введите пароль" /></label>
        {error && <p className="form-error">{error}</p>}
        <button className="primary-button auth-submit" type="submit">Войти</button>
        <p className="auth-footnote">Нет аккаунта? Регистрация в демо-версии не требуется.</p>
        <Link to="/" className="back-link centered">Вернуться в каталог</Link>
      </form>
    </section>
  )
}
