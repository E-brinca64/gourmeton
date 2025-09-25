
import Logo from "../assets/logoGourmetOnBranco.png"
function Navbar() {
  return (
    <nav className="flex items-center justify-between p-3 m-4 fixed top-0 left-0 w-full z-50 bg-transparent text-white">
        <img src={Logo} alt="Logo" />

        <ul className="flex text-2xl ">
            <li className="m-3.5">apresentação</li>
            <li className="m-3.5">funcionalidades</li>
            <li className="m-3.5">depoimentos</li>
            <li className="m-3.5">contato</li>
        </ul>
    </nav>
  )
}

export default Navbar