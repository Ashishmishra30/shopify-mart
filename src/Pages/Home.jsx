import React, { useEffect } from 'react'
import Helmet from '../Components/Helmet/Helmet';
import {motion} from "framer-motion";
import products from "../assets/data/products";
import { Col, Container, Row } from 'reactstrap';
import heroImg from "../assets/images/hero-img.png";
import "../Styles/home.css";
import { Link } from 'react-router-dom';
import Services from '../Services/Services';
import ProductList from '../Components/UI/ProductList';
import { useState } from 'react';
import counterImg from "../assets/images/counter-timer-img.png";
import Clock from '../Components/UI/Clock';

const Home = () => {
  const [trendingProducts,setTrendingProducts] = useState([]);
  const [bestSalesProducts,setBestSalesProducts] = useState([]);
  const [mobileProducts,setMobileProducts] = useState([]);
  const [wirelessProducts,setWirelessProducts] = useState([]);
  const [popularProducts,setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(()=>{
    const filteredTrendingData = products.filter((el)=>el.category==="chair");

    const filteredBestSalesData = products.filter((el)=>el.category==="sofa");

    const filteredMobileData = products.filter((el)=>el.category==="mobile");

    const filteredWirelessData = products.filter((el)=>el.category==="wireless");

    const filteredPopularData = products.filter((el)=>el.category==="watch");



    setTrendingProducts(filteredTrendingData)
    setBestSalesProducts(filteredBestSalesData)
    setMobileProducts(filteredMobileData);
    setWirelessProducts(filteredWirelessData);
    setPopularProducts(filteredPopularData);
  },[])

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
      <Services/>
      <section className="trending_products">
        <Container>
          <Row>
            <Col lg="12" className='text-center'>
              <h2 className='section_title'>Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts}/>
          </Row>
        </Container>
      </section>

      <section className="best_sales">
        <Container>
          <Row>
            <Col lg="12" className='text-center'>
              <h2 className='section_title'>Best Sales</h2>
            </Col>
            <ProductList data={bestSalesProducts}/>
          </Row>
        </Container>
      </section>

      <section className="timer_count">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="clock_top-content">
                <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
              </div>
              <Clock/>
              <motion.button whileTap={{scale: 1.2}} className='buy_btn store_btn'><Link to="/product">Visit Store</Link></motion.button>
            </Col>
            <Col lg="6" md="6" className='text-end'>
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new_arrivals">
        <Container>
          <Row>
            <Col lg="12" className='text-center  mb-5'>
              <h2 className='section_title'>New Arrivals</h2>
            </Col>
            <ProductList data={mobileProducts}/>
            <ProductList data={wirelessProducts}/>
          </Row>
        </Container>
      </section>

      <section className="popular_category">
        <Container>
          <Row>
            <Col lg="12" className='text-center mb-5'>
              <h2 className='section_title'>Popular in Category</h2>
            </Col>
            <ProductList data={popularProducts}/>
          </Row>
        </Container>
      </section>
      
    </Helmet>
  )
}

export default Home