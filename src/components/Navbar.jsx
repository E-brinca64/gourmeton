
import { useState } from 'react'
import Logo from "../assets/logoGourmetOnBranco.png"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="flex items-center justify-between p-3 m-2 sm:m-4 fixed top-0 left-0 w-full z-50 bg-transparent text-white">
        <img src={Logo} alt="Logo" className="h-8 sm:h-10 w-auto" />

        <button 
          className="sm:hidden text-white text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <ul className="hidden sm:flex text-lg lg:text-2xl">
            <li className="m-2 lg:m-3.5 hover:text-amber-400 transition-colors cursor-pointer">apresentação</li>
            <li className="m-2 lg:m-3.5 hover:text-amber-400 transition-colors cursor-pointer">funcionalidades</li>
            <li className="m-2 lg:m-3.5 hover:text-amber-400 transition-colors cursor-pointer">depoimentos</li>
            <li className="m-2 lg:m-3.5 hover:text-amber-400 transition-colors cursor-pointer">contato</li>
        </ul>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-sm sm:hidden">
            <ul className="flex flex-col text-lg py-4">
                <li className="px-4 py-2 hover:bg-amber-400/20 transition-colors cursor-pointer">apresentação</li>
                <li className="px-4 py-2 hover:bg-amber-400/20 transition-colors cursor-pointer">funcionalidades</li>
                <li className="px-4 py-2 hover:bg-amber-400/20 transition-colors cursor-pointer">depoimentos</li>
                <li className="px-4 py-2 hover:bg-amber-400/20 transition-colors cursor-pointer">contato</li>
            </ul>
          </div>
        )}
    </nav>
  )
}

export default Navbar