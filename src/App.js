import React from 'react';
import './App.css';
import {Routes, Route } from "react-router-dom";
import Home from './Components/Home'
import About from './Components/About'
import Navbar from './Components/Navbar';
import ContactCard from './Components/ContactCard';

function App() {
  return (
    <div className='app'>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<ContactCard/>} />
      </Routes>
    </div>
  );
}

export default App;
