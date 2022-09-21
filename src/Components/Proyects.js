import React from 'react'
import wave from '../images/wave.svg'
import github from '../images/github.svg'

import iconReact from '../images/react.svg'
import sass from '../images/sass.png'
import firebase from '../images/firebase.svg'
import enlace from '../images/enlace.png'



export default function Proyectos(){
    return(
        <div className="conteinerProyects" id="proyects">
            <div className="cards">
                <div className="items-1 item">
                    <div className="contenedor">
                    
                        <p>Agencia "Guillana Automotores"</p>
                        <p>Tecnologias Aplicadas:</p>
                        
                        <div className="iconsProyects">
                            <img src={iconReact} alt="mail"></img>
                            <img src={sass} alt="mail"></img>
                            <img src={firebase} alt="mail"></img>
                        </div>

                        <div className="enlacesProyects">
                            <a href="https://github.com/MarcosGramajo-dev/Agencia"><img src={github} alt="mail"></img></a>
                            <a href="google.com" target="_blank"><img src={enlace} alt="mail"></img></a>
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