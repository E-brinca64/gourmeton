import { FaClock, FaDollarSign, FaHeart } from 'react-icons/fa'
import alimentos from "../assets/alimento.jpg"
function WhyChoose() {
  return (
    <div className="bg-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-gray-700 rounded-lg h-72 lg:h-80 flex items-center justify-center overflow-hidden">
              <div className="text-gray-400 text-center w-full h-full">                
                <img src={alimentos} alt="img" className='w-full h-full object-cover rounded-3xl' />
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">Por Que Escolher Nosso App?</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaClock className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Entrega Rápida</h3>
                  <p className="text-base text-gray-300 leading-relaxed">Receba seus pratos favoritos em poucos minutos, com agilidade e confiabilidade.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaDollarSign className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Preços Justos</h3>
                  <p className="text-base text-gray-300 leading-relaxed">Aproveite refeições de qualidade com valores acessíveis e promoções exclusivas.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaHeart className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Experiência Confiável</h3>
                  <p className="text-base text-gray-300 leading-relaxed">Milhares de clientes satisfeitos confiam no GourmetOn todos os dias</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChoose
