import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EntrepreneursPage from './pages/EntrepreneursPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const App = () => {
  const location = useLocation();
  const isAbout = location.pathname === '/about';

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className={`flex-grow ${isAbout ? '' : 'container mx-auto px-6 py-8'}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/entrepreneurs" element={<EntrepreneursPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
