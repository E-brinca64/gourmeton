import { useEffect, useState } from "react"

import Features from "./components/Features"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Testimonials from "./components/Testimonials"
import WhyChoose from "./components/WhyChoose"
import Receitas from "./components/Receitas"

function App() {

  return (  
    <>
     <Header/>
     <Features/>
     <WhyChoose/>
     <Testimonials/>
     <Receitas/>
     <Footer/>
    </>
  )
}

export default App
