// src/App.jsx
import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import HomePage from './components/HomePage/HomePage';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Sidebar />
        <HomePage />
      </div>
    </div>
  );
};

export default App;
