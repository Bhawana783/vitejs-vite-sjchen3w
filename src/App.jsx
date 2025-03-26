// src/App.jsx

import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'; // Import global styles
import AddBook from "./AddBook";


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-book" element={<AddBook />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
