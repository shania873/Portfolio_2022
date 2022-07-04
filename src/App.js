

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.scss';

import Index from"./components/index/index" 

import About from"./components/about/about" 
import Project from"./components/project/project" 
// import TerminalFolder from "./components/UI/terminalFolder";
import PathFolder from "./components/UI/pathFolder"
import Footer from "./components/UI/footer"
import Sidebar from './components/Sidebar';


function App() {  
  return (
    <div className="App">
    <Router>
 
 <Sidebar></Sidebar>
    {/* <div className="menu_set">
        <ul>
            <li><Link to="/"
                      // style={(activeNav) => activate(activeNav.isActive, '/')}
                      >Home</Link></li>
            <li><Link to="about" 
                      // style={(activeNav) => activate(activeNav.isActive, 'about')}
                      >About</Link></li>
            <li><Link to="project" 
                      // style={(activeNav) => activate(activeNav.isActive, 'project')}
                      >Project</Link></li>  
        </ul>          
        {/* <PathFolder/> 
    </div> */}
         
      <Routes>      
          <Route exact path="/" element={<Index />} />
          <Route exact path="about" element={<About/>} />
          <Route exact path="skills" element={<Project />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  </div>
  );
}

export default App;
