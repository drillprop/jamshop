import React from "react"
import AddIcon from "../../../../assets/icons/add.svg"
import styles from "./shop-card.module.scss"

export default function ShopCard({ product }) {
  return (
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
      <button className={styles.cardButton} title="add product">
        <img src={AddIcon} alt="" />
      </button>
    </article>
  )
}
