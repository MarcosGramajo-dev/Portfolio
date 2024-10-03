import React, {useEffect} from 'react'
import ReactGA from 'react-ga4';
import avatar from '../images/Ellipse 4.png'
import iconPerson from '../images/icons/person.svg'
import iconCV from '../images/icons/clinical_notes.svg'
import iconGithub from '../images/icons/github.svg'
import iconFlat from '../images/icons/flat.svg'
import iconReact from '../images/react.svg'
import iconTypescript from '../images/typescript.png'
import iconTailwind from '../images/tailwind.png'
import iconMongo from '../images/mongodb.png'
import iconNodejs from '../images/nodejs.png'
import iconThreejs from '../images/threejs.png'

import proyect_1 from '../images/proyect-2.png'
import proyect_2 from '../images/ghtucuman.jpg'
import proyect_3 from '../images/proyect-4.png'
import proyect_4 from '../images/cg.jpg'

import {
    Card,
    CardBody,
    CardFooter,
    Button,
    Typography 
    //CardHeader
  } from "@material-tailwind/react";

  const links = ["Thanks for your visit."];

export default function Home(){

    useEffect(() => {
        // Inserta el script de Google Tag Manager dinámicamente
        const script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-5EM9R8ZHZR';
        script.async = true;
        document.head.appendChild(script);

        // Configura gtag
        window.dataLayer = window.dataLayer || [];
        function gtag() {
        window.dataLayer.push(arguments);
        }

        gtag('js', new Date());
        gtag('config', 'G-5EM9R8ZHZR');
      }, []);

    return(
        <div className='flex flex-col justify-center items-center'>
            <header className='fixed z-50 top-5 bg-light-blue-1 w-full h-14 flex justify-center items-center'>
                <div className='w-full bg-white top-[-23px] blur-md h-8 absolute'></div>
                <div className='w-full mx-4 md:max-w-md lg:max-w-lg clear-start flex justify-between items-center'>
                    <p className='text-lg'>GRAMAJO MARCOS</p>
                    <img  src={iconFlat} alt='icon' className='mx-2 relative top-3'></img>
                </div>
            </header>
            <div className='md:max-w-md lg:max-w-lg mx-4s mt-28 px-4'>
                <section>
                    <div className='flex items-center'>
                        <img src={avatar} alt='avatar' className='rounded-full w-20 h-20 mx-2'></img>
                        <div>
                            <h1 className='text-2xl'>GRAMAJO MARCOS</h1>
                            <h2 className='text-md'>DEVELOPER FRONT END</h2>
                        </div>
                    </div>
                </section>
                <section>
                    <Button color='transparent' variant="outlined" className='w-full border-spacing-1 hidden border-light-blue-1 my-3 shadow-md'>
                        <div className='flex items-center'>
                            <img src={iconPerson} alt='icon' className='mx-2'></img>
                            <p> My Info </p>
                        </div>
                    </Button>
                    <Button onClick={() => window.open('https://drive.google.com/file/d/1e0eghj9Q67sNqZsfH8BlW9GiNgLIAq25/view?usp=sharing')} color='transparent' variant="outlined" className='w-full border-spacing-1 border-light-blue-1 my-3 shadow-md'>
                        <div className='flex items-center'>
                            <img src={iconCV} alt='icon' className='mx-2'></img>
                            <p> CV </p>
                        </div>
                    </Button>
                    <Button onClick={() => window.open('https://github.com/MarcosGramajo-dev/')} color='transparent' variant="outlined" className='w-full border-spacing-1 border-light-blue-1 my-3 shadow-md'>
                        <div className='flex items-center'>
                            <img src={iconGithub} alt='icon' className='mx-2'></img>
                            <p> GitHub </p>
                        </div>
                    </Button>
                </section>
            </div>
                <section className='flex justify-center items-center flex-wrap gap-5 w-1/2 h-[400]'>
                    <h3 className='w-full text-center my-3 text-2xl'>Proyects</h3>
                    <Card className="mt-6 max-w-md min-w-80">
                        <CardBody className='pb-0'>
                        <img alt='proyect' src={proyect_1} />
                            <h4 className='py-2'><b>My first landing</b> with react and small implementes</h4>
                        </CardBody>
                        <CardFooter className='w-full flex justify-evenly items-center p-4 gap-4'>
                        <div className='flex justify-center items-center gap-2 px-6'>
                                <img alt='icon' className='w-8 h-8 ' src={iconReact} />
                                <img alt='icon' className='w-8 h-8 ' src={iconTailwind} />
                            </div>
                            
                            <div className='w-full flex justify-end items-center mt-2 pr-4'>
                                <Button onClick={ () => window.open('https://github.com/MarcosGramajo-dev/PaginaRadiadores', '_blank')} variant="text" className="flex items-center gap-2 p-2">
                                    GITHUB{" "}
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-5 w-5"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                    </svg>
                                </Button>

                                <Button onClick={ () => window.open('https://radiadoresgm.com.ar/', '_blank')} variant="text" className="flex items-center gap-2 p-2">
                                    WEB{" "}
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-5 w-5"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                    </svg>
                                </Button>
                            </div>
                        </CardFooter>

                    </Card>

                    <Card className="mt-6 max-w-md min-w-80">
                        <CardBody className='pb-0'>
                            <img alt='proyect' src={proyect_3} />
                            <h4 className='py-2'><b>Online Catalogy</b> Create, edit and update products on the web </h4>
                        </CardBody>
                        <CardFooter className='w-full flex justify-evenly items-center p-4 gap-4'>
                            <div className='flex justify-center items-center gap-2 px-6'>
                                <img alt='icon' className='w-8 h-8 ' src={iconTypescript} />
                                <img alt='icon' className='w-8 h-8 ' src={iconMongo} />
                                <img alt='icon' className='w-8 h-8 ' src={iconNodejs} />
                            </div>
                            
                            <div className='w-full flex justify-end items-center mt-2 pr-4'>
                                <Button  onClick={() => window.open('https://github.com/MarcosGramajo-dev/FrontEcommers', '_blank')} variant="text" className="flex items-center gap-2 p-2">
                                    GITHUB{" "}
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-5 w-5"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                    </svg>
                                </Button>

                                <Button onClick={ () => window.open('https://ecommersagency.netlify.app/', '_blank')} variant="text" className="flex items-center gap-2 p-2">
                                    WEB{" "}
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-5 w-5"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                    </svg>
                                </Button>
                            </div>

                        </CardFooter>

                    </Card>

                    <Card className="mt-6 max-w-md min-w-80">
                        <CardBody className='pb-0'>
                        <img alt='proyect' src={proyect_2} />
                            <h4 className='py-2'><b>A votation system</b> mercadopago API integration for payment</h4>
                        </CardBody>
                        <CardFooter className='w-full flex justify-evenly items-center p-4 gap-4'>
                        <div className='flex justify-center items-center gap-2 px-6'>
                                <img alt='icon' className='w-8 h-8 ' src={iconReact} />
                                <img alt='icon' className='w-8 h-8 ' src={iconMongo} />
                                <img alt='icon' className='w-8 h-8 ' src={iconNodejs} />
                            </div>
                            
                            <div className='w-full flex justify-end items-center mt-2 pr-4'>
                                <Button  onClick={() => window.open('https://github.com/MarcosGramajo-dev/ghTucuman', '_blank')} variant="text" className="flex items-center gap-2 p-2">
                                    GITHUB{" "}
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-5 w-5"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                    </svg>
                                </Button>

                                <Button onClick={ () => window.open('https://ghtucuman.com.ar/', '_blank')} variant="text" className="flex items-center gap-2 p-2">
                                    WEB{" "}
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-5 w-5"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                    </svg>
                                </Button>
                            </div>

                        </CardFooter>

                    </Card>

                    <Card className="mt-6 max-w-md min-w-80">
                        <CardBody className='pb-0'>
                        <img alt='proyect' src={proyect_4} />
                            <h4 className='py-2'><b>Model 3d online</b> with ThreeJs</h4>
                        </CardBody>
                        <CardFooter className='w-full flex justify-evenly items-center p-4 gap-4'>
                            <div className='flex justify-center items-center gap-2 px-6'>
                                <img alt='icon' className='w-8 h-8 ' src={iconReact} />
                                <img alt='icon' className='w-8 h-8' src={iconThreejs} />
                            </div>
                            
                            <div className='w-full flex justify-end items-center mt-2 pr-4'>
                                <Button  onClick={() => window.open('https://github.com/MarcosGramajo-dev/Threejs', '_blank')} variant="text" className="flex items-center gap-2 p-2">
                                    GITHUB{" "}
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-5 w-5"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                    </svg>
                                </Button>

                                <Button onClick={ () => window.open('https://cinthyagramajo.netlify.app/', '_blank')} variant="text" className="flex items-center gap-2 p-2">
                                    WEB{" "}
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-5 w-5"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                    </svg>
                                </Button>
                            </div>

                        </CardFooter>

                    </Card>

                </section>

            <footer className="px-8 py-28">
                <div className="container mx-auto flex flex-col items-center">
                    <div className="flex flex-wrap items-center justify-center gap-8 pb-8">
                    {links.map((link, index) => (
                        <ul key={index}>
                        <li>
                            <Typography
                            as="a"
                            href="#"
                            color="white"
                            className="font-medium !text-gray-500 transition-colors hover:!text-gray-900"
                            >
                            {link}
                            </Typography>
                        </li>
                        </ul>
                    ))}
                    </div>
                    <Typography
                    color="blue-gray"
                    className="mt-6 !text-sm !font-normal text-gray-500"
                    >
                    Marcos Gramajo Developer
                    </Typography>
                </div>
            </footer>
        </div>
    )
}