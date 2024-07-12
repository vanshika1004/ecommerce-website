import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/Home';
import SingleProduct from '../pages/home/SingleProduct';
import Cart from '../pages/home/Cart';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element:<Home/>
        }, 
        {
          path: "/shop/:id",
          element:<SingleProduct/>
        },
        {
          path: "/cart",
          element:<Cart/>
        }
      ]
    },
  ]);

export default router