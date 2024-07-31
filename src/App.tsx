import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Listings from './pages/Listings';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import PropertyDetails from './pages/PropertyDetails';


const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/listings" Component={Listings} />
        <Route path="/contact" Component={Contact} />
        <Route path="/about" Component={About} /> 
        <Route path="/imovel/:id" Component={PropertyDetails} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
