import clsx from "clsx"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import React from "react"
import ArrowSmall from "../../assets/icons/arrow-small.svg"
import Carticon from "../../assets/icons/cart.svg"
import { useCartContext } from "../../contexts/CartContext"
import CartDropdown from "./CartDropdown"
import styles from "./Header.module.scss"

export default function Header() {
  const { isCartOpen, toggleCart, cartItemsAmount } = useCartContext()
  return (
    <>
      <motion.header
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -40, opacity: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.5, 0.04, -0.01, 0.9],
        }}
        className={styles.header}
      >
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
      </motion.header>
      {isCartOpen && <CartDropdown />}
    </>
  )
}
