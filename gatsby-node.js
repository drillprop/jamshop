import path from "path"

export const createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const component = require.resolve("./src/templates/ProductPage/index.js")

  const result = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/^((?!index).)*$/" } }
      ) {
        edges {
          node {
            frontmatter {
              slug
              image
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.")
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/products/${node.frontmatter.slug}`,
      component,
      context: {
        base: path.parse(node.frontmatter.image).base,
        slug: node.frontmatter.slug,
      },
    })
  })
}

export const onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith("develop")) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "react-dom": "@hot-loader/react-dom",
        },
      },
    })
  }
}
