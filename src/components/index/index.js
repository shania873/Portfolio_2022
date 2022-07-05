import React from 'react';
import './index.scss';
import meLogo from '../../assets/img/mee_vector.png';
import TerminalSet from './terminal';

export default function Index() {
    return (
        <>
            <div className='layout-index'>
                <div className='container-index'>
                    <div className='infos-index'>
                        <h3>Hello !, my name is</h3>
                        <h1>Caroline van Aerschot</h1>
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