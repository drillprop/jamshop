import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import ShopCard from "./ShopCard"

export default function ShopCarousel() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/^((?!index).)*$/" } }
      ) {
        nodes {
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
    }
  `)
  const products = data.allMarkdownRemark.nodes

  return products.map(({ product }) => (
    <Link key={product.slug} to={`/products/${product.slug}`}>
      <ShopCard product={product} />
    </Link>
  ))
}
