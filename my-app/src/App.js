import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Navbar';
import Contact from './Contact';
import Home from './Home';
import { ThemeProvider } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';


function App() {

  return ( 
    <ThemeProvider
      breakpoints={['sm', 'md', 'lg', 'xl']} // Customize breakpoints
    >
    <div className="App grid-container">
      <NavBar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>    
    </div>
    </ThemeProvider>
  );
}

export default App;
