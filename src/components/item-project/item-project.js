import React from 'react';
import {useParams, NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
import imgProximus from '../../assets/img/img/img_projet1.JPG';
import './item-project.scss';

export default function ItemProject() {
    const params = useParams();
  let items = 
        [{
            "id": 0 ,
            "image": imgProximus,
            "alt": imgProximus,
            "title": "Test 0",
            "overline": "Featured Project",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "link": "liendescription",
            "techList": [
                "<span>Angular</span>", "<span>React</span>", "<span>Visual Studio</span>"
            ]

        },
        {
            "id": 1 ,
            "image": imgProximus,
            "alt": imgProximus,
            "title": "Test 1",
            "overline": "Featured Project",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "link": "liendescription",
            "techList": [
                "<span>Angular</span>", "<span>React</span>", "<span>Visual Studio</span>"
            ]

        },
        {
            "id": 2 ,
            "image": imgProximus,
            "alt": imgProximus,
            "title": "Test 2",
            "overline": "Featured Project",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "link": "liendescription",
            "techList": [
                "<span>Angular</span>", "<span>React</span>", "<span>Visual Studio</span>"
            ]

        }]  

    return (
        <div  className='set-layout'>         
         

            <div className='set-portfolio-details'>
  
                {items.map((project) =>
                    <>
                        {params && project && project.id.toString() === params.id && (
                                <div className='projet-content'>
                                              <NavLink exact="true" className="btn-back" to="/">
                                                    <FontAwesomeIcon icon={faArrowLeft} color="#0dca7b" /> <span>Retour</span>
                                                </NavLink>
                                    <p className="project-overline">{project.overline}</p>
                                    <h1 className="text-1xl tracking-tight font-extrabold text-white-900 sm:text-4xl md:text-4xl">
                                        {project.title}
                                    </h1>
                                    <div className="project-description">
                                            <p dangerouslySetInnerHTML={{__html: project.description}}></p>
                                    </div>   
                                    <div className='projet-image'>             
                                            <img src={project.image} alt={project.image} />
                                        </div>                           
                                </div>                                                                
                        )}    
                    </>                                    
                )}
            </div>
        </div>
    )
}