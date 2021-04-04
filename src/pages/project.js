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
    var subjectCounter  = []
    var dict = {};
    var i =  0 ;
    posts.map(({ node }) => {
      return (
        node.frontmatter.subjects == null ? null : node.frontmatter.subjects.map((subject) => {
          if (subjects.includes(subject)) { 
            dict[subject] = Number(dict[subject]) + 1 ;
            return;
          } else {
            subjects.push(subject)
            dict[subject] = 1 ;
          } 
         
        })
          
      )
    }) 
    { 
       var value = 0 ;
       console.log(dict) 
       for(var key in dict) {
       value =  value + Number(dict[key]);
      
        // do something with "key" and "value" variables
      }
         
       }
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
          > { "All" + " "  + " ( " + posts.length + " ) " } </button>
          {subjects.map((subject) => {
            console.log(subject)
            return (
              <button data-menu="all"
                className={`button ${this.state.activeButton == subject ? 'active-color' : ''}`}
                id={subject}
                onClick={this.handleActiveButton(subject)}
              >{subject + " "  + " ( "  +dict[subject] + " ) "}</button>
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
