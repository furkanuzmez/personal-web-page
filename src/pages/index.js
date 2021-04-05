import React from "react"
import { Link, graphql } from "gatsby"


import PostLink from '../components/postlink/index'
import SkillCircle from '../components/skillCircle/index'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component { 
 


   componentDidMount() { 
    document.addEventListener('mousemove', e => this.parallax(e));

   }

   parallax = (e) => {
    document.querySelectorAll('.layer').forEach(layer => {
      const speed = layer.getAttribute('data-speed');

      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;

      layer.style.transform = `translate(${x}px, ${y}px)`;
    });
  }



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
        <div> 
          
          <section class="entrance">
            <img src="https://firebasestorage.googleapis.com/v0/b/fire-fotos-8e3f9.appspot.com/o/img%2Ffigure-1.png?alt=media&token=6d66c61e-6180-4331-8d0c-596e3161eb26" alt="Figure" title="Figure" class="layer" data-speed="-10" />
            <img src="https://firebasestorage.googleapis.com/v0/b/fire-fotos-8e3f9.appspot.com/o/img%2Ffigure-2.png?alt=media&token=9a599a7b-9718-40ee-969d-786b52a5ea64" alt="Figure" title="Figure" class="layer" data-speed="10" />
            <img src="https://firebasestorage.googleapis.com/v0/b/fire-fotos-8e3f9.appspot.com/o/img%2Ffigure-3.png?alt=media&token=854f3c66-474f-4dae-bff7-268a7529f783" alt="Figure" title="Figure" class="layer" data-speed="4" />
            <img src="https://firebasestorage.googleapis.com/v0/b/fire-fotos-8e3f9.appspot.com/o/img%2Ffigure-4.png?alt=media&token=7dffc0a2-5351-4029-a356-f609c2ab1135" alt="Figure" title="Figure" class="layer" data-speed="12" />
            <img src="https://firebasestorage.googleapis.com/v0/b/fire-fotos-8e3f9.appspot.com/o/img%2Ffigure-5.png?alt=media&token=b6fdd311-b0a1-4b96-9633-98b1a96221f2" alt="Figure" title="Figure" class="layer" data-speed="16" />
            <img src="https://firebasestorage.googleapis.com/v0/b/fire-fotos-8e3f9.appspot.com/o/img%2Ffigure-6.png?alt=media&token=8c2fe5e7-adb9-46da-8006-1dabb22bd4eb" alt="Figure" title="Figure" class="layer" data-speed="-4" />
            <img src="https://firebasestorage.googleapis.com/v0/b/fire-fotos-8e3f9.appspot.com/o/img%2Ffigure-7.png?alt=media&token=67aae0c6-42d8-4d19-befb-470cf57963f5" alt="Figure" title="Figure" class="layer" data-speed="8" />
            <img src="https://firebasestorage.googleapis.com/v0/b/fire-fotos-8e3f9.appspot.com/o/img%2Ffigure-8.png?alt=media&token=31570147-2d0d-4114-bd12-5d85ec203c68" alt="Figure" title="Figure" class="layer" data-speed="-18" />
            <img src="https://firebasestorage.googleapis.com/v0/b/fire-fotos-8e3f9.appspot.com/o/img%2Ffigure-9.png?alt=media&token=96528a23-ea3b-40bc-a978-773afcb7c839" alt="Figure" title="Figure" class="layer" data-speed="12" />
            <img src="https://firebasestorage.googleapis.com/v0/b/fire-fotos-8e3f9.appspot.com/o/img%2Ffigure-10.png?alt=media&token=d33285ca-8489-4388-9111-1c5a5a94c6ed" alt="Figure" title="Figure" class="layer" data-speed="-14" />
            <img src="https://firebasestorage.googleapis.com/v0/b/fire-fotos-8e3f9.appspot.com/o/img%2Ffigure-11.png?alt=media&token=64db8be0-d524-4fca-bd09-932ae0937642" alt="Figure" title="Figure" class="layer" data-speed="-20" />
            <img src="https://firebasestorage.googleapis.com/v0/b/fire-fotos-8e3f9.appspot.com/o/img%2Ffigure-12.png?alt=media&token=a7146e98-4be8-4dad-88f8-7fb1f607c0f7" alt="Figure" title="Figure" class="layer" data-speed="10" />
            {/* <h1>Hi! I am Furkan. I am software engineer in Frankfurt.</h1>
        <h2>I hope there is something to read for you in my blog.</h2> */}
              <div> 
              <h3 class="layer" style={{fontSize: 2.5 + 'em'}}  data-speed="0"> 
              Hi! This is Furkan
	</h3>
                <h3 class="layer" style={{fontSize: 2 + 'em'}}  data-speed="0"> 
              Software Developer and Creative Technologist
	</h3> </div>
            
          </section>

        </div>
        <h3>Skills</h3>
        <hr></hr>
        <div class="okvir">
          <SkillCircle percentage="68" subject="Python" />
          <SkillCircle percentage="50" subject="Java" />
          <SkillCircle percentage="90" subject="Embedded-C" />
          <SkillCircle percentage="90" subject="Javascript" />
          <SkillCircle percentage="90" subject="HTML" />
          <SkillCircle percentage="80" subject="CSS" />
        </div>
        <div class="okvir">
          <SkillCircle percentage="50" subject="React"/>
          <SkillCircle percentage="50" subject="Django"/>
          <SkillCircle percentage="70" subject="React"/>
          <SkillCircle percentage="60" subject="Java"/>
          <SkillCircle percentage="65" subject="Python"/>
          <SkillCircle percentage="65" subject="Python"/>
        </div>

        <h3>Posts</h3>
        <hr></hr>
        {/* <Bio /> */}

        <section class="cards-wrapper">
          {posts.map(({ node }) => {
            console.log(node.frontmatter.subjects)
            return (
              <PostLink node={node} linkTo="/project" />
            )
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
