import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import Home from "./pages/Home/Home";
import Characters from './pages/Chracters/Characters';
import Board from './pages/Board/Board';
import Story from './pages/Story/Story';

const App = () => {
  return (
    <BrowserRouter>
      <Header /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/board" element={<Board />} />
        <Route path="/story" element={<Story />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;