import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
