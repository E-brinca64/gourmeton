import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import Logo from "../assets/logoGourmetOn.png";
function Footer() {
  return (
    <div className="bg-gradient-to-r from-amber-400 to-amber-600 p-4 sm:p-6 lg:p-10">
        <div className="flex flex-col lg:flex-row justify-around items-center gap-8 lg:gap-4">
            <div className="flex flex-col items-center lg:items-start">
                <img src={Logo} alt="Logo" className="h-12 sm:h-16 lg:h-20 w-auto"/>
                <ul className="flex justify-center lg:justify-start gap-4 mt-4">
                    <li><a href="#" className="hover:scale-110 transition-transform"><FaInstagram size="2rem" className="sm:w-12 sm:h-12"/></a></li>
                    <li><a href="#" className="hover:scale-110 transition-transform"><FaFacebookF size="2rem" className="sm:w-12 sm:h-12"/></a></li>
                    <li><a href="#" className="hover:scale-110 transition-transform"><FaTwitter size="2rem" className="sm:w-12 sm:h-12"/></a></li>
                    <li><a href="#" className="hover:scale-110 transition-transform"><FaWhatsapp size="2rem" className="sm:w-12 sm:h-12"/></a></li>
                </ul>
            </div>

            <div className="text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Contatos</h1>
                <ul className="flex flex-col gap-2">
                    <li><a href="#" className="flex items-center justify-center lg:justify-start gap-2 hover:text-amber-100 transition-colors"><IoIosPin size="1.5rem" className="sm:w-8 sm:h-8"/>Endereço foda fodastico</a></li>
                    <li><a href="#" className="flex items-center justify-center lg:justify-start gap-2 hover:text-amber-100 transition-colors"><FaWhatsapp size="1.5rem" className="sm:w-8 sm:h-8"/>+11 99999-9999</a></li>
                    <li><a href="#" className="flex items-center justify-center lg:justify-start gap-2 hover:text-amber-100 transition-colors"><MdOutlineMail size="1.5rem" className="sm:w-8 sm:h-8"/>gourmetOn@email.com</a></li>
                </ul>
            </div>

            <div className="flex flex-col items-center lg:items-start w-full max-w-sm">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left">Continue Atualizado</h1>
                <input 
                    type="email" 
                    placeholder='Digite seu email' 
                    className="w-full p-3 sm:p-4 bg-white rounded-lg text-sm sm:text-base"
                />
                <button className="w-full sm:w-1/2 lg:w-1/3 p-2 sm:p-3 mt-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm sm:text-base">inscrever-se</button>
            </div>
        </div>
    </div>
  )
}

export default Footer