import { useState } from 'react'
import "./index.css"
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import InnerData from './Components/InnerData'
import Login from "./Components/Login"
import {CartProvider} from "./Components/CartsContext";
import SignUp from './Components/SignUp'
import Cart from './Components/Cart'
import Orders from './Components/Orders'


function App() {
  

  return (
    <>
      <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products/:id" element={<InnerData  />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
      </CartProvider>
    </>
  )
}

export default App
