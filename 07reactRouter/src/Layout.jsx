import React from 'react';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    //Here giving outlet in middle means you can change middle value but header and footer keeps remains same
    <>
    <Header />
     <Outlet/> 
    <Footer/>
    </>
  )
}

export default Layout