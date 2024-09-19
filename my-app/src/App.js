import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Navbar';
import Contact from './Contact';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
// import Emblem from './Emblem';

function App() {
  return ( 
    <div className="App">
      <NavBar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>    
    </div>
  );
}

export default App;
