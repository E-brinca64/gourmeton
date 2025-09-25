import Logo from "../assets/logoGourmetOn.png"
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
function Footer() {
  return (
    <div className="bg-linear-to-r from-amber-400 to-amber-600 p-10 flex justify-around items-center">
        <div>
            <img src={Logo} alt="Logo"/>
            <ul className="flex justify-around mt-5">
                <li><a href="#"><FaInstagram size="3rem"/></a></li>
                <li><a href="#"><FaFacebookF size="3rem"/></a></li>
                <li><a href="#"><FaTwitter size="3rem"/></a></li>
                <li><a href="#"><FaWhatsapp size="3rem"/></a></li>
            </ul>
        </div>

        <div>
            <h1>Contatos</h1>
            <ul className="flex flex-col">
                <li><a href="#" className="flex items-center"><IoIosPin size="2rem"/>endereço foda fodastico</a></li>
                <li><a href="#" className="flex items-center"><FaWhatsapp size="2rem"/>+11 99999-9999</a></li>
                <li><a href="#" className="flex items-center"><MdOutlineMail size="2rem"/>gourmetOn@email.com</a></li>
            </ul>
        </div>

        <div className="flex flex-col">
            <h1>Continue Atualizado</h1>
            <input type="email" placeholder='Digite seu email' />
            <button>inscrever-se</button>
        </div>
    </div>
  )
}

export default Footer