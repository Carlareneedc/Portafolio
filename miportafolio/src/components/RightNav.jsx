import React from "react";
import styled from "styled-components";
import contacto from '../assets/img/contacto.png'
import '../style/RightNav.css'
import {Link} from 'react-router-dom'

const Ul = styled.ul`
  margin-left: -42%;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-top: 3%;
  li {
    padding: 18px 10px;
    font-family: Merriweather;
    color: #595959;
  }
  a:active, a:focus, a:hover {
    color: #FF3C38;
    text-decoration: overline;
  }
  
  @media (min-width: 320px) and (max-width:374px){
    flex-flow: column nowrap;
    background-color: #FFFFFF;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 65vh;
    width: 97%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #595959;
      display: flex;
      justify-content: flex-start;
      margin: -1%;
    }
  }

  @media (min-width: 375px) and (max-width:767px) {
    flex-flow: column nowrap;
    background-color: #FFFFFF;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 65vh;
    width: 97%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #595959;
      display: flex;
      justify-content: flex-start;
      margin: -1%;
    }
  }
`;
const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link style={{textDecoration:"none"}} className="inicioPro" to="/"><li className="inicio">Inicio</li></Link>
      <li className="proyectos"><a className="pro" href="#Proyectos">Proyectos</a></li>
      <Link to="/SobreMi"><li className="sobreMi">Sobre Mi</li></Link>
      <li className="contacto"><img className="contacto" alt="contacto" src={contacto}/></li>
    </Ul>
  );
};
export default RightNav;