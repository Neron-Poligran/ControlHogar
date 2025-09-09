import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Login from './pages/Login';
import Admin from './pages/Admin';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/*" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/servicios" element={<Services />} />
                  <Route path="/servicio/:id" element={<ServiceDetail />} />
                </Routes>
              </main>
              <Footer />
            </motion.div>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;