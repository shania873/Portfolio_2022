import React from 'react';
import TerminalFolder from '../UI/terminalFolder';
import './project.scss'

export default function Project() {
    return (
        <div  className='set-layout'>
        <div className='row'>
            <div className='layout-folder'>        
                <TerminalFolder />
            </div>

            <div className='layout-content'>
                <h1>Project</h1>  
            </div>
        </div>           
    </div>
    )
}