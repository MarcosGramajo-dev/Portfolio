import React from 'react'
import mail from '../images/mail.svg'
import github from '../images/github.svg'
import whatsapp from '../images/whatsapp.svg'
import iconCV from '../images/iconCV.svg'

export default function Contacto(){
    return(
        <div className="contacto" id="contact">
                <div>
                    <ul>
                        <li>
                            <a href="https://github.com/MarcosGramajo-dev" >
                                <div className="iconFooter">
                                <img src={github} alt="github" className="iconFooter"></img>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/543814675299" >
                                <div className="iconFooter">
                                <img src={whatsapp} alt="WP" className="iconFooter"></img>
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
                            <a href="https://drive.google.com/file/d/14LDdHAhRKZaSs4LyFjZizApiVXS3NJXQ/view?usp=sharing" >
                                <div className="iconFooter">
                                <img src={iconCV} alt="CV" className="iconFooter"></img>
                                </div>
                            </a>    
                        </li>
                    </ul>
                </div>

                <div className="footer"><span>Gracias por haber visitado mi Portfolio.</span></div>
        </div>
    )
}