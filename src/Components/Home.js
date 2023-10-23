import React, {useState} from 'react'

import Proyects from './Proyects'
import Contacto from './Contacto'

export default function Home(){

    const [modeDark, setmodeDark] = useState(true)
    const [active, setActive] = useState('home desactive')

    function activeModeDark(){
        setmodeDark(!modeDark)
        if(modeDark){
            setActive('home active')
        } else{
            setActive('home desactive')
        }

        console.log(active)
    }

        return(
            <div className={active}>
                <div className="navConteiner">
                    <nav>
                        <ul>
                            <li>
                                <a className="firtsChild" href="#home">HOME</a>
                            </li>
                            <li>
                                <a href="#proyects">PROYECTS</a>
                            </li>
                            <li>
                                <a href="#contact">CONTACT</a>
                            </li>
                            <li className="switchModeNocturne">
                                <input type="checkbox" onClick={() => activeModeDark()}></input>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="conteinerHome" id="home">
                    <div className="conteinerTittle">
                        <h1>GRAMAJO MARCOS</h1>
                        <span>DESARROLLADOR FRONT-END</span>
                    </div>

                    <div className="conteinerText">
                        <p>
                        With nearly a year of full-stack development experience, I specialize in the MERN stack with TypeScript and also have strong Python skills, particularly with Odoo. I take pride in my collaborative work on the 'Petcheck' university project, where I contributed as a developer, DevOps, and Scrum Master. My adaptable work style includes both independent and team-based projects. Currently pursuing a Software Development and Quality Assurance degree at UNSTA, I'm motivated by continuous learning and embracing new challenges.
                        </p>
                    </div>
                </div>

                <Proyects/>
                <Contacto/>


            </div>


        )
}