import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import ProductsHot from "./components/ProductsHot";
import About from "./components/About";
import Tips from "./components/Tips";

import { register } from 'swiper/element/bundle'
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Footer from "./components/Footer";


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products-hot" element={<ProductsHot />} />
        <Route path="/about" element={<About />} />
        <Route path="/tips" element={<Tips />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
