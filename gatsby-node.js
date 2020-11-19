exports.createPages = async ({ actions, graphql, reporter }) => {
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
        slug: node.frontmatter.slug,
      },
    })
  })
}
