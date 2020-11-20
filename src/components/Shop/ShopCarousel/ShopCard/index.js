import React from "react"
import AddIcon from "assets/icons/add.svg"
import styles from "./ShopCard.module.scss"
import { useCartContext } from "contexts/CartContext"
import { Link } from "gatsby"

export default function ShopCard({ product }) {
  const { addItemToCart } = useCartContext()
  const handleAddToCart = (e) => {
    e.preventDefault()
    addItemToCart(product)
  }
  return (
    <Link to={`/products/${product.slug}`}>
      <article className={styles.cardWrapper}>
        <img
          className={styles.cardImg}
          src={product.image.publicURL}
          alt={product.name}
        />
        <section>
          <h4 className={styles.cardTitle}>{product.name}</h4>
          <p className={styles.cardExcerpt}>{product.excerpt}</p>
        </section>
        <button
          className={styles.cardButton}
          title="add product"
          onClick={handleAddToCart}
        >
          <img src={AddIcon} alt="cart icon" />
        </button>
      </article>
    </Link>
  )
}
