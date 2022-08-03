
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TweenMax, TimelineMax, Power2, Power3 } from 'gsap/all';
import './index.scss';
import meLogo from '../../assets/img/img/mee_vector.png';
import TerminalSet from './terminal';




function Box({ children }) {
    return <div className="box">{children}</div>;
  }
  
  function Container({ children }) {
    return <div><Box>Nested Box</Box></div>;
  }


export default function Index() {
    const boxRef = useRef();
    
    useEffect(() => {     
        gsap.from(boxRef.current, 1, {
          opacity: 0,
          y: 30,
          stagger: 0.25,
          ease:Power3.easeInOut
        });
    }, []);

    return (
        <>
            <div className='layout-index'>
                <div className='container-index'>
                    <div className='infos-index origin-top-right' ref={boxRef}>          
                    {/* <h1>
                        <span>reveal</span>
                    </h1>        */}
                        <h3>
                            <span>Hello !, my name is</span>
                        </h3>                      
                        <h1 className="text-4xl tracking-tight text-white-900 sm:text-4xl md:text-6xl" >
                            <span>Caroline</span> 
                            <span id="lastName" className="lastName text-4xl tracking-tight font-extrabold text-white-900 sm:text-4xl md:text-6xl">van Aerschot</span>
                        </h1>
                   
                        <h3>
                            <span>Front-end developper & UI/UX designer</span>
                        </h3>
              
                    </div>
                    <div className='img-index' ref={boxRef}>
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