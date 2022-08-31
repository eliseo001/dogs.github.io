import React from 'react';
// import { Info } from './Info';
import  "./Info.css";

import { Link } from "react-router-dom";


// const variants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 },
// }

export default function Info() {
    return (
     


       <div className='jose'>
           <div>
            <Link to="/home"><button className="xx" >home</button></Link>
            </div>
             <div className='about'>
                 <h1 className='infoH1'>Dogs-API</h1>
                <p className='infoP'>Este proyecto se creó como parte de mi formación como desarrollador fullstack  . Para mapear todas las diferentes razas, esta aplicación consume datos de la <a className='linkDescription' href='https://thedogapi.com/' target='_blank' rel='noopener noreferrer'>Api Dogs</a>. También es posible crear una nueva raza de perro, ingresando un nombre, peso, altura, años de vida y temperamentos..</p>
                <p className='infoP'>pueden visitarme en:</p>            </div>
                <h1 className='infoH1'></h1>
                <div className='contenedor-git-link'>
                    <a href="https://github.com/eliseo001"target='_blank' rel='noopener noreferrer'><button className='github'></button></a>
                     <a href="https://www.linkedin.com/in/eliseo-masuelli-7a1823209"target='_blank' rel='noopener noreferrer'><button className='linkending'></button></a>
                </div>
                <div className='titel-skills'>
                 <h1 className='infoH1'>Use en este proyecto:</h1>
            </div>
            {/* <div className='item' id="item7">
            
                     
                 </div> */}


             <div className='contenedor' >
                
                
                 <div id='item' >
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="" />
                     <h2>Javascript</h2>
                 </div>
                 <div id='item'>                     
                     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="" />
                     <h2>HTML</h2>
                 </div>
                 <div id='item'>
                     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="" />
                     <h2>CSS</h2>
                 </div>
                 <div id='item'>
                     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="" />
                     <h2>React</h2>
                 </div>
                 <div id='item'>
                     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="" />
                     <h2>Redux</h2>
                 </div>
                 <div id='item'>
                     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="" />
                     <h2>Express</h2>
                 </div>
                 <div id='item'>
                     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="" />
                     <h2>PostgreSQL</h2>
                 </div>
                 
                  
            </div>
         </div>
        
    )
}