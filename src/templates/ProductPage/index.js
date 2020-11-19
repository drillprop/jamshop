import { graphql } from "gatsby"
import React from "react"
import CTAButton from "../../components/CTAButton"
import { useCartContext } from "../../contexts/CartContext"
import styles from "./product-page.module.scss"

export default function ProductPage({ data }) {
  const { product } = data.markdownRemark
  const { addItemToCart } = useCartContext()
  return (
    <section className={styles.productSection}>
      <img
        className={styles.productImg}
        src={product.image.publicURL}
        alt={product.name}
      />
      <article className={styles.productInfo}>
        <p className={styles.productTag}>{product.tag}</p>
        <h2 className={styles.productName}>{product.name}</h2>
        <p className={styles.productDescription}>{product.description}</p>
        <p className={styles.productPrice}>${product.price}</p>
        <CTAButton onClick={() => addItemToCart(product)}>
          ADD TO CART
        </CTAButton>
      </article>
    </section>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      product: frontmatter {
        name
        slug
        price
        excerpt
        image {
          publicURL
        }
        description
        tag
      }
    }
  }
`
