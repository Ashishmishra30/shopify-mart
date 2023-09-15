import React from "react";
import "../Styles/cart.css";
import Helmet from "../Components/Helmet/Helmet";
import CommonSelection from "../Components/UI/CommonSelection";
import { Col, Container, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { cartActions } from "../Redux/slices/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Cart">
      <CommonSelection title={"Shopping Cart"} />

      <Container>
        <Row>
          <Col lg="9">
            {cartItems.length === 0 ? (
              <h2 className="fs-4 mb-4 mt-2 text-center">
                No items added to the cart
              </h2>
            ) : (
              <table className="table bordered">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Delete</th>
                  </tr>
                </thead>

                <tbody>
                  {cartItems.map((el, ind) => (
                    <Tr el={el} key={ind} />
                  ))}
                </tbody>
              </table>
            )}
          </Col>
          <Col lg="3">
            <h6 className="d-flex align-items-center justify-content-between">Subtotal  <span className="fs-4 fw-bold">${totalAmount}</span></h6>
           
            <p className="fs-6 mt-2">taxes and shipping will calculate in checkout</p>
            <div>
              <button className="buy_btn w-100 "><Link to="/checkout">Checkout</Link></button>
              <button className="buy_btn w-100 mt-2 mb-3"><Link to="/product">Continue Shop</Link></button>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

const Tr = ({ el }) => {
  const dispatch=useDispatch();

  const deleteProduct=()=>{
    dispatch(cartActions.deleteItem(el.id))
  }
  return (
    <tr>
      <td>
        <img src={el.imgUrl} alt="" />
      </td>
      <td>{el.productName}</td>
      <td>${el.price}</td>
      <td>{el.quantity}</td>
      <td>
        <motion.i
        onClick={deleteProduct}
          whileTap={{ scale: 1.2 }}
          class="ri-delete-bin-line"
        ></motion.i>
      </td>
    </tr>
  );
};

export default Cart;
