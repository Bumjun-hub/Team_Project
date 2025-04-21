import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Member from './pages/Member';

function App() {
  return (

    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/member" element={<Member/>}/>
      <Route path="/" element={
        <div className="App">
          <Header />
          <Section />
        </div>
      } />
    </Routes>

  );
}

export default App;
