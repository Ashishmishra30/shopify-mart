import React from "react";
import { Col, Container, Row, Form, FormGroup } from "reactstrap";
import Helmet from "../Components/Helmet/Helmet";
import CommonSelection from "../Components/UI/CommonSelection";

const Checkout = () => {
  return (
    <Helmet title={"Checkout"}>
      <CommonSelection title={"Checkout"} />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter your name" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="email" placeholder="Enter your email" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="number" placeholder="Phone number" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Street Address" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="City" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Postal Code" />
                </FormGroup>
                 <FormGroup className="form__group">
                  <input type="text" placeholder="country" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="8"></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
