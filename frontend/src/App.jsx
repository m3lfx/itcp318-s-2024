import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import './App.css'
import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import Home from './Components/Home'
import ProductDetails from './Components/Product/ProductDetails'
import Login from './Components/User/Login'
import Register from './Components/User/Register'
import Profile from './Components/User/Profile';
import UpdatePassword from './Components/User/UpdatePassword';
import UpdateProfile from './Components/User/UpdateProfile';
function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact="true" />
          <Route path="/product/:id" element={<ProductDetails />} exact="true" />
          <Route path="/search/:keyword" element={<Home />} exact="true" />
          <Route path="/login" element={<Login />} exact="true" />
          <Route path="/register" element={<Register exact="true" />} />
          <Route path="/me" element={<Profile exact="true" />} />
          <Route path="/me/update"
            element={<UpdateProfile />
            }
            exact="true"
          />
          <Route path="/password/update" element={<UpdatePassword />} />
        </Routes>
      </Router>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
