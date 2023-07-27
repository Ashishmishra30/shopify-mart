import React from "react";
import "./services.css";
import { motion } from "framer-motion";
import { Col, Container, Row } from "reactstrap";
import serviceData from "../assets/data/serviceData";

const Services = () => {
  return (
    <section className="services">
      <Container>
        <Row>
          {serviceData.map((el, i) => (
            <Col lg="3" md="4" key={i}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="services_item"
                style={{ background: `${el.bg}` }}
              >
                <span>
                  <i class={el.icon}></i>
                </span>
                <div>
                  <h3>{el.title}</h3>
                  <p>{el.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
