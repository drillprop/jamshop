import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styles from "./shop-header.module.scss"

export default function ShopHeader() {
  const data = useStaticQuery(graphql`
    query {
      file(base: { eq: "index.md" }) {
        childMarkdownRemark {
          frontmatter {
            title
            lead
          }
        }
      }
    }
  `)

  const heading = data.file.childMarkdownRemark.frontmatter

  return (
    <header>
      <h3 className={styles.shopTitle}>{heading.title}</h3>
      <p className={styles.shopLead}>{heading.lead}</p>
    </header>
  )
}
