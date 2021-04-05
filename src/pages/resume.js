import React from "react"
import { Link, graphql } from "gatsby"


import PostLink from '../components/postlink/index'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import "../styles/resume.css"
import itunomImage from "../../content/assets/itunom.jpg"
import basestechImage from "../../content/assets/basestech.png"

import teamphoto from "../../content/assets/teamphoto.jpeg"
import uavmq8 from "../../content/assets/uavmq8.jpg"




class Resume extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Resume"
          keywords={[`resume`, `furkan`, `üzmez`, `özgeçmiş`]}
        />
        <div class="timeline">
        <div class="container right">
            <div class="content">
              <h2 class ="year">(Now)//Free</h2>
              <hr/>
              <p>  </p>
            </div>
          </div>
          <div class="container left">
            <div class="content">
              <h2 class ="year">(2019/2020) // Intern Software Developer - Hyundai Motor Europe Technical Center  </h2>
              <hr/>
              <p>
              </p>
              
            </div>
          </div>
          <div class="container right">
            <div class="content">
              <h2 class ="year">(2018 / 2020 ) // Master of Engineering - Information Technologies - SRH Heidelberg University </h2>
              <hr/>
              <p>
              </p>
              <img 
            
                width= "240"
                height= "60"
              />
            </div>
          </div> 
          
          <div class="container left">
            <div class="content">
              <h2 class ="year">(2017 / 2018) // Electric-Electronic Engineer - Limak Kuwait </h2>
              <hr/>
              <p> 

              </p>
            
            </div>
          </div>
          <div class="container right">
            <div class="content">
              <h2 class ="year">(2016/ 2016) // Electric-Electronic Engineer - Limak Egypt </h2>
              <hr/>
              <p> 
                First Work Experience
              </p>
            
            </div>
          </div>
          <div class="container left">
            <div class="content">
              <h2 class ="year">(2011 - 2015) Electrical and Electronics Engineering - Anadolu University </h2>
              <hr/>

              <p> 
                Completed
              </p>
              
            </div>
          </div>
          <div class="container right">
            <div class="content">
              <h2 class ="year">(2015) AUVSI - SUAS Competition </h2>
              <hr/>
              <img 
            src={teamphoto}
            width= "240"
            height= "auto"
          />
              <p> 
                <a href="http://www.auvsi-suas.org/competitions/2014/" target="_blank">You can continue the
                 competition page of this year and check our journal from this link.</a>
              </p>
              
            </div>
          </div>
          <div class="container left">
            <div class="content">
              <h2 class ="year">(2014) AUVSI - SUAS Competition </h2>
              <hr/>
              <img 
            src={uavmq8}
            width= "240"
            height= "auto"
          />
              <p> 
                <a href="http://www.auvsi-suas.org/competitions/2015/" target="_blank">You can continue the
                 competition page of this year and check our journal from this link.</a>
              </p>
            
            </div>
          </div>
          <div class="container right">
            <div class="content">
            <h2 class ="year">(2014 ) // Software Team Member in SUAS UAV Team</h2>
            <hr/>
            <p>After undergraduate preparatory, I joined the Anadolu-SUAS software sub-team. I was responsible from
              developing an  autonomous flight application, which can take images autonomously with in 
              given time interval. I was also started to learn computer vision basics in this year.
               We joined to the AUVSI SUAS 2014 Competition.
                <a href="http://www.auvsi-suas.org/competitions/2014/" target="_blank">You can continue the
                 competition page of this year and check our journal from this link.</a>
            </p>
            
            </div>
          </div>
          <div class="container left">
            <div class="content">
              <h2 class ="year">(2011) // Anadolu University</h2>
              <hr/>
              <p>I started electrical and electronics engineering undergraduate program in
                Anadolu  University.
              </p>
              <img 
              
              />
            </div>
          </div>
         
         
        </div>
      </Layout>
    )
  }
}

export default Resume

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

