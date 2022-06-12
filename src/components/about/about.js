import React from 'react';
import TerminalFolder from '../UI/terminalFolder';

export default function About() {
    return (
        <div  className='set-layout'>
            <div className='row'>
                <div className='layout-folder'>        
                    <TerminalFolder />
                </div>

                <div className='layout-folder'>
                    <h1>About</h1>  
                </div>
            </div>           
        </div>
    )
}