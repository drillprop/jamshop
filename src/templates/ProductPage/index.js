import React from "react"
import { graphql } from "gatsby"

export default function ProductPage({ data }) {
  return <div>Hello product page</div>
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        name
        slug
        price
        excerpt
        image
        description
        tag
      }
    }
  }
`
