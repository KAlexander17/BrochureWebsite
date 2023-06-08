import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Menu from './components/pages/Menu';
import About from './components/pages/About';
import SignIn from './components/pages/SignIn';
import { Register } from './components/pages/Register';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/sign-up' element={<SignIn/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
