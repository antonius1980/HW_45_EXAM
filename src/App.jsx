import React from "react";
import { Routes, Route } from 'react-router-dom';
//import viteLogo from '/vite.svg'

import Home from './pages/Home';
import About from './pages/About';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import './App.scss'

function App() {
  return (
    <>
            <Header />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
            </Routes>
            <Footer />        
    </>
  )
}

export default App;
