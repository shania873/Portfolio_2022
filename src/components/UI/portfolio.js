import React from 'react';
import './portfolio.scss';
import imgProximus from '../../assets/img/img_projet1.JPG';
import logoJavascript from '../../assets/img/icon_javascript.png';
import logoSASS from '../../assets/img/icon_sass.png';


export default function Portfolio() {

    let items = 
    [{
        "id": 0 ,
        "image": imgProximus,
        "alt": imgProximus
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

        <div className='set-portfolio'>
         <div className="item-portfolio">
                <div className='projet-image'>
                    <h2>Some Things I've Build</h2>
                    <img src={imgProximus} alt={imgProximus} />
                </div>

                <div className='projet-content'>
                    <div>
                        <p className="project-overline">Featured Project</p>
                        <h3 className="project-title">
                            <a href="https://halcyon-theme.netlify.com/" rel="noopener noreferrer" target="_blank">Halcyon Theme</a>
                        </h3>
                        <div className="project-description">
                                <p>
                                    A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on <a href="https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode" target="_blank" rel="noopener noreferrer">Visual Studio Marketplace</a>, <a href="https://packagecontrol.io/packages/Halcyon%20Theme" target="_blank" rel="noopener noreferrer">Package Control</a>, <a href="https://atom.io/themes/halcyon-syntax" target="_blank" rel="noopener noreferrer">Atom Package Manager</a>, and <a href="https://www.npmjs.com/package/hyper-halcyon-theme" target="_blank" rel="noopener noreferrer">npm</a>.
                                </p>
                        </div>
                        <ul className="project-tech-list">
                            <li>VS Code</li>
                            <li>Sublime Text</li>
                            <li>Atom</li>
                            <li>iTerm2</li>
                            <li>Hyper</li>
                        </ul>       
                    </div>        
                </div>
            </div>

            <div className="item-portfolio">
                    

            <div className='projet-image'>
                <h2>Some Things I've Build</h2>
                <img src={imgProximus} alt={imgProximus} />
            </div>

            <div className='projet-content'>
                <div>
                    <p className="project-overline">Featured Project</p>
                    <h3 className="project-title">
                        <a href="https://halcyon-theme.netlify.com/" rel="noopener noreferrer" target="_blank">Halcyon Theme</a>
                    </h3>
                    <div className="project-description">
                            <p>
                                A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on <a href="https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode" target="_blank" rel="noopener noreferrer">Visual Studio Marketplace</a>, <a href="https://packagecontrol.io/packages/Halcyon%20Theme" target="_blank" rel="noopener noreferrer">Package Control</a>, <a href="https://atom.io/themes/halcyon-syntax" target="_blank" rel="noopener noreferrer">Atom Package Manager</a>, and <a href="https://www.npmjs.com/package/hyper-halcyon-theme" target="_blank" rel="noopener noreferrer">npm</a>.
                            </p>
                    </div>
                    <ul className="project-tech-list">
                        <li>VS Code</li>
                        <li>Sublime Text</li>
                        <li>Atom</li>
                        <li>iTerm2</li>
                        <li>Hyper</li>
                    </ul>       
                </div>        
            </div>
            </div>
            <div className="item-portfolio">
                    

            <div className='projet-image'>
                <h2>Some Things I've Build</h2>
                <img src={imgProximus} alt={imgProximus} />
            </div>

            <div className='projet-content'>
                <div>
                    <p className="project-overline">Featured Project</p>
                    <h3 className="project-title">
                        <a href="https://halcyon-theme.netlify.com/" rel="noopener noreferrer" target="_blank">Halcyon Theme</a>
                    </h3>
                    <div className="project-description">
                            <p>
                                A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on <a href="https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode" target="_blank" rel="noopener noreferrer">Visual Studio Marketplace</a>, <a href="https://packagecontrol.io/packages/Halcyon%20Theme" target="_blank" rel="noopener noreferrer">Package Control</a>, <a href="https://atom.io/themes/halcyon-syntax" target="_blank" rel="noopener noreferrer">Atom Package Manager</a>, and <a href="https://www.npmjs.com/package/hyper-halcyon-theme" target="_blank" rel="noopener noreferrer">npm</a>.
                            </p>
                    </div>
                    <ul className="project-tech-list">
                        <li>VS Code</li>
                        <li>Sublime Text</li>
                        <li>Atom</li>
                        <li>iTerm2</li>
                        <li>Hyper</li>
                    </ul>       
                </div>        
            </div>
            </div>
        
        </div>

      
   
      );
};