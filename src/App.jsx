import React from 'react'
import './App.css'
import Navbar from './assets/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Signup from './pages/Signup'

import { Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/about" element={<About/>} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App
