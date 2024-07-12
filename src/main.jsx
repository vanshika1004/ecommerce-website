import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home/Home.jsx'

import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './router/Router.jsx';
import { Provider } from 'react-redux';
import store from './redux/Store.js'
import Cart from './pages/home/Cart.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  
  // <RouterProvider router={router} />
  <RouterProvider router={router}>
    
  </RouterProvider>
  
  
)
