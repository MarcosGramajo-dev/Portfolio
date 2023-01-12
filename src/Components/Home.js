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
                        ¡Hola!, Gracias por visitar mi Porfolio, te cuento algo de mi, soy estudiante de Desarrollo y calidad de Software Me considero una persona responsable y ordenado. Buscando mi primera experiencia laboral. 
                        </p>
                    </div>
                </div>

                <Proyects/>
                <Contacto/>


            </div>


        )
}