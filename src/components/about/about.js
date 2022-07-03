import React from 'react';
import TerminalFolder from '../UI/terminalFolder';
import './about.scss'

export default function About() {
    return (
        <div  className='set-layout'>
            <div className='row'>
                <div className='layout-folder'>        
                    <TerminalFolder />
                </div>

                <div className='layout-content'>
                    <div className='item-intro'>
                        <h1>About</h1>  
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                    </div>
                    <div className='item-development'>
                       <p>Development</p>
                    </div>
                </div>
            </div>           
        </div>
    )
}