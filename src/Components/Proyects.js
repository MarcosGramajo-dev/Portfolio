import React from 'react'
import wave from '../images/wave.svg'
import github from '../images/github.svg'

import iconReact from '../images/react.svg'
import sass from '../images/sass.png'
import enlace from '../images/enlace.png'
import nodejs from '../images/Nodejs.png'
import mongodb from '../images/mongodb.png'
import tailwind from '../images/tailwind.png'
import typescript from '../images/typescript.png'




export default function Proyectos(){
    const infoProyects = {
        proyect1 : {
            github: "https://github.com/MarcosGramajo-dev/Coffe-Shop",
            link:"https://coffe-shop-production-ceab.up.railway.app/"
        },
        proyect2 : {
            github: "https://github.com/MarcosGramajo-dev/PaginaRadiadores",
            link:"https://radiadores.netlify.app/"
        },
        proyect3 : {
            github: "https://github.com/MarcosGramajo-dev/PetCheck",
            link:"https://petcheck.com.ar/"
        }
    }
    return(
        <div className="conteinerProyects" id="proyects">
            <div className="cards">
                <div className="items-1 item">
                    <div className="contenedor">
                    
                        <p>"Coffe Shop"</p>
                        <p>Tecnologias Aplicadas:</p>
                        
                        <div className="iconsProyects">
                            <img src={nodejs} alt="mail"></img>
                            <img src={mongodb} alt="mail"></img>
                        </div>

                        <div className="enlacesProyects">
                            <a href={infoProyects.proyect1.github} target="_blank" rel="noopener noreferrer" ><img src={github} alt="github"></img></a>
                            <a href={infoProyects.proyect1.link} target="_blank" rel="noopener noreferrer"><img src={enlace} alt="mail"></img></a>
                        </div>

                        <img className="wave" src={wave} alt="wave"></img>
                    </div>
                </div>
                <div className="items-2 item">
                    <div className="contenedor">
                    
                        <p>"Radiadores Gramajo Moreira"</p>
                        <p>Tecnologias Aplicadas:</p>
                        
                        <div className="iconsProyects">
                            <img src={iconReact} alt="mail"></img>
                            <img src={sass} alt="mail"></img>
                        </div>

                        <div className="enlacesProyects">
                            <a href={infoProyects.proyect2.github} target="_blank" rel="noopener noreferrer"><img src={github} alt="mail"></img></a>
                            <a href={infoProyects.proyect2.link} target="_blank" rel="noopener noreferrer"><img src={enlace} alt="mail"></img></a>
                        </div>

                        <img className="wave" src={wave} alt="wave"></img>
                    </div>
                </div>
                <div className="items-3 item">
                    <div className="contenedor">
                    
                        <p>Petcheck(in process...)</p>
                        <p>Tecnologias Aplicadas:</p>
                        
                        <div className="iconsProyects">
                            <img src={tailwind} alt="mail"></img>
                            <img src={typescript} alt="mail"></img>
                            <img src={nodejs} alt="mail"></img>
                            <img src={mongodb} alt="mail"></img>
                        </div>

                        <div className="enlacesProyects">
                            <a href={infoProyects.proyect3.github} target="_blank" rel="noopener noreferrer"><img src={github} alt="mail"></img></a>
                            <a href={infoProyects.proyect1.link} target="_blank" rel="noopener noreferrer"><img src={enlace} alt="mail"></img></a>
                        </div>

                        <img className="wave" src={wave} alt="wave"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}