import { FaBolt, FaClock, FaShieldAlt } from 'react-icons/fa'

function Features() {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Principais Funcionalidades</h2>
          <p className="text-lg text-gray-600">Descubra o que torna nosso app único no mercado</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaBolt className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Super Rápido</h3>
            <p className="text-gray-600">Nosso app é otimizado para velocidade, garantindo que você faça tudo rapidamente sem travamentos ou atrasos.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaShieldAlt className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Seguro e Privado</h3>
            <p className="text-gray-600">Seus dados são criptografados e protegidos. Priorizamos sua privacidade com medidas de segurança de ponta.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaClock className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Suporte 24/7</h3>
            <p className="text-gray-600">Nossa equipe de suporte dedicada está sempre disponível para ajudá-lo com qualquer dúvida ou problema que você possa ter.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
