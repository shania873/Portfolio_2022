import React from 'react';
import './index.scss';
import meLogo from '../../assets/img/mee_vector.png';
import TerminalSet from './terminal';
export default function Index() {
    console.log("index")
    return (
        <>
            <div className='layout-index'>
                <div className='container-index'>
                    <div className='infos-index origin-top-right'>
                        <h3>Hello !, my name is</h3>
                        <h1 className="text-4xl tracking-tight text-white-900 sm:text-4xl md:text-6xl">Caroline <span className="text-4xl tracking-tight font-extrabold text-white-900 sm:text-4xl md:text-6xl">van Aerschot</span></h1>
                   
                        <h3>Front-end developper & UI/UX designer</h3>
              
                    </div>
                    <div className='img-index'>
                        <img src={meLogo} alt="logo" />
                    </div>
                </div>         
            </div>    
            {/* <div className='terminal-index'>
                <TerminalSet />
            </div>  */}
        </>
          
    )
}