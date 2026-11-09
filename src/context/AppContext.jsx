import { createContext, useContext, useEffect, useReducer } from 'react'

const AppContext = createContext(null)

const initialState = {
  cart: [],
  theme: localStorage.getItem('nova-theme') || 'light',
  user: null,
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existing = state.cart.find((item) => item.id === action.product.id)
      if (existing) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        }
      }
      return { ...state, cart: [...state.cart, { ...action.product, quantity: 1 }] }
    }
    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter((item) => item.id !== action.id) }
    case 'CHANGE_QUANTITY':
      return {
        ...state,
        cart: state.cart
          .map((item) => item.id === action.id
            ? { ...item, quantity: Math.max(1, item.quantity + action.delta) }
            : item),
      }
    case 'CLEAR_CART':
      return { ...state, cart: [] }
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' }
    case 'LOGIN':
      return { ...state, user: { name: action.name || 'Пользователь' } }
    case 'LOGOUT':
      return { ...state, user: null }
    default:
      return state
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem('nova-theme', state.theme)
    document.documentElement.dataset.theme = state.theme
  }, [state.theme])

  const value = {
    ...state,
    addToCart: (product) => dispatch({ type: 'ADD_TO_CART', product }),
    removeFromCart: (id) => dispatch({ type: 'REMOVE_FROM_CART', id }),
    changeQuantity: (id, delta) => dispatch({ type: 'CHANGE_QUANTITY', id, delta }),
    clearCart: () => dispatch({ type: 'CLEAR_CART' }),
    toggleTheme: () => dispatch({ type: 'TOGGLE_THEME' }),
    login: (name) => dispatch({ type: 'LOGIN', name }),
    logout: () => dispatch({ type: 'LOGOUT' }),
    cartCount: state.cart.reduce((sum, item) => sum + item.quantity, 0),
    cartTotal: state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) throw new Error('useApp должен использоваться внутри AppProvider')
  return context
}
