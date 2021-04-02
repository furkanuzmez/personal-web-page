import React from 'react'
import { Link } from "gatsby"
import { rhythm } from "../../utils/typography"

import './style.css'

const Postlink = ({ node, linkTo }) => {

  const title = node.frontmatter.title || node.fields.slug
  let img
  try {
    img = require('../../../content' + linkTo + node.fields.slug + 'postcover.png')
  } catch (e) {
    img = require('../../../content/assets/defaultCover.png')
  }

  console.log(img)
  return (
    <div class="card-grid-space">
    <Link class="card" to={linkTo + node.fields.slug}>
      <div>
        <h1>{title}</h1>
        <p>{node.frontmatter.description.substring(0,125) || node.excerpt.substring(0,125)}...</p>
        <div class="date">{node.frontmatter.date}</div>
        <div class="tags">
               {node.frontmatter.subjects == null ? null : node.frontmatter.subjects.map((subject) => {
            return(
              <div class="tag">{subject}</div>
            )
          })}
      
        </div>
      </div>
    </Link>
  </div>
  )
}

export default Postlink;