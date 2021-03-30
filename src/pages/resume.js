import React from "react"
import { Link, graphql } from "gatsby"


import PostLink from '../components/postlink/index'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import "../styles/resume.css"
import itunomImage from "../../content/assets/itunom.jpg"
import basestechImage from "../../content/assets/basestech.png"
import ituImage from "../../content/assets/itulogo.png"



class Resume extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Resume"
          keywords={[`resume`, `mutluhan`, `üzmez`, `özgeçmiş`]}
        />
        <div class="timeline">
        <div class="container right">
            <div class="content">
              <h2 class ="year">(Now) // Free</h2>
              <hr/>
              <p>Trying to be a blogger and looking for part-time job or freelance jobs.</p>
            </div>
          </div>
          <div class="container left">
            <div class="content">
              <h2 class ="year">(2017 - Nov / 2018 - Dec) // Mobile Developer in Basestech R&D Co.</h2>
              <hr/>
              <p>I entered the job as a part-time working student here
                 and I started to develop mobile application
                by using Xamarin Framework. I work on Xamarin development 3-4 months.
                  After then, in a new project I developed a new mobile app using React-Native. 
                Although I focused more on mobile application development,
                 I also gained experience in web application development.
              </p>
              <img 
                src = {basestechImage}
                width= "240"
                height= "60"
              />
            </div>
          </div>
          <div class="container right">
            <div class="content">
              <h2 class ="year">(2016 - 2017) // Team Leader in ITUNOM UAV Team</h2>
              <hr/>

              <p>In this year, I was chosen as team leader of ITUNOM Team. We developed a new octocopter
                with a completely different mechanical design. I was responsiple from the team and budget management.
                I also work on image processing task with one of my friend in the team.
                We joined to the AUVSI SUAS 2017 Competition and we were 4th in overall ranking and 2th in mission
                ranking. 
                <a href="http://www.auvsi-suas.org/competitions/2017/" target="_blank">You can continue the
                 competition page of this year and check our journal from this link.</a>
              </p>
              <img 
                src = {itunomImage}
                width= "225"
                height= "70"
              />
            </div>
          </div>
          <div class="container left">
            <div class="content">
            <h2 class ="year">(2015 - 2016) // Software Team Member in ITUNOM UAV Team</h2>
            <hr/>
            <p>After undergraduate preparatory, I joined the ITUNOM software sub-team. I was responsible from
              developing an Android camera application, which can take images autonomously with in 
              given time interval. I was also started to learn computer vision basics in this year.
               We joined to the AUVSI SUAS 2016 Competition and we were 12th in overall ranking. 
                <a href="http://www.auvsi-suas.org/competitions/2016/" target="_blank">You can continue the
                 competition page of this year and check our journal from this link.</a>
            </p>
            <img 
                src = {itunomImage}
                width= "225"
                height= "70"
              />
            </div>
          </div>
          <div class="container right">
            <div class="content">
              <h2 class ="year">(2014) // Istanbul Technical University</h2>
              <hr/>
              <p>I started computer engineering undergraduate program in
                Istanbul Technical University.
              </p>
              <img 
                src = {ituImage}
                width= "303"
                height= "150"
              />
            </div>
          </div>
          <div class="container left">
            <div class="content">
              <h2 class ="year">(2012-2014) // Eskisehir Anatolian High School</h2>
            </div>
          </div>
          <div class="container right">
            <div class="content">
              <h2 class ="year">(2010-2012) // Adem Tolunay Anatolian High School</h2>
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

