import React, { useEffect, useRef, useState } from "react";
import Helmet from "../Components/Helmet/Helmet";
import CommonSelection from "../Components/UI/CommonSelection";
import { Col, Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import "../Styles/productsDetails.css";
import { motion } from "framer-motion";
import ProductList from "../Components/UI/ProductList";
import { useDispatch } from "react-redux";
import { cartActions } from "../Redux/slices/cartSlice";
import { toast } from "react-toastify";

const Productdetails = () => {
  const [tab, setTab] = useState("desc");
  const reviewUser = useRef("");
  const reviewMsg = useRef("");
  const dispatch = useDispatch();
  const [rating, setrating] = useState(null);
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = product;

  const reletedProducts = products.filter((el) => el.category === category);

  const handleSubmit = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObject ={
      userName: reviewUserName,
      text:reviewUserMsg,
      rating,
    }
    console.log(reviewObject);
    toast.success("Review submitted")
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );
    toast.success("Product added successfully");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={productName}>
      <CommonSelection title={productName} />

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg="6">
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__ratings d-flex align-items-center gap-5 mb-3">
                  <div>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span >
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span >
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-half-s-fill"></i>
                    </span>
                  </div>
                  <p>
                    (<span>{avgRating}</span> ratings)
                  </p>
                </div>
                <div className="d-flex align-items-center gap-5">
                  <span className="product__price">${price}</span>
                  <span>Category: {category}</span>
                </div>
                <p className="mt-3">{shortDesc}</p>

                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy_btn"
                  onClick={addToCart}
                >
                  Add to Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === "desc" ? "active__tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "active__tab" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Review ({reviews.length})
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab__content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product_review">
                  <div className="review__wrapper">
                    <ul>
                      {reviews?.map((el, ind) => (
                        <li key={ind} className="mb-4">
                          <span>{el.rating} (ratings)</span>
                          <p>{el.text}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="review__form">
                      <h4>Leave your experience</h4>
                      <form action="" onSubmit={handleSubmit}>
                        <div className="form__group">
                          <input
                            type="text"
                            placeholder="Enter Name"
                            ref={reviewUser}
                            required
                          />
                        </div>
                        <div className="form__group d-flex align-items-center gap-5 review__group">
                          <motion.span whileTap={{scale:1.2}}  onClick={() => setrating(1)}>
                            1<i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span whileTap={{scale:1.2}}  onClick={() => setrating(2)}>
                            1<i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span whileTap={{scale:1.2}}  onClick={() => setrating(3)}>
                            1<i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span whileTap={{scale:1.2}}  onClick={() => setrating(4)}>
                            1<i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span whileTap={{scale:1.2}}  onClick={() => setrating(5)}>
                            1<i class="ri-star-s-fill"></i>
                          </motion.span>
                        </div>
                        <div className="form__group">
                          <textarea
                            rows={4}
                            type="text"
                            placeholder="Enter your message...."
                            ref={reviewMsg}
                            required
                          />
                        </div>
                        <button type="submit" className="buy_btn">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>

            <Col lg="12" className="mt-5">
              <h2 className="releted__title">You might also like</h2>
            </Col>
            <ProductList data={reletedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Productdetails;
