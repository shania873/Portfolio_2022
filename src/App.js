

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

import ItemProject from './components/item-project/item-project';


function App() {  
  return (
    <div className="App">
    <Router>
 
 <Sidebar></Sidebar>
 {/* <SidebarMobile></SidebarMobile>   */}
         
      <Routes>      
          <Route exact path="/" element={<Index />} />
          <Route exact path="about" element={<About/>} />
          <Route exact path="skills" element={<Project />} />
          <Route exact path="skills/:id" element={<ItemProject />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  </div>
  );
}

export default App;
