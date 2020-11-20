import { motion } from "framer-motion"
import { Link } from "gatsby"
import React from "react"
import { useCartContext } from "contexts/CartContext"
import styles from "./CartDropdown.module.scss"

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
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          ease: [0.5, 0.04, -0.01, 0.9],
        }}
        exit={{ opacity: 0 }}
        className={styles.cartDropdownBox}
      >
        <ul className={styles.cartDropdownList}>
          {cartItems.map((item, idx) => (
            <li className={styles.cartDropdownItem} key={item.slug + idx}>
              <Link
                className={styles.cartDropdownLink}
                to={`/products/${item.slug}`}
                onClick={toggleCart}
              >
                <img
                  className={styles.cartDropdownImg}
                  src={item.image.publicURL}
                  alt={item.name}
                />
                <p className={styles.cartDropdownName}>{item.name}</p>
                <p className={styles.cartDropdownPrice}>${item.price}</p>
              </Link>
            </li>
          ))}
        </ul>
        <button className={styles.cartDropdownButton}>submit</button>
      </motion.div>
    </div>
  )
}
