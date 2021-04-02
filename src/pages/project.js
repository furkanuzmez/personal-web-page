import React from "react"
import { graphql } from "gatsby"


import PostLink from '../components/postlink/index'
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeButton: 'All' }
    //this.handleChange = this.handleChange.bind(this);
  }


  handleActiveButton = activeButton => ev => {
    this.setState({ activeButton })
    console.log(this.state.activeButton)
    return 0;
  }


  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const subjects = []
    posts.map(({ node }) => {
      return (
        node.frontmatter.subjects == null ? null : node.frontmatter.subjects.map((subject) => {
          if (subjects.includes(subject)) {
            return;
          } else {
            subjects.push(subject)
          }
        })
      )
    })

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {/* <Bio /> */}
        <h3>Projects</h3>
        <hr></hr>
        <div class="btns">
          {console.log(subjects)}
          <button data-menu="all"
            className={`button ${this.state.activeButton == "All" ? 'active-color' : ''}`}
            id={"All"}
            onClick={this.handleActiveButton("All")}
          >All</button>
          {subjects.map((subject) => {
            console.log(subject)
            return (
              <button data-menu="all"
                className={`button ${this.state.activeButton == subject ? 'active-color' : ''}`}
                id={subject}
                onClick={this.handleActiveButton(subject)}
              >{subject}</button>
            )
          })}
        </div>
        <section class="cards-wrapper">
          {posts.map(({ node }) => {
            if(this.state.activeButton == "All" || node.frontmatter.subjects.includes(this.state.activeButton)){
              return (
                <PostLink node={node} linkTo="/project" />
              )
            }

          })}
        </section>
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
      filter: {fileAbsolutePath: {regex: "/(project)/"}}
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
            subjects
          }
        }
      }
    }
  }
`
