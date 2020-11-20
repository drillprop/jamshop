import React from "react"
import styles from "./Shop.module.scss"
import ShopCarousel from "./ShopCarousel"
import ShopHeader from "./ShopHeader"

export default function Shop() {
  return (
    <section className={styles.shopSection}>
      <ShopHeader />
      <ShopCarousel />
    </section>
  )
}
