// eslint-disable-next-line no-unused-vars
import React from 'react'
import img from '../images/img';

export const Portafolio = () => {
  return (
      
      <div className='flex flex-col items-center p-2'>

        <div className="w-[85%] mt-8 bg-[#C1C1C1] text-center p-8 rounded-lg">
          <img className='mx-auto' src={img.calculadora}/>
          <h4 className='font-bold text-3xl mt-2'>Calculator-App</h4>
          <p className='text-xl mt-2'>HTML CSS TAILWIND JAVASCRIPT REACT</p>
        </div>

        <div className="w-[85%] mt-8 bg-[#C1C1C1] text-center p-8 rounded-lg">
          <img className='mx-auto' src={img.cuevana}/>
          <h4 className='font-bold text-3xl mt-2'>Cuevana CRUD</h4>
          <p className='text-xl mt-2'>HTML CSS TAILWIND JAVASCRIPT REACT</p>
        </div>

        <div className="w-[85%] mt-8 bg-[#C1C1C1] text-center p-8 rounded-lg">
          <img className='mx-auto' src={img.back}/>
          <h4 className='font-bold text-3xl mt-2'>NodeJs Server CRUD</h4>
          <p className='text-xl mt-2'>NODE-JS EXPRESS-JS MONGODB MONGOOSE</p>
        </div>
      

        <div className="w-[85%] mt-8 bg-[#C1C1C1] text-center p-8 rounded-lg">
          <img className='mx-auto' src={img.hangmanGame}/>
          <h4 className='font-bold text-3xl mt-2'>Hangman Game</h4>
          <p className='text-xl mt-2'>HTML CSS TAILWIND JAVASCRIPT REACT</p>
        </div>

        <div className="w-[85%] mt-8 bg-[#C1C1C1] text-center p-8 rounded-lg">
          <img className='mx-auto' src={img.api}/>
          <h4 className='font-bold text-3xl mt-2'>Api Rest Countries</h4>
          <p className='text-xl mt-2'>HTML CSS TAILWIND JAVASCRIPT REACT</p>
        </div>

    </div>
    
    
  )
}
