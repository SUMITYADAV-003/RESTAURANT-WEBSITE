import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Recipes from '../pages/Recipes';
import Createrecipes from '../pages/Createrecipes';

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/recipes" element={<Recipes/>} />
      <Route path="/create-recipes" element={<Createrecipes/>} />
    </Routes>
  )
}

export default Mainroutes