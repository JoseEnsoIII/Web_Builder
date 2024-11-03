// Import React and Router components
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/assets/Components/Header/Navbar';
import SBanner from '../src/assets//Components/Banner/Service_Banner'; 
import ANavbar from '../src/assets//Components/Header/Appointment'; 
import Service from '../src/assets//Components/Section/Service'; 
import Services from '../src/assets//Components/Section/Services'; 
import Contact from '../src/assets//Components/Section/ContactUs'; 
import Footer from '../src/assets//Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <SBanner />
              <ANavbar />
              <Service />
              <Services />
              <Contact />
              <Footer />
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
