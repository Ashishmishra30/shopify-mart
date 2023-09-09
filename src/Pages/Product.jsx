import React, { useState } from "react";
import Helmet from "../Components/Helmet/Helmet";
import CommonSelection from "../Components/UI/CommonSelection";
import { Col, Container, Row } from "reactstrap";
import "../Styles/product.css";
import products from "../assets/data/products";
import ProductList from "../Components/UI/ProductList";

const Product = () => {
  const [productData, setProductData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const FilteredProducts = products.filter((el) => el.category === "sofa");
      setProductData(FilteredProducts);
    }

    if (filterValue === "mobile") {
      const FilteredProducts = products.filter(
        (el) => el.category === "mobile"
      );
      setProductData(FilteredProducts);
    }

    if (filterValue === "chair") {
      const FilteredProducts = products.filter((el) => el.category === "chair");
      setProductData(FilteredProducts);
    }

    if (filterValue === "watch") {
      const FilteredProducts = products.filter((el) => el.category === "watch");
      setProductData(FilteredProducts);
    }

    if (filterValue === "wireless") {
      const FilteredProducts = products.filter(
        (el) => el.category === "wireless"
      );
      setProductData(FilteredProducts);
    }
  };

  const handleSearch= (e)=>{
    const searchTerm = e.target.value;

    const searchedProducts = products.filter((el)=>el.productName.toLowerCase().includes(searchTerm.toLowerCase()));
    setProductData(searchedProducts)
  }

  return (
    <Helmet title="Shop">
      <CommonSelection title="Products" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-end">
              <div className="filter__widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search__box">
                <input type="text" placeholder="Search......" onChange={handleSearch} />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {productData.length === 0 ? (
              <h1 className="text-center fs-4">No products are found!</h1>
            ) : (
              <ProductList data={productData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Product;
