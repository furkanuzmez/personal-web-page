import React from 'react'
import { Link } from "gatsby"
import { rhythm } from "../../utils/typography"

import './style.css'

const Postlink = ({ node, linkTo }) => {

  const title = node.frontmatter.title || node.fields.slug
  let img
  try {
    img = require('../../../content'+linkTo+ node.fields.slug+'postcover.png')
  }catch (e) {
    img = require('../../../content/assets/defaultCover.png')
  }
  
  console.log(img)
  return (
    <div key={node.fields.slug} class="row">
        <img src={img}
        class="post-image"/>
      <div class="post-description">

        <Link style={{ boxShadow: `none` }} to={linkTo + node.fields.slug}>
          <h3
            style={{
              marginBottom: rhythm(1 / 4),
            }}
          >
            {title}
          </h3>

        </Link>
        <small>{node.frontmatter.date}</small>
        <p
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description || node.excerpt,
          }}
        />

      </div>
    </div>
  )
}

export default Postlink;