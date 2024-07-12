import React, { useState, useEffect } from 'react';

const Cart = ({ cartItems }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  }, [cartItems]);

  const removeFromCart = item => {
    cartItems.filter(i => i.id!== item.id);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold">Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id} className="flex justify-between py-2">
            <span>{item.name} x {item.quantity}</span>
            <span>${item.price * item.quantity}</span>
            <button
              onClick={() => {
                removeFromCart(item);
              }}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p className="text-lg font-bold">Total Price: ${totalPrice}</p>
    </div>
  );
};

export default Cart;