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

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {/* <Bio /> */}
        <h2>What is stack page?</h2>
        <p>Actually stack page is just for me. I want to hold my every research
           or work documented and stack them up in this page. The posts in this
            page are not mean to be posted for sharing with everyone. I don't
             know why I am doing this right now but I am hoping that it will
              make me remember every work I've made. I want to publish
               my short-term and long-term goals in the future but I will start with
                a basic todo list for blog.
        </p>
        <h3>Todo List For Blog</h3>
        <hr></hr>
        <ul>
          <li>
            Entrance Page For Blog
          </li>
          <li>
            Design Modifications
          </li>
          <li>
            Add reading time to the posts
          </li>
          <li>
            Add comment section to the posts
          </li>
          <li>
            Add like/dislike counter to the posts
          </li>
          <li>
            Post categorization with tags
          </li>
          <li>
            Post search
          </li>
          <li>
            Responsive design
          </li>
        </ul>
        <h3>Stack</h3>
        <hr></hr>
        {posts.map(({ node }) => {
          return (
            <PostLink node={node} linkTo="/stack"/>
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
      filter: {fileAbsolutePath: {regex: "/(stack)/"}}
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
