import React from 'react';
import { Counter } from './features/counter/Counter';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Home from './screen/home/home';
import Detail from './screen/detail/detial'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
