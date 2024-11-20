import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './components/Home'
import Categories from './components/Categories';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Cart from './components/Cart';
import { CartProvider, } from "react-use-cart";
import { Toaster } from 'react-hot-toast';
import { Profile } from './components/Profile';
import Order from './components/Order';


const App = () => {
    const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>,
    },
    {
      path: "/Categories",
      element:<Categories/>,
    },
    {
      path: "/Cart",
      element:<Cart/>,
    },
    {
      path: "/About",
      element:<About/>,
    },
    {
      path: "/Contact",
      element:<Contact/>,
    },
    {
      path: "/Login",
      element:<Login/>,
    },
    {
      path: "/Signup",
      element:<Signup/>,
    },
    {
      path: "/Profile",
      element:<Profile/>,
    },
    {
      path: "/Order",
      element:<Order/>,
    },
  ]);
  return (
    <>
    <CartProvider>
    <div className=''>
       <RouterProvider router={router} />
    </div>
    <Toaster />
    </CartProvider>
    </>
  )
}

export default App