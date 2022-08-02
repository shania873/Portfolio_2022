import {React, useEffect, useState} from 'react';
import './portfolio.scss';
import imgProximus from '../../assets/img/img/img_projet1.JPG';
export default function Portfolio() {

    let personalItems = [];

    let professionalItems = 
    [{
        "id": 0 ,
        "image": imgProximus,
        "alt": imgProximus,
        "title": "Halcyon Theme1",
        "overline": "Featured Project",
        "description": "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on <a href='https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode' target='_blank' rel='noopener noreferrer'>Visual Studio Marketplace</a>, <a href='https://packagecontrol.io/packages/Halcyon%20Theme' target='_blank' rel='noopener noreferrer'>Package Control</a>, <a href='https://atom.io/themes/halcyon-syntax' target='_blank' rel='noopener noreferrer'>Atom Package Manager</a>, and <a href='https://www.npmjs.com/package/hyper-halcyon-theme' target='_blank' rel='noopener noreferrer'>npm</a>.",
        "link": "liendescription",
        "techList": [
            "<span>Angular</span>", "<span>React</span>", "<span>Visual Studio</span>"
        ]

    },
    {
        "id": 1 ,
        "image": imgProximus,
        "alt": imgProximus,
        "title": "Halcyon Theme2",
        "overline": "Featured Project",
        "description": "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on <a href='https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode' target='_blank' rel='noopener noreferrer'>Visual Studio Marketplace</a>, <a href='https://packagecontrol.io/packages/Halcyon%20Theme' target='_blank' rel='noopener noreferrer'>Package Control</a>, <a href='https://atom.io/themes/halcyon-syntax' target='_blank' rel='noopener noreferrer'>Atom Package Manager</a>, and <a href='https://www.npmjs.com/package/hyper-halcyon-theme' target='_blank' rel='noopener noreferrer'>npm</a>.",
        "link": "liendescription",
        "techList": [
            "<span>Angular</span>", "<span>React</span>", "<span>Visual Studio</span>"
        ]

    },
    {
        "id": 2 ,
        "image": imgProximus,
        "alt": imgProximus,
        "title": "Halcyon Theme3",
        "overline": "Featured Project",
        "description": "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on <a href='https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode' target='_blank' rel='noopener noreferrer'>Visual Studio Marketplace</a>, <a href='https://packagecontrol.io/packages/Halcyon%20Theme' target='_blank' rel='noopener noreferrer'>Package Control</a>, <a href='https://atom.io/themes/halcyon-syntax' target='_blank' rel='noopener noreferrer'>Atom Package Manager</a>, and <a href='https://www.npmjs.com/package/hyper-halcyon-theme' target='_blank' rel='noopener noreferrer'>npm</a>.",
        "link": "liendescription",
        "techList": [
            "<span>Angular</span>", "<span>React</span>", "<span>Visual Studio</span>"
        ]

    }]
   

    // const [items, setItems] = useState(itemsSkills);
    const [isProffesional, setBooleanProffesional] = useState(true);
    const [isPersonal, setBooleanPersonal] = useState(false);


    const choiceProffesional = () => {
        console.log("isProffesional")
        // setItems(isProffesional)
        setBooleanProffesional(true)
        setBooleanPersonal(false)
    }

    const choicePersonnal = ()  =>{
        console.log("isPersonal")
        // setItems(isPersonal)
        setBooleanPersonal(true);
        setBooleanProffesional(false);
    }

  
  
    useEffect(() => {
        // setBooleanProffesional(true)
        choicePersonnal();
        choiceProffesional();

    }, [])
  
  
   
    return (
    <div className='set-portfolio'>
        <div className='list-link'>
            <h1 className="text-3xl tracking-tight font-extrabold text-white-900 sm:text-4xl md:text-6xl">Projets</h1>
            <div>
                <a className="link-portfolio" onClick={choiceProffesional} style={{color: (isProffesional === true) ? "#0dca7b" : "white"}}>Projet professionel</a>
                <a className="link-portfolio" onClick={choicePersonnal} style={{color: (isPersonal === true) ? "#0dca7b" : "white"}}>Projet personel</a>
            </div>

            <div className='gallery'>
                {isProffesional === true && (
                        professionalItems.map((project, idx) =>
                            <div className='projet-image'>            
                                <a href={window.location.origin + "/skills/" + project.id} className="link-itemPortfolio">
                                    <div className='content-short'>
                                        <span>{project.title}</span>
                                    </div>
                                    <img src={project.image} alt={project.image} />
                                </a>                                       
                            </div>
                        )
                )} 
                {isPersonal === true && personalItems.length > 0 &&(
                        professionalItems.map((project, idx) =>
                            <div className='projet-image'>            
                                <a href={window.location.origin + "/skills/" + project.id} >
                                    <img src={project.image} alt={project.image} />
                                </a>                                       
                            </div>
                        )
                )} 
                {/* console.log(personalItems) */}
                {isPersonal === true && personalItems.length === 0 && (
                        // professionalItems.map((project, idx) =>
                            <div className='projet-image'>        
                                <a>
                                    Nouveaux projets bientôt !   
                                </a>                             
                            </div>
                        // )
                )}              
            </div>
        </div>

    </div>     
   
      );
};