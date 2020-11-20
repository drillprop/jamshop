import { motion } from "framer-motion"
import { graphql } from "gatsby"
import React from "react"
import CTAButton from "../../components/CTAButton"
import SEO from "../../components/SEO"
import { useCartContext } from "../../contexts/CartContext"
import styles from "./product-page.module.scss"

const articleVariants = {
  initial: {
    y: 80,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.1,
      ease: [0.5, 0.05, -0.01, 0.9],
    },
  },
}
const childrenVariants = {
  initial: { x: 30, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
}

export default function ProductPage({ data }) {
  const { product } = data.markdownRemark
  const { addItemToCart } = useCartContext()
  return (
    <>
      <SEO title={product.name} />
      <section className={styles.productSection}>
        <motion.img
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -40, opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          className={styles.productImg}
          src={product.image.publicURL}
          alt={product.name}
        />
        <motion.article
          variants={articleVariants}
          initial="initial"
          animate="animate"
          className={styles.productInfo}
        >
          <motion.p variants={childrenVariants} className={styles.productTag}>
            {product.tag}
          </motion.p>
          <motion.h2 variants={childrenVariants} className={styles.productName}>
            {product.name}
          </motion.h2>
          <motion.p
            variants={childrenVariants}
            className={styles.productDescription}
          >
            {product.description}
          </motion.p>
          <motion.p variants={childrenVariants} className={styles.productPrice}>
            ${product.price}
          </motion.p>
          <CTAButton onClick={() => addItemToCart(product)}>
            ADD TO CART
          </CTAButton>
        </motion.article>
      </section>
    </>
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
