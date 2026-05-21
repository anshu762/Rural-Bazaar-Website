import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import EntrepreneursPage from './pages/EntrepreneursPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/entrepreneurs" element={<EntrepreneursPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
