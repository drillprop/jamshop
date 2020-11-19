import path from "path"

export const createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const component = require.resolve("./src/templates/ProductPage/index.js")

  const result = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/^((?!index).)*$/" } }
      ) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.")
  }
  console.log(result.data.allMarkdownRemark.nodes)
  result.data.allMarkdownRemark.nodes.forEach(({ frontmatter }) => {
    createPage({
      path: `/products/${frontmatter.slug}`,
      component,
      context: {
        slug: frontmatter.slug,
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
