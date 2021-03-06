import React from "react"
import { Link, graphql } from "gatsby"
import './style.css'
import Bio from "../../components/bio"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { rhythm, scale } from "../../utils/typography"
import highlightCode from '../../utils/highlightCode'
import SkillCircle from  "../../components/skillCircle"


class BlogPostTemplate extends React.Component {

  componentDidMount(){
    highlightCode()
  }

  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    let precedingPath
    this.props.location.pathname.includes("blog") ? precedingPath = "/project" : precedingPath = "/project"

    console.log(post.html);

    return (

      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title} 

          description={post.frontmatter.description || post.excerpt}
        /> 

           { 
                 post.frontmatter.title == `liste` ? 
                 <h1> Furkan </h1> :  <h2>  </h2> 
           } 
        <div class="blog-post">
          
          <h1>{post.frontmatter.title}</h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
              marginTop: rhythm(-1),
            }}
          >
            {post.frontmatter.date}
          </p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <Bio />

          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link style={{ color: 'white' }} to={precedingPath + previous.fields.slug} rel="prev">
                  ??? {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link style={{ color: 'white' }} to={precedingPath + next.fields.slug} rel="next">
                  {next.frontmatter.title} ???
                </Link>
              )}
            </li>
          </ul>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
