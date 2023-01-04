import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Create from './components/Create';
import ChooseGame from './components/ChooseGame';
import Cart from './components/Cart';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='create' element={<Create />} />
        <Route path='choose' element={<ChooseGame />} />
        <Route path='admin' element={<AdminPanel />} />
        <Route path='/choose/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
