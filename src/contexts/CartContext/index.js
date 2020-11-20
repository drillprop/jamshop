import React, { createContext, useState, useContext } from "react"

const CartContext = createContext(null)

export default function CartContextProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setItemsInCart] = useState([])

  const cartItemsAmount = cartItems.length

  const toggleCart = () => {
    if (!cartItemsAmount && !isCartOpen) return
    setIsCartOpen((prevState) => !prevState)
  }

  const addItemToCart = (cartItem) => {
    setItemsInCart((prevState) => [...prevState, cartItem])
  }

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        toggleCart,
        cartItems,
        cartItemsAmount,
        addItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  return useContext(CartContext)
}
