import React from "react"
import { Link, graphql } from "gatsby"


import PostLink from '../components/postlink/index'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    console.log(posts);

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>Hi! I am Mutluhan. I am computer engineering student in ITU.</h1>
        <h2>I hope there is something to read for you in my blog.</h2>

        <h3>Posts</h3>
        <hr></hr>
        {/* <Bio /> */}
        {posts.map(({ node }) => {
          return (
            <PostLink node = {node} linkTo = "/blog" />
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {fileAbsolutePath: {regex: "/(blog)/"}}
      ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
