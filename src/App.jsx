import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import Notfound from './pages/Notfound';
import Footer from './components/Footer';
import Cart from './pages/Cart';


const App = () => {
const [cart , setCart]=useState([])
function addToCart(item) {
setCart([... cart,item])
}
  return (
    <React.Fragment>
      <Header length={cart.length}/>
      <Routes>
        <Route path="/" element={<Home addToCart = {addToCart}/>} />
        <Route path="/cart" element={<Cart cart={cart}/>} />
        <Route path="/*" element={<Notfound/>} />
        </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
