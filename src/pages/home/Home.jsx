import React from 'react';
import Banner from './Banner';
import Category from './Category';
import Collections from './Collections';
import Products from './Products';
import BestSellers from './BestSellers';
import Newsletters from './Newsletters';
import { useState } from 'react';
import Cart from './Cart';

const Home = () => {
  const [cartItems, setCartItems] = useState([]);

  const onAddToCart = product => {
    const existingItem = cartItems.find(i => i.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      setCartItems([...cartItems, {...product, quantity: 1 }]);
    }
  };
  return (
    <div>
      <Banner/>
      <Category/>
      <Products/>
      <Collections/>
      <BestSellers/>
      <Cart cartItems={cartItems} />
      <Newsletters/>
    </div>
  )
}

export default Home