import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
// import Products from "../components/Products/Products";
import Login from "./Login";

const Home = () => {
  return <div>{/* Code here */}
  <Navbar/>
  <Login/>
 <Routes>

  <Route path="/" element={<Home/>}></Route>
  <Route path="/login" element={<Login/>}></Route>
 {/* <Route path="/products" 
 ={<Products/>}></Route>  */}
    </Routes>
  
  </div>;
};

export default Home;
