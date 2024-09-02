import './MainStyleItem/App.css';
import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/MainComponent/Header';
import TopSection from '../src/MainComponent/TopSection';
import ItemAndAboutMe from './MainComponent/ItemAndAboutMe';
import Product from '../src/HeaderComponent/Product/Product';

const AppContent: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<><TopSection /><ItemAndAboutMe /></>} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
};

const handleScroll = (): void => {
  const header = document.querySelector('.header-section');
  if (window.scrollY > 50) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
};

export const App: React.FC = () => {


  // スクロールを検知してヘッダーの色を変える
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <Header />
      <AppContent />
    </Router>
  );
};


