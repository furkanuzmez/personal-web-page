import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"
import "../styles/layout.css"


class Layout extends React.Component {

  render() {
    const { title, children } = this.props
    let header

    header = (
      <div className="Header">
        <h2 className="TitleStyle">
          <Link
            className="TitleStyle"
            to={`/`}
          >
            {"<FurkanUzmez/>"}
          </Link>
        </h2>
        <ul className="Navbar" style={{ paddingRight: rhythm(3 / 4) }}>

          {/* <h3>
            <i style={labelStyle}>{"< programmer >"}</i>
          </h3> */}

          <li className="NavLi">
            <Link
              to={`/contact`}
            >
              {"Contact"}
            </Link>
          </li>
          <li className="NavLi">
            <Link
              to={`/resume`}
            >
              {"Memories"}
            </Link>
          </li>
          <li className="NavLi">
            <Link
              to={`/snippet`}
            >
              {"Snippets"}
            </Link>
          </li>
          <li className="NavLi">
            <Link
              to={`/project`}
            >
              {"Projects"}
            </Link>
          </li>

        </ul>
      </div>
    )

    return (
      <div class="mainContainer">
        <header style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(48),
            padding: `${rhythm(1, 5)} ${rhythm(3 / 4)}`
          }}>{header}</header>
        <main
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(48),
            padding: `${rhythm(1, 5)} ${rhythm(3 / 4)}`
          }}
        >{children}</main>
        <footer>
          {/* © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> */}
        </footer>
      </div>
    )
  }
}

export default Layout;
