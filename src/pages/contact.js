import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"


import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class Contact extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const { author } = data.site.siteMetadata
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Contact"
          keywords={[`gmail`, `mutluhan`, `üzmez`, `email`]}
        />
        {
          <div style={{
            display: `flex`,
            marginBottom: rhythm(2.5),
          }}>
            <div>
              <div style={{
                display: `flex`,
                marginBottom: rhythm(2.5),
              }}
              >
                <Image
                  fixed={data.avatar.childImageSharp.fixed}
                  alt={author}
                  style={{
                    marginRight: rhythm(1 / 2),
                    marginBottom: 0,
                    minWidth: 100,
                    borderRadius: `100%`,
                  }}
                  imgStyle={{
                    borderRadius: `50%`,
                  }}
                />
                <h1>Mutluhan ÜZMEZ</h1>
              </div>
              <div>
                <h3>mutluhanuzmez@gmail.com</h3>
                <p>You can send an email to me by form at the right!</p>
              </div>
            </div>
            <div style={{
                padding:  rhythm(2.5),
                marginLeft: rhythm(2.5),
              }}>
              <form style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                marginBottom: rhythm(2.5),
              }} action="https://formspree.io/mutluhanuzmez@gmail.com" method="POST">
                <input style={{
                  height: rhythm(1),
                  marginBottom: rhythm(1 / 8),
                  width: rhythm(20),
                  opacity: 0.5,
                  color: "black",
                  paddingLeft: rhythm(1 / 8),
                }}
                  placeholder="Name"
                  type="text"
                  name="name" />
                <input style={{
                  height: rhythm(1),
                  marginBottom: rhythm(1 / 8),
                  width: rhythm(20),
                  opacity: 0.5,
                  color: "black",
                  paddingLeft: rhythm(1 / 8),
                }}
                  placeholder="Your Email"
                  type="email"
                  name="_replyto"
                />
                <textarea
                  style={{
                    height: rhythm(5),
                    marginBottom: rhythm(1 / 8),
                    width: rhythm(20),
                    opacity: 0.5,
                    color: "black",
                    paddingLeft: rhythm(1 / 8),
                  }}
                  name="message"
                  placeholder="Message"></textarea>
                <input
                  style={{
                    height: rhythm(1),
                    marginBottom: rhythm(1 / 8),
                    width: rhythm(20),
                    opacity: 0.6,
                    borderRadius: 5,
                    color: "white",
                    backgroundColor: "#111",
                    paddingBottom: rhythm(1),
                  }}
                  type="submit" value="Send" />
              </form>
            </div>
          </div>
        }
      </Layout>
    )
  }
}

export default Contact

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        author
        social {
          twitter
        }
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

