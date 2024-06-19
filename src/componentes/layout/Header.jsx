// eslint-disable-next-line no-unused-vars
import React from 'react'
import { NavLink } from 'react-router-dom';
import img from '../../images/img';

export const Header = () => {
  return (
    <div className='p-16 bg-white h-48 mt-4 w-screen flex flex-col sm:flex-row sm:justify-around items-center sm:basis-1/3 border-b-2 border-black'>
      <div className='w-80 flex h-8 sm:h-20 justify-center sm:justify-start items-center font-serif'>
        <img src={img.EudysPerfil} className='w-36 rounded h-24 object-fill mr-3'/>
        <h1 className='text-xl sm:text-2xl font-bold'> <span>Eudys</span><br /><span>Mora</span> </h1>
      </div>
      
      <ul className='flex mt-12 px-3 sm:basis-2/3 justify-around items-center'>
        <li className='mr-4 text-lg font-medium sm:text-2xl hover:text-[#0000FF]'>
          <NavLink to="/inicio">Inicio</NavLink>
        </li>
        <li className='mr-4 text-lg font-medium sm:text-2xl hover:text-[#0000FF]'>
        <NavLink to="/portafolio">Portafolio</NavLink>
        </li>
        <li className='mr-4 text-lg font-medium sm:text-2xl hover:text-[#0000FF]'>
        <NavLink to="/curriculum">Curriculum</NavLink>
        </li>
        <li className='mr-4 text-lg font-medium sm:text-2xl hover:text-[#0000FF]'>
        <NavLink to="/contacto">Contacto</NavLink>
        </li>
      </ul>
    </div>
  )
}
