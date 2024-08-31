import Header from './Header/Header.jsx'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './MenuBar/MenuBar';
import M1_A from './MenuBar/Menu_1/M1_A'; 
import Footer from './Footer/Footer.jsx';
function App() {
  return (
    <>
      <Header></Header>
      <Router>
      <div>
        <MenuBar />
        <Routes>
        <Route path="/m1-a" element={<M1_A />} />
        </Routes>
      </div>
    </Router>
    <Footer></Footer>
    </>
  );
}

export default App;
