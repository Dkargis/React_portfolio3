import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Footer from './components/footer';
import Contact from './pages/contact';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;