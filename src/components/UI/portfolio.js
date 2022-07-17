import {React, useEffect} from 'react';
import './portfolio.scss';
import imgProximus from '../../assets/img/img_projet1.JPG';
import logoJavascript from '../../assets/img/icon_javascript.png';
import logoSASS from '../../assets/img/icon_sass.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
    faArrowRight
} from '@fortawesome/free-solid-svg-icons';

export default function Portfolio() {

    let items = 
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

  
    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
              e.preventDefault();
              console.log("test")
              document.querySelector(this.getAttribute('href')).scrollIntoView({
                  behavior: 'smooth'
              });
          });
      });
      
      }, [])
  
  

    return (
    <div className='set-portfolio'>
      <div className='list-link'>
        <h1>Projets</h1>
    {items.map((project) =>
        <a href={"#selector-" + project.id}>
            {project.title}
        </a>
    )}
    </div>  
    {items.map((project, idx) =>

            <div className='set-mainPortfolio' key={idx}>
            
                    <div className="item-portfolio" id={"selector-" + project.id}>

                                <div className='projet-image'>                 
                                    <img src={project.image} alt={project.image} />
                                </div>

                            
                                <div className='projet-content'>
                                    <p className="project-overline">{project.overline}</p>
                                    <h3 className="project-title">
                                        {project.title}
                                    </h3>
                                    <div className="project-description">
                                            <p dangerouslySetInnerHTML={{__html: project.description}}></p>
                                    </div>          

                                    <div className='footer-projetContent footer-mobile'>
                                    <div className='tools-set'>
                                    <p dangerouslySetInnerHTML={{__html: project.techList}}></p>
                                        
                                                        
                                    </div>
                                    <div className='btn-learnMore'><a href={window.location.origin + "/skills/" + project.id} >Learn More      <FontAwesomeIcon icon={faArrowRight} color="white" /></a></div>

                                    </div>                    
                                </div>  
                    </div>       
            </div>
      
        )}
    </div>     
   
      );
};