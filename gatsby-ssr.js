import React from "react"
import CartContextProvider from "./src/contexts/CartContext"
import Layout from "./src/layouts"
import "what-input"

export const wrapPageElement = ({ element }) => {
  return (
    <CartContextProvider>
      <Layout>{element}</Layout>
    </CartContextProvider>
  )
}
