import {React, useEffect, useState} from 'react';
import './portfolio.scss';
// import items from '../../datas/portfolio_professionalProjects.json';
// import imgProximus from '../../assets/img/img_projet1.JPG';
// import logoJavascript from '../../assets/img/icon_javascript.png';
// import logoSASS from '../../assets/img/icon_sass.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
// import {
//     faArrowRight
// } from '@fortawesome/free-solid-svg-icons';
// import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import faunadb from 'faunadb';
var q = faunadb.query;
export default function Portfolio() {

   

    // const [items, setItems] = useState(itemsSkills);
    const [isProffesional, setBooleanProffesional] = useState(false);
    const [isPersonal, setBooleanPersonal] = useState(true);


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

    const exportDatas = async (event, context) => {
        const client = new faunadb.Client({
            secret: 'fnAEs-rxVeACTLCChk-0UdIDgMR3xkTzgE4UiUY6'
        }) 
    
        try {  
            // Getting the refs with a first query
            let refs = await client.query(q.Paginate(q.Match(q.Index("work_pro"))))
            // Forging a second query with the retrieved refs
            const bigQuery = refs.data.map((ref) => q.Get(ref))
            // Sending over that second query
            let allDocuments = await client.query(bigQuery)
            // All my documents are here!
            console.log('@allDocuments: ', allDocuments);
            //...
        } catch (err) {
            console.log(q)
        }
        }

  
    useEffect(() => {
        
        exportDatas();
    }, [])
  
  
   
    return (
    <div className='set-portfolio'>
        <div className='list-link'>
            {/* <h1 className="text-3xl tracking-tight font-extrabold text-white-900 sm:text-4xl md:text-6xl">Projets</h1>
            <div>
                <Link activeClass="active" className="link-portfolio" onClick={choicePersonnal}>Projet personel</Link>
                <Link activeClass="active" className="link-portfolio" onClick={choiceProffesional}>Projet professionel</Link>
            </div>

            <div className='gallery'>
                {isProffesional === true && (
                        items.map((project, idx) =>
                            <div className='projet-image'>            
                                <a href={window.location.origin + "/skills/" + project.id} >
                                    <img src={project.image} alt={project.image} />
                                </a>                                       
                            </div>
                        )
                )} 
                {isPersonal === true && (
                        items.map((project, idx) =>
                            <div className='projet-image'>            
                                <a href={window.location.origin + "/skills/" + project.id} >
                                    <img src={project.image} alt={project.image} />
                                </a>                                       
                            </div>
                        )
                )}              
            </div> */}
        </div>

    </div>     
   
      );
};