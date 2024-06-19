// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../App.css';
import { NavLink } from "react-router-dom"

export const Inicio = () => {
  return (
    <div className='mt-2 sm:w-5/6 py-8 px-10 sm:px-20'>
      <h2 className='text-2xl sm:text-4xl text-justify font-semibold sm:leading-10 mx-auto'>Hola, soy <span className='text-[#0000FF]'>Eudys Mora</span>, soy Ingeniero de Sistemas y Desarrollador Web, y ofrezco mis servicios de <span className='text-[#0000FF]'>programación y desarrollo</span> en todo tipo de proyectos Web.</h2>
      <div className='flex justify-start items-center mt-12'>
        <h6 className='font-normal text-base sm:text-lg mr-3'>Te ayudo a crear tu sitio o aplicación web.</h6>
        <button className='bg-[#0000FF] text-white text-md sm:text-base w-40 h-8 rounded'>
          <NavLink to="/contacto">Contacta conmigo</NavLink>
        </button>
      </div>
    </div>
  )
}
