import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import Navbar from './components/Navbar';
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeScreen />}></Route>
        <Route path='/details/:platform/:id' element={<Details />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
