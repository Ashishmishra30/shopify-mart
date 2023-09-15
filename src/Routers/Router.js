import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Product from '../Pages/Product'
import Productdetails from '../Pages/Productdetails'
import Cart from '../Pages/Cart'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Checkout from '../Pages/Checkout'
import ProtectedRoutes from './ProtectedRoutes'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="product" element={<Product />} />
      <Route path="product/:id" element={<Productdetails />} />
      <Route path="cart" element={<Cart />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="checkout" element={
        <ProtectedRoutes>
          <Checkout />
        </ProtectedRoutes>
      } />
    </Routes>
  )
}

export default Router