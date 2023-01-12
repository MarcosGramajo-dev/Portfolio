import React from 'react'
import wave from '../images/wave.svg'
import github from '../images/github.svg'

import iconReact from '../images/react.svg'
import sass from '../images/sass.png'
import enlace from '../images/enlace.png'
import nodejs from '../images/Nodejs.png'
import mongodb from '../images/mongodb.png'



export default function Proyectos(){
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
                            <a href="https://github.com/MarcosGramajo-dev/Coffe-Shop" target="_blank" rel="noreferrer"><img src={github} alt="github"></img></a>
                            <a href="https://coffe-shop-production-ceab.up.railway.app/" target="_blank" rel="noreferrer"><img src={enlace} alt="mail"></img></a>
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
                            <a href="https://github.com/MarcosGramajo-dev/PaginaRadiadores"><img src={github} alt="mail"></img></a>
                            <a href="https://radiadores.netlify.app/"><img src={enlace} alt="mail"></img></a>
                        </div>

                        <img className="wave" src={wave} alt="wave"></img>
                    </div>
                </div>
                <div className="items-3 item">
                    <div className="contenedor">
                    
                        <p>Portfolio</p>
                        <p>Tecnologias Aplicadas:</p>
                        
                        <div className="iconsProyects">
                            <img src={iconReact} alt="mail"></img>
                            <img src={sass} alt="mail"></img>
                        </div>

                        <div className="enlacesProyects">
                            <a href="google.com" target="_blank"><img src={github} alt="mail"></img></a>
                            <a href="google.com" target="_blank"><img src={enlace} alt="mail"></img></a>
                        </div>

                        <img className="wave" src={wave} alt="wave"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}