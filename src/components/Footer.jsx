import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import Logo from "../assets/logoGourmetOn.png";
function Footer() {
  return (
    <div className="bg-gradient-to-r from-amber-400 to-amber-600 py-12 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <img src={Logo} alt="Logo" className="h-16 lg:h-20 w-auto mb-4"/>
                    <ul className="flex justify-center lg:justify-start gap-4">
                        <li><a href="#" className="hover:scale-110 transition-transform"><FaInstagram className="w-10 h-10"/></a></li>
                        <li><a href="#" className="hover:scale-110 transition-transform"><FaFacebookF className="w-10 h-10"/></a></li>
                        <li><a href="#" className="hover:scale-110 transition-transform"><FaTwitter className="w-10 h-10"/></a></li>
                        <li><a href="#" className="hover:scale-110 transition-transform"><FaWhatsapp className="w-10 h-10"/></a></li>
                    </ul>
                </div>

                <div className="text-center lg:text-left">
                    <h1 className="text-2xl lg:text-3xl font-bold mb-6">Contatos</h1>
                    <ul className="flex flex-col gap-4">
                        <li><a href="#" className="flex items-center justify-center lg:justify-start gap-3 hover:text-amber-100 transition-colors text-base"><IoIosPin className="w-6 h-6 flex-shrink-0"/>Endereço foda fodastico</a></li>
                        <li><a href="#" className="flex items-center justify-center lg:justify-start gap-3 hover:text-amber-100 transition-colors text-base"><FaWhatsapp className="w-6 h-6 flex-shrink-0"/>+11 99999-9999</a></li>
                        <li><a href="#" className="flex items-center justify-center lg:justify-start gap-3 hover:text-amber-100 transition-colors text-base"><MdOutlineMail className="w-6 h-6 flex-shrink-0"/>gourmetOn@email.com</a></li>
                    </ul>
                </div>

                <div className="flex flex-col items-center lg:items-start w-full lg:col-span-1">
                    <h1 className="text-2xl lg:text-3xl font-bold mb-6 text-center lg:text-left">Continue Atualizado</h1>
                    <div className="w-full max-w-sm">
                        <input 
                            type="email" 
                            placeholder='Digite seu email' 
                            className="w-full p-4 bg-white rounded-lg text-base mb-3"
                        />
                        <button className="w-full p-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-base font-medium">inscrever-se</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer