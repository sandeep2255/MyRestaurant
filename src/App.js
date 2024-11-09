import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './widgets/Navbar';
import HomeDashboard from './home/Home';



function App() {
  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      const navbarHeight = navbar.offsetHeight;
      console.log(`Navbar height is: ${navbarHeight}px`);
      
      const content = document.querySelector('.home-dashboard');
      if (content) {
        content.style.height = `calc(100vh - ${navbarHeight}px)`;
        content.style.overflow = 'hidden'; 
      }
    }
  }, []);
  return (
    <Router>
      <div className='App'>
        <Navbar/>
        <Routes>
        <Route path="/dashboard" element={<HomeDashboard />} />
        </Routes>    
      </div>
    </Router>
    
  );
}

export default App;
