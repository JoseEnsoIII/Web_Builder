// Import React and Router components
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SBanner from './assets/Components/Banner/Service_Banner'; 
import ANavbar from './assets/Components/Header/Appointment'; 
import Service from './assets/Components/Section/Service'; 
import Services from './assets/Components/Section/Services'; 
import Contact from './assets/Components/Section/ContactUs'; 
import Footer from './assets/Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <SBanner />
              <ANavbar />
              <Service />
              <Services />
              <Contact />
              <Footer />
            </>
          } />
          {/* Add more routes here if needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
