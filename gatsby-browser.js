import React from "react"
import CartContextProvider from "./src/contexts/CartContext"
import Layout from "./src/layouts"

export const wrapPageElement = ({ element }) => {
  return (
    <CartContextProvider>
      <Layout>{element}</Layout>
    </CartContextProvider>
  )
}
