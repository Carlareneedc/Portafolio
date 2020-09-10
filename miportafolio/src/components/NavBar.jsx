import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import logo from '../assets/img/logo.png'

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  z-index: 10000;
  border-bottom: 1px solid #146078;
  padding-bottom: 7%;
  width: 100%;
  .logo {
    width: 5.5vw;
    margin-left: 4.9%;
    margin-top: 1.2%;
  }
  @media (min-width: 320px) and (max-width:374px){
     .logo {
      width: 16.5vw;
      margin-left: -2.1%;
      margin-top: 5.1%;
  }

  border-bottom: 0;
}

@media (min-width: 375px) and (max-width:767px){
  .logo {
    width: 16.5vw;
    margin-left: -2.1%;
    margin-top: 4.1%;
}

border-bottom: 0;
}

`;
const Navbar = () => {
  return (
    <Nav>
      <div className="logo"><img className="logo" alt="logo" src={logo}/></div>
      <Burger />
    </Nav>
  );
};
export default Navbar;