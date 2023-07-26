import React from 'react'
import Helmet from '../Components/Helmet/Helmet';
import {motion} from "framer-motion"
import { Col, Container, Row } from 'reactstrap';
import heroImg from "../assets/images/hero-img.png";
import "../Styles/home.css";
import { Link } from 'react-router-dom';

const Home = () => {
  const year = new Date().getFullYear();
  return (
    <Helmet title={"Home"}>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_container">
                <p className="hero_subtitle">
                  Trending Products in {year}
                </p>
                <h2>Make Your Interior More Advance & Minimalistic</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nemo, ducimus consequatur dolorem harum magnam voluptatum ex id esse obcaecati accusamus iusto inventore asperiores. Deserunt error ea ullam neque totam?</p>
                <motion.button whileTap={{scale:1.2}} className="buy_btn"><Link to="product">SHOP NOW</Link></motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home