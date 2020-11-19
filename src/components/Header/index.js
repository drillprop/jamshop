import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"
import Carticon from "../../assets/icons/cart.svg"

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link to="/">JAM SHOP</Link>
      </h1>
      <button className={styles.cartButton} title="open cart">
        <img className={styles.cartIcon} src={Carticon} alt="cart icon" />
        <span className={styles.cartQuantity}>0</span>
      </button>
    </header>
  )
}
