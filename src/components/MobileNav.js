import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import "../styles/layout.css"

const SideNav = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #212121;
  overflow-x: hidden;
  transition:0.5s;
  padding-top:8px;
  display: flex;
  flex-direction:column;
  align-items:center;
`;

const MobileLink = styled.span`
  color: #fffff;
  font-size: 1.4em;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 28px;
`;

const CloseButton = styled.img`
  align-self: flex-end;
  height: 100px;
  width: auto;
  padding: 30px 30px;

  &:hover {
    cursor: pointer;
  }
`;

const linkStyles = {
  textDecoration: "none",
  margin: "9px",
  outline: 0
};

class MobileNav extends React.Component {
  render() {
    return (
      <SideNav
        style={this.props.open ? { width: 100 + "%" } : { width: 0 + "px" }}
      >
        <CloseButton
          onClick={this.props.action}
          id="closeButton"
          src={require("../images/icons/delete-button.svg")}
          href="javascript:void(0)"
        />
        
        <h2 className="TitleStyle">
          <Link
            className="TitleStyle"
            to={`/`}
          >
            {"<FurkanUzmez/>"}
          </Link>
        </h2>
        <Link to="/project" style={linkStyles}>
          <MobileLink>Projects</MobileLink>
        </Link>
        <Link to="/snippet" style={linkStyles}>
          <MobileLink>Snippets</MobileLink>
        </Link>
        <Link to="/resume" style={linkStyles}>
          <MobileLink>Memories</MobileLink>
        </Link>
        {/* <Link  href="#">Portfolio</Link> */}
        <Link to="/contact" style={linkStyles}>
          <MobileLink>Contact</MobileLink>
        </Link>
      </SideNav>
    );
  }
}

export default MobileNav;
