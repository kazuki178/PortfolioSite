import './MainStyleItem/App.css';
import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from '../src/MainComponent/Header';
import TopSection from '../src/MainComponent/TopSection';
import ItemAndTopics from '../src/MainComponent/ItemAndTopics';
import AboutMe from '../src/HeaderItemComponent/AboutMe';

const AppContent: React.FC = () => {
  // react routerのlocation(現在のurl情報)を取得
  const location = useLocation();

  return (
    <>
    {/* pathが/ or /aboutのみTopSectionのコンポーネントを表示 */}
      {(location.pathname === '/' || location.pathname === '/about') && <TopSection />}
      <Routes>
        {/* backend作成の旨をItemlistと共に返したい 他のコンポーネントを作成して、そこからitemlistとnewsコンポーネント(例)を返す */}
        <Route path="/" element={<ItemAndTopics />} />
        <Route path="/about" element={<AboutMe />} />
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


