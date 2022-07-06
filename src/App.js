

import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from "react-router-dom";
import './App.scss';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Index from"./components/index/index" 

import About from"./components/about/about" 
import Project from"./components/project/project" 
// import TerminalFolder from "./components/UI/terminalFolder";
import PathFolder from "./components/UI/pathFolder"
import Footer from "./components/UI/footer"
import Sidebar from './components/Sidebar';
import { PageTransition } from '@steveeeie/react-page-transition';
import ItemProject from './components/item-project/item-project';





function App() {  
  const location = useLocation();

  return (
    <div className="App">
    
 
 <Sidebar></Sidebar>
 {/* <SidebarMobile></SidebarMobile>   */}

      <PageTransition   
        transitionKey={location.pathname}
        preset="carouselToTop"
        enterOverride="moveToTopFade"
        exitOverride="scaleUp"
        // enterAnimation="moveToTopFade"
      >
      <Routes>      
          <Route exact path="/" element={<Index />}  />
          <Route exact path="about" element={<About/>} />
          <Route exact path="skills" element={<Project />} />
          <Route exact path="skills/:id" element={<ItemProject />} />
      </Routes>
      </PageTransition>
 

  </div>
  );
}

export default App;
