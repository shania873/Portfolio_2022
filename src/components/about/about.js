import {React, useState} from 'react';
import Carousel from '../UI/carousel_arrows';
import logoCSS from '../../assets/img/img/icons_skills/icon_css.png';
import logoJavascript from '../../assets/img/img/icons_skills/icon_css.png';
import logoSASS from '../../assets/img/img/icons_skills/icon_css.png';
import CarouselAlice from '../UI/carousel-alice';

import './about.scss';

export default function About(props) {
    // let height = document.querySelectorAll(".set-layout")[0].offsetHeight - (document.querySelectorAll(".menu_set")[0].offsetHeight + document.querySelectorAll(".set-footer")[0].offsetHeight);
    // console.log(height)
    const itemsSkills = [
        <div className="item" data-value="1"><img src={logoCSS} alt={logoCSS} /></div>,
        <div className="item" data-value="2"><img src={logoCSS} alt={logoCSS} /></div>,
        <div className="item" data-value="3"><img src={logoCSS} alt={logoCSS} /></div>
    ];

    const itemsHobbies = [
        <div className="item" data-value="1"><img src={logoSASS} alt={logoSASS} /></div>,
        <div className="item" data-value="2"><img src={logoSASS} alt={logoSASS} /></div>,
        <div className="item" data-value="3"><img src={logoSASS} alt={logoSASS} /></div>
    ];


    const [items, setItems] = useState(itemsSkills);


    const [isHobbies, setBooleanHobbies] = useState(false);
    const [isSkills, setBooleanSkills] = useState(true);


   
      

    const choiceHobbies = () => {
        console.log("test")
        setItems(itemsHobbies)
        setBooleanHobbies(true)
        setBooleanSkills(false)
    }

    const choiceSkills = ()  =>{
        console.log("test")
        setItems(itemsSkills)
        setBooleanSkills(true);
        setBooleanHobbies(false);
    }

    console.log(items)

    return (
        <div className='set-layout'>
   
            

                <div className='layout-content'>
                    <div className='item-intro'>
                        <h1 className="text-3xl tracking-tight font-extrabold text-white-900 sm:text-4xl md:text-6xl">About</h1>  
                        <p>Passionn??e en technologie et cr??ation graphique depuis des ann??es,
                            j???ai obtenu un bachelier en infographie sp??cialit??e web ?? la Haute
                            Ecole Francisco Ferrer ?? Bruxelles.
                            Autonome, autodidacte, tr??s motiv??e et travailleuse, je cherche
                            constamment ?? am??liorer mes comp??tences gr??ce ?? mes projets
                            personnels, mes clients, mes exp??riences professionnelles et des
                            plateformes de formations telles que Dyma et Udemy.
                            ??galement tr??s sociable et curieuse, j???ai la capacit?? de m'adapter ??
                            tout type d'environnement seule ou en ??quipe. </p>
                          {/* TO DO: make in html and css ? */}
                            {/* <div className='timeline'>
                                <img src={timeline} alt='timeline' />
                            </div>   */}
                          
                    </div>
                    <div className='item-development'>
                        <h4><span className="skills-link" onClick={choiceSkills} style={{color: (isSkills === true) ? "#0dca7b" : "white"}}>Skills</span> | <span className="hobby-link" onClick={choiceHobbies}  style={{color: (isHobbies === true) ? "#0dca7b" : "white"}}>Hobbies</span></h4>
                     
                        <CarouselAlice items={items}/>
                        {/* <Carousel aboutItems={about}/> */}
                    </div>
                    
                </div>
               
         
                   
        </div>
    )
}