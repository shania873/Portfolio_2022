

import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import './App.scss';
import './index.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Index from"./components/index/index" 

import About from"./components/about/about" 
import Project from"./components/project/project" 
// import TerminalFolder from "./components/UI/terminalFolder";
import PathFolder from "./components/UI/pathFolder"
import Footer from "./components/UI/footer"
import Sidebar from './components/Sidebar';

import ItemProject from './components/item-project/item-project';

// import { play, exit } from './timelines'

// let btn = document.getElementById('root');
// btn.addEventListener('mousemove', e => {
//   let rect = e.target.getBoundingClientRect();
//   let x = e.clientX - rect.left;
//   let y = e.clientY - rect.top;
//   btn.style.setProperty('--x', x + 'px');
//   btn.style.setProperty('--y', y + 'px');
// });

function App() {  
  const location = useLocation();

  return (
    <div className="App">
 <Sidebar></Sidebar>
 {/* <SidebarMobile></SidebarMobile>   */}
 {/* <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="fade" timeout={300}> */}
                  <Routes>      
                      <Route exact path="/" element={<Index />} />
                      <Route exact path="about" element={<About/>} />
                      <Route exact path="skills" element={<Project />} />
                      <Route exact path="skills/:id" element={<ItemProject />} />


                  </Routes>
                {/* </CSSTransition>
              </TransitionGroup> */}

  </div>
  );
}

export default App;
