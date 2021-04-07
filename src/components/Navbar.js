import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import "../styles/layout.css"
const Header = styled.header`
display: flex;
justify-content: space-around;
width: 100%;
max-width: 1250px;
padding-top: 15px;
`;

const HeaderContainer = styled.div`
width: 90%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

const HeadMenu = styled.ul`
  max-width: 585px;
  list-style-type: none;
  overflow: hidden;
  display: inline-block;
  float: right;
  margin-top: 65px;

  @media (min-width: 1070px) {
    width: 63%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
  }
`;

const HamButton = styled.img`
  height: 35px;
  width: auto;
  padding: none;
  margin: none;


  &:hover {
    cursor: pointer;
  }

  @media (min-width: 1070px) {
    display: none;
    margin: none;
  }
`;

const MenuItem = styled.li`
  display: none;
  color: #ffffff;
  text-align: center;
  padding: 14px 36px;
  text-decoration: none;

  &:hover {
    color: white;
    border-bottom: 1px solid #c06600;
  }

  @media (min-width: 1070px) {
    display: block;
    margin: 2px;
    color: #ffffff;
    text-align: center;
    padding: 14px 36px;
    text-decoration: none;
    border-bottom: 1px solid #ffffff;
  }
`;

const linkStyles = {
  textDecoration: "none",
  margin: 0,
  border: 0
};

class Navbar extends React.Component {
  render() {
    return (
      <Header>
        <HeaderContainer>
        
        <h2 className="TitleStyle">
          <Link
            className="TitleStyle"
            to={`/`}
          >
            {"<FurkanUzmez/>"}
          </Link>
        </h2>
          <HeadMenu>
            <Link to="/project" style={linkStyles}>
              <MenuItem>Projects</MenuItem>
            </Link>
            <Link to="/snippet" style={linkStyles}>
              <MenuItem>Snippets</MenuItem>
            </Link>
            <Link to="/resume/" style={linkStyles}>
              <MenuItem>Memories</MenuItem>
            </Link>
            <Link to="/contact/" style={linkStyles}>
              <MenuItem>Contact</MenuItem>
            </Link>
            {/* <a href="#">Portfolio</a> */}

          </HeadMenu>
          <HamButton
              onClick={this.props.action}
              src={require("../images/icons/menu-options.svg")}
              alt="menu button"
            />
        </HeaderContainer>
      </Header>
    );
  }
}

export default Navbar;