import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  return (
    <div className={`app ${isDarkMode ? 'app--dark' : 'app--light'}`}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Browse products, filter by category, and add items to your cart.
      </p>

      <DarkModeToggle
        isDarkMode={isDarkMode}
        onToggle={() => setIsDarkMode((darkMode) => !darkMode)}
      />

      <div className="category-filter">
        <label htmlFor="category-filter">Filter by Category: </label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      <ProductList
        selectedCategory={selectedCategory}
        onAddToCart={(product) =>
          setCartItems((items) => [...items, product])
        }
      />

      <Cart items={cartItems} />
    </div>
  )
}

export default App
