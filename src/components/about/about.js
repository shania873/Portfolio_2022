import React from 'react';
import Carousel from '../UI/carousel_arrows';
import logoCSS from '../../assets/img/icon_css.png';
import logoJavascript from '../../assets/img/icon_javascript.png';
import logoSASS from '../../assets/img/icon_sass.png';

import timeline from '../../assets/img/timeline.png';

import './about.scss';

export default function About(props) {
    // let height = document.querySelectorAll(".set-layout")[0].offsetHeight - (document.querySelectorAll(".menu_set")[0].offsetHeight + document.querySelectorAll(".set-footer")[0].offsetHeight);
    // console.log(height)
    let about = 
    [{
        "id": 0 ,
        "image": logoCSS,
        "alt": logoCSS
    },
    {
        "id": 1 ,
        "image": logoJavascript,
        "alt": logoJavascript
    },
    {
        "id": 2 ,
        "image": logoSASS,
        "alt": logoSASS
    }]  
      
    return (
        <div className='set-layout'>
            <div className='row'>
            

                <div className='layout-content'>
                    <div className='item-intro'>
                        <h1>About</h1>  
                        <p>Passionnée en technologie et création graphique depuis des années,
                            j’ai obtenu un bachelier en infographie spécialitée web à la Haute
                            Ecole Francisco Ferrer à Bruxelles.
                            Autonome, autodidacte, très motivée et travailleuse, je cherche
                            constamment à améliorer mes compétences grâce à mes projets
                            personnels, mes clients, mes expériences professionnelles et des
                            plateformes de formations telles que Dyma et Udemy.
                            Également très sociable et curieuse, j’ai la capacité de m'adapter à
                            tout type d'environnement seule ou en équipe. </p>
                            <div className='timeline'>
                                <img src={timeline} alt='timeline' />
                            </div>  
                          
                    </div>
                    <div className='item-development'>
                        <h4><span className="skills-link">Skills</span> | <span className="hobby-link">Hobbies</span></h4>
                     
                        <Carousel aboutItems={about}/>
                        {/* <Carousel aboutItems={about}/> */}
                    </div>
                    
                </div>
               
            </div>
                   
        </div>
    )
}