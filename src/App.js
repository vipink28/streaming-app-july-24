import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import Navbar from './components/Navbar';
import Details from './pages/Details';
import Browse from './pages/Browse';
import BrowseByGenre from './pages/BrowseByGenre';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeScreen />}></Route>
        <Route path='/details/:platform/:id' element={<Details />}></Route>
        <Route path='/browse/:platform' element={<Browse />}></Route>
        <Route path='/browsebygenre/:platform/:genreid' element={<BrowseByGenre />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
