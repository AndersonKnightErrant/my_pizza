import React from 'react';

import { Header } from './components';
import { Home, Cart } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </div>

    </div>
  );
}

export default App;
