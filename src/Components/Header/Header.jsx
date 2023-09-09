import React, { useEffect, useRef } from "react";
import "./header.css";
import { motion } from "framer-motion";
import { Container, Row } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const nav_links = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "product",
    display: "Product",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate();

  const totalQuantity =useSelector(state=>state.cart.totalQuantity);
  const menuRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      }else{
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return ()=>window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const menuToggle = ()=>menuRef.current.classList.toggle("active_menu");

  const navigateToCart = ()=>{
    navigate("/cart");
  }

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_container">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Shopify Mart</h1>
              </div>
            </div>

            <div className="nav" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav_links.map((el, item) => (
                  <li className="nav_item" key={item}>
                    <NavLink
                      to={el.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {el.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav_icons">
              <span className="fav_icon">
                <i class="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart_icon" onClick={navigateToCart}>
                <i class="ri-shopping-bag-line"></i>{" "}
                <span className="badge">{totalQuantity}</span>
              </span>
              <span>
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={userIcon}
                  alt="user"
                />
              </span>
              <div className="mobile_menu">
              <span onClick={menuToggle}>
                <i class="ri-menu-line"></i>
              </span>
            </div>
            </div>

           
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
