import React, { lazy, Suspense } from 'react';

import Header from "./components/header/header";
//import HeroSection from "./components/hero/hero";

import './App.css';

const HeroSection = lazy(() => import('./components/hero/hero'));
function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: '100px',
        height: '100px'
      }}>Loading...</div>}>
        <HeroSection />
      </Suspense>
    </div>
  );
}

export default App;
