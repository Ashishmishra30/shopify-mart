import React from "react";
import "./footer.css";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
          <div className='logo'>
          {/* <img src={logo} alt="logo" /> */}
          <div>
            <h1 className="text-white">Shopify Mart</h1>
          </div>
        </div>
          <p className="footer_text mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus earum in voluptate recusandae ea blanditiis deserunt.
          </p>
          </Col>
          <Col lg="3">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Top categories</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2">
          <div className="footer_quick-links">
              <h4 className="quick_links-title">Usefull Links</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/product">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
            
          <Col lg="3">
          <div className="footer_quick-links">
              <h4 className="quick_links-title">Contact</h4>
              <ListGroup className="footer_contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                 <span><i class="ri-map-pin-line"></i></span>
                 <p>BHU, Varanasi, Uttar Pradesh</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                <span><i class="ri-phone-line"></i></span>
                 <p>+91-9467922067</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                <span><i class="ri-mail-line"></i></span>
                 <p>ashishmishra@gmail.com</p>
                </ListGroupItem>
                
              </ListGroup>
            </div>
          </Col>

          <Col lg="12">
            <p className="footer_copyright">Copyright {year} developed by Ashish Mishra. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
