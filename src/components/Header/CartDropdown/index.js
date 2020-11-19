import React from "react"
import { useCartContext } from "../../../contexts/CartContext"
import styles from "./cart-dropdown.module.scss"

export default function CartDropdown() {
  const { cartItems, toggleCart } = useCartContext()
  const handleCloseCart = (e) => {
    // little trick to handle outside click
    if (e.currentTarget === e.target) {
      toggleCart()
    }
  }
  return (
    <div className={styles.cartDropdownOverlay} onClick={handleCloseCart}>
      <div className={styles.cartDropdownBox}>
        <ul className={styles.cartDropdownList}>
          {cartItems.map((item, idx) => {
            console.log(item)
            return (
              <li className={styles.cartDropdownItem} key={item.slug + idx}>
                <img
                  className={styles.cartDropdownImg}
                  src={item.image.publicURL}
                  alt={item.name}
                />
                <p className={styles.cartDropdownName}>{item.name}</p>
                <p className={styles.cartDropdownPrice}>${item.price}</p>
              </li>
            )
          })}
        </ul>
        <button className={styles.cartDropdownButton}>submit</button>
      </div>
    </div>
  )
}
