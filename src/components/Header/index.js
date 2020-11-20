import { Link } from "gatsby"
import React from "react"
import Carticon from "../../assets/icons/cart.svg"
import { useCartContext } from "../../contexts/CartContext"
import CartDropdown from "./CartDropdown"
import styles from "./Header.module.scss"

export default function Header() {
  const { isCartOpen, toggleCart, cartItemsAmount } = useCartContext()
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.logo}>
          <Link to="/">JAM SHOP</Link>
        </h1>
        <div>
          <button
            className={styles.cartButton}
            title="open cart"
            onClick={toggleCart}
          >
            <img className={styles.cartIcon} src={Carticon} alt="cart icon" />
            <span className={styles.cartQuantity}>{cartItemsAmount}</span>
          </button>
        </div>
      </header>
      {isCartOpen && <CartDropdown />}
    </>
  )
}
