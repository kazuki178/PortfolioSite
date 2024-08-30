import './MainStyleItem/App.css';
import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/MainComponent/Header';
import TopSection from '../src/MainComponent/TopSection';
import ItemAndAboutMe from './MainComponent/ItemAndAboutMe';

const AppContent: React.FC = () => {
  // react routerのlocation(現在のurl情報)を取得
  return (
    <>
      <Routes>
        <Route path="/" element={<><TopSection /><ItemAndAboutMe /></>} />
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
  const handleAboutMeClick = () => {
    // About Meボタンがクリックされたときの処理
    console.log('About Me clicked');
  };

  // スクロールを検知してヘッダーの色を変える
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <Header onAboutMeClick={handleAboutMeClick} />
      <AppContent />
    </Router>
  );
};


