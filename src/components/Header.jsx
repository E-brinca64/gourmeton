import React from 'react'
import LogoBranco from "../assets/logoGourmetOnBranco.png"
import video from "../assets/videoAlimentos.mp4"
import Navbar from './Navbar'
function Header() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
        <Navbar className=" absolute z-50"/>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <div className='flex flex-col sm:flex-row items-center p-4'>
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-medium flex items-center mt-2 text-center sm:text-left">Bem Vindo ao </h1>
            <img src={LogoBranco} className='h-16 sm:h-20 lg:h-23 w-auto ml-0 sm:ml-3 mt-2 sm:mt-0'/>
        </div>
        <p className='text-white w-full sm:w-4/5 lg:w-1/3 text-sm sm:text-base text-center px-4 sm:px-0'>O Gourmet On é um app de delivery que conecta você aos melhores restaurantes da região. Rápido, prático e confiável, permite pedir suas comidas favoritas e acompanhar a entrega em tempo real.</p>
        <button className='text-white m-5 px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-600 rounded-3xl font-bold text-sm sm:text-base hover:from-amber-500 hover:to-amber-700 transition-all duration-300'>Baixar</button>
      </div>
    </div>
  )
}

export default Header