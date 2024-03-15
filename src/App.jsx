import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Nosotros from './Components/Nosotros/Nosotros';
import Travesias from './Components/Travesias/Travesias';
import Tour from './Components/Tour/Tour';
import Guarderia from './Components/Guarderia/Guarderia';
import Galeria from './Components/Galeria/Galeria';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import './App.css'

function App() {


  return (

    <BrowserRouter>
      <ScrollToTop/>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Nosotros" element={<Nosotros/>}/>
        <Route path="/Travesias" element={<Travesias/>}/>
        <Route path="/Tour" element={<Tour/>}/>
        <Route path="/Guarderia" element={<Guarderia/>}/>
        <Route path="/Galeria" element={<Galeria/>}/>
        
      </Routes>
      <Footer/>
    </BrowserRouter>
   



  )
}

export default App
