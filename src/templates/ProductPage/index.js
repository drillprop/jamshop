import React from "react"
import { graphql } from "gatsby"
import CTAButton from "../../components/CTAButton"
import styles from "./product-page.module.scss"

export default function ProductPage({ data }) {
  const { product } = data.markdownRemark
  const { publicURL } = data.file

  return (
    <section className={styles.productSection}>
      <img className={styles.productImg} src={publicURL} alt={product.name} />
      <article className={styles.productInfo}>
        <p className={styles.productTag}>{product.tag}</p>
        <h2 className={styles.productName}>{product.name}</h2>
        <p className={styles.productDescription}>{product.description}</p>
        <p className={styles.productPrice}>${product.price}</p>
        <CTAButton>ADD TO CART</CTAButton>
      </article>
    </section>
  )
}

export const query = graphql`
  query($slug: String!, $base: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      product: frontmatter {
        name
        slug
        price
        image
        excerpt
        description
        tag
      }
    }
    file(base: { eq: $base }) {
      publicURL
    }
  }
`
