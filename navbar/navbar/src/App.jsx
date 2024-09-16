import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'
import AboutPage from './AboutUs'




const App = () => {
  return (
    <>
      <Navbar/>
      <Router>
      <Routes>
        <Route path="/" element={<AboutPage/>} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
