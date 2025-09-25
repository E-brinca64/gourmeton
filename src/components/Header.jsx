import React from 'react'
import video from "../assets/videoAlimentos.mp4"
import LogoBranco from "../assets/logoGourmetOnBranco.png"
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

      <div className="relative z-10 flex flex-col items-center justify-center h-full ">
        <div className='flex flex-row p-4'>
            <h1 className="text-white text-5xl font-medium flex items-center mt-2">Bem Vindo ao </h1>
            <img src={LogoBranco} className='h-23 w-auto ml-3 '/>
        </div>
        <p className='text-white w-1/3 text-base '>O Gourmet On é um app de delivery que conecta você aos melhores restaurantes da região. Rápido, prático e confiável, permite pedir suas comidas favoritas e acompanhar a entrega em tempo real.</p>
        <button className='text-white m-5 px-5 py-2 bg-linear-to-r from-amber-400 to-amber-600 rounded-3xl font-bold'>Baixar</button>
      </div>
    </div>
  )
}

export default Header