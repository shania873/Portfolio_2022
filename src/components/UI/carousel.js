import {React, useRef} from 'react';
import { Rerousel } from 'rerousel';




export default function Carousel() {
    
    const customerLogo = useRef(null);
    let isStopped = false;

    let customers = 
    [{
        "id": "0" ,
        "image": "https://unsplash.com/photos/jjhvyxm34nY",
        "alt": "https://unsplash.com/photos/jjhvyxm34nY"
    },
    {
        "id": "1" ,
        "image": "https://unsplash.com/photos/jjhvyxm34nY",
        "alt": "https://unsplash.com/photos/jjhvyxm34nY"
    },
    {
        "id": "2" ,
        "image": "https://unsplash.com/photos/jjhvyxm34nY",
        "alt": "https://unsplash.com/photos/jjhvyxm34nY"
    }]   

    function handleClick(e, isStopped) {
        e.preventDefault();
        console.log('Le lien a été cliqué.');
        return true;
    }




    return (
        <div>            
            <Rerousel itemRef={customerLogo} interval={3000} stop={handleClick}>
                {customers.map((c) => {
                    return <img key={c.id} src={c.image} alt={c.alt} ref={customerLogo} />;
                })}
            </Rerousel>
            <button onClick={e => handleClick(e, isStopped)}>Stop</button>
        </div>
    );
};