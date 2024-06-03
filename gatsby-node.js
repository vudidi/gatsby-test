const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(
    `query Articles {
      allMarkdownRemark {
        nodes {
          frontmatter {
            url
          }
        }
      }
    }`
  )

  data.allMarkdownRemark.nodes.forEach((node) => {
    const { url } = node.frontmatter

    console.log('url', url);

    actions.createPage({
      path: url,
      component: path.resolve("./src/templates/article-template.js"),
      context: { url },
    })
  })
}
