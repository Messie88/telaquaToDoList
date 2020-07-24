import React from 'react';
import logo from './logo.svg';

import Header from "./components/header/header";
import HeroSection from "./components/hero/hero";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
    </div>
  );
}

export default App;
