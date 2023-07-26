import React from 'react';
import "./header.css";
import {motion} from "framer-motion";
import { Container, Row } from 'reactstrap';
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import { NavLink } from 'react-router-dom';

const nav_links = [
  {
    path:"/",
    display:"Home"
  },
  {
    path:"product",
    display:"Product"
  },
  {
    path:"cart",
    display:"Cart"
  }
]

const Header = () => {
  return (
   <header className="header">
    <Container>
     <Row>
      <div className="nav_container">
        <div className='logo'>
          <img src={logo} alt="logo" />
          <div>
            <h1>Shopify Mart</h1>
          </div>
        </div>

        <div className='nav'>
          <ul className="menu">
           {
            nav_links.map((el,item)=>(
              <li className="nav_item" key={item}>
              <NavLink to={el.path} className={(navClass)=>navClass.isActive ? "nav__active" :""}>{el.display}</NavLink>
            </li> 
            ))
           }
          </ul>
        </div>

        <div className="nav_icons">
          <span className='fav_icon'><i class="ri-heart-line"></i>
          <span className="badge">1</span>
          </span>
          <span className='cart_icon'><i class="ri-shopping-bag-line"></i> <span className="badge">1</span></span>
          <span><motion.img whileTap={{scale:1.2}} src={userIcon} alt="user" /></span>
        </div>

        <div className="mobile_menu">
          <span><i class="ri-menu-line"></i></span>
        </div>
      </div>
      </Row> 
    </Container>
   </header>
  )
}

export default Header