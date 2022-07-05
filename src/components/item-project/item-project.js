import React from 'react';
import TerminalFolder from '../UI/terminalFolder';
// import './project.scss';
import Portfolio from '../UI/portfolio';
import {Route, Link, Routes, useParams} from 'react-router-dom';

export default function ItemProject() {

    const params = useParams();

  console.log(params); // 👉️ {userId: '4200'}


    return (
        <div  className='set-layout'>
            {/* <div className='title'>
                <h1>Some Things I've Build</h1>
            </div> */}
      
            <h1> test</h1>
          
           
        </div>
    )
}