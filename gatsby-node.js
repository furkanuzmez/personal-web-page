const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const projectPost = path.resolve(`./src/templates/blog-post/index.js`)
  return graphql(
    `
      {
        projectPosts: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: {fileAbsolutePath: {regex: "/(project)/"}}
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        snippetPosts: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: {fileAbsolutePath: {regex: "/(snippet)/"}}
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    console.log(result);
    // Create project posts pages.
    const projectPosts = result.data.projectPosts.edges
    // Create snippet posts pages.
    const snippetPosts = result.data.snippetPosts.edges

    projectPosts.forEach((post, index) => {
      const previous = index === projectPosts.length - 1 ? null : projectPosts[index + 1].node
      const next = index === 0 ? null : projectPosts[index - 1].node

      createPage({
        path: '/project'+post.node.fields.slug,
        component: projectPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    snippetPosts.forEach((post, index) => {
      const previous = index === snippetPosts.length - 1 ? null : snippetPosts[index + 1].node
      const next = index === 0 ? null : snippetPosts[index - 1].node

      createPage({
        path: '/snippet'+post.node.fields.slug,
        component: projectPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })
  })
}


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
