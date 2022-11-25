import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import { Navbar } from './components/estaticos/navbar/Navbar';
import { About } from './paginas/about/About';
import { Home } from './paginas/home/Home';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
