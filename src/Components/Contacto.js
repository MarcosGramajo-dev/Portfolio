import React from 'react'
import mail from '../images/mail.svg'
import github from '../images/github.svg'
import location from '../images/location.svg'
import whatsapp from '../images/whatsapp.svg'

export default function Contacto(){
    return(
        <div className="contacto" id="contact">
                <div>
                    <ul>
                        <li>
                            <a href="https://github.com/MarcosGramajo-dev" >
                                <div className="iconFooter">
                                <img src={github} alt="mail" className="iconFooter"></img>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/543814675299" >
                                <div className="iconFooter">
                                <img src={whatsapp} alt="mail" className="iconFooter"></img>
                                </div>
                            </a>    
                        </li>
                        <li>
                            <a href="mailto:marcosgramajo96@gmail.com" >
                                <div className="iconFooter">
                                <img src={mail} alt="mail" className="iconFooter"></img>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://goo.gl/maps/6v1NLWZm427MtCqf9" >
                                <div className="iconFooter">
                                <img src={location} alt="mail" className="iconFooter"></img>
                                </div>
                            </a>    
                        </li>
                    </ul>
                </div>

                <div className="footer"><span>Gracias por haber visitado mi Portfolio.</span></div>
        </div>
    )
}