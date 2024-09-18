import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Navbar';
import PersonalStoryGrid from './StoryFolder/PersonalStoryGrid';
import CertificationGrid from './CertificationGrid'
import Skills from './Skills';
import Contact from './Contact';
// import Emblem from './Emblem';

function App() {
  return (
    
    <div className="App">
      <NavBar/>
    <PersonalStoryGrid/>
    {/* <Emblem/> */}
    <CertificationGrid/>
    <Skills/>
    <Contact/>
    </div>
  );
}

export default App;
