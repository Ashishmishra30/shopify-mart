import React from "react";
import { Col, Container, Row, Form, FormGroup } from "reactstrap";
import Helmet from "../Components/Helmet/Helmet";
import CommonSelection from "../Components/UI/CommonSelection";
import "../Styles/checkout.css";
import { useSelector } from "react-redux";

const Checkout = () => {

  const totalQty = useSelector((state=>state.cart.totalQuantity));
  const totaAmount = useSelector((state=>state.cart.totalAmount));

  return (
    <Helmet title={"Checkout"}>
      <CommonSelection title={"Checkout"} />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className="billing__form">
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
            <Col lg="4">
              <div className="checkout__cart">
                <h6>Total Qty: <span>{totalQty} items</span></h6>
                <h6>Subtotal: <span>${totaAmount}</span></h6>
                <h6><span>Shipping: <br />Free Shipping </span> <span>0</span></h6>
                <h4>Total Cost: <span>${totaAmount}</span></h4>
                <button className="buy_btn auth__btn w-100 bg-white">Place an order</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
