import React from 'react';
import { Routes , Navigate , Route } from 'react-router-dom';
//context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';

//components 
import Store from "./components/Store";
import ProductDetailes from './shared/ProductDetailes';
import Navbar from './shared/Navbar';
import ShopCart from './shared/ShopCart';

const App = () => {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/products/:id" element={<ProductDetailes />} />
          <Route path="/products" element={<Store />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route path='/*' element={<Navigate to="/products" />}/>
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
};

export default App;