import React, { useState } from 'react';
import Header from './Header/Header.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './MenuBar/MenuBar';
import M1_A from './MenuBar/Menu_1/M1_A'; 
import Footer from './Footer/Footer.jsx';
import DashBoard_GenUser from './DashBoard/DashBoard_GenUser.jsx';
import LoginForm from './Header/LoginForm/LoginForm.jsx'; // Import LoginForm component

function App() {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

  const openLoginForm = () => {
    setIsLoginFormOpen(true);
  };

  const closeLoginForm = () => {
    setIsLoginFormOpen(false);
  };

  return (
    <>
      <Header openLoginForm={openLoginForm} />
      <Router>
        <div>
          <MenuBar />
          <Routes>
            <Route path="/m1-a" element={<M1_A />} />
          </Routes>
        </div>
      </Router>
      <DashBoard_GenUser />
      <Footer />
      {isLoginFormOpen && <LoginForm onClose={closeLoginForm} />}
    </>
  );
}

export default App;
