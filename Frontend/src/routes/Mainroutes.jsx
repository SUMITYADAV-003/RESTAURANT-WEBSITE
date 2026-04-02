import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Recipes from '../pages/Recipes';

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/recipes" element={<Recipes/>} />
    </Routes>
  )
}

export default Mainroutes