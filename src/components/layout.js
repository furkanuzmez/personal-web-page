import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import "../styles/layout.css"


class Layout extends React.Component {

  constructor(props) {
    super(props);

    this.openMobileNav = this.openMobileNav.bind(this);
    this.closeMobileNav = this.closeMobileNav.bind(this);

    this.state = {
      mobileNavIsOpen: false
    };
  }

  openMobileNav() {
    this.setState({
      mobileNavIsOpen: true
    });
  }

  closeMobileNav() {
    this.setState({
      mobileNavIsOpen: false
    });
  }


  render() {
    const { title, children } = this.props

    return (
      <div class="mainContainer">
        <div style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center"
          }}>
          <MobileNav
            action={this.closeMobileNav}
            open={this.state.mobileNavIsOpen}
          />
          <Navbar action={this.openMobileNav} />
        </div>
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
