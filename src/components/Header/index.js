import { Link } from "gatsby"
import React from "react"
import Carticon from "../../assets/icons/cart.svg"
import ArrowSmall from "../../assets/icons/arrow-small.svg"
import { useCartContext } from "../../contexts/CartContext"
import CartDropdown from "./CartDropdown"
import styles from "./Header.module.scss"
import clsx from "clsx"

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
            <div className={styles.cartIconWrapper}>
              <span className={styles.cartQuantity}>{cartItemsAmount}</span>
              <img className={styles.cartIcon} src={Carticon} alt="cart icon" />
            </div>
            <img
              className={clsx(
                styles.cartArrow,
                cartItemsAmount && styles.visible,
                isCartOpen && styles.open,
              )}
              src={ArrowSmall}
              alt="cart icon"
            />
          </button>
        </div>
      </header>
      {isCartOpen && <CartDropdown />}
    </>
  )
}
