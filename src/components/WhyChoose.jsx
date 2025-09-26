import { FaClock, FaDollarSign, FaHeart } from 'react-icons/fa'

function WhyChoose() {
  return (
    <div className="bg-gray-800 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-gray-700 rounded-lg h-80 flex items-center justify-center">
              <div className="text-gray-400 text-center">
                <div className="w-24 h-24 bg-gray-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <p className="text-sm">Placeholder de Imagem/Vídeo</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Por Que Escolher Nosso App?</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaClock className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Economize Tempo</h3>
                  <p className="text-gray-300">Nosso app automatiza tarefas repetitivas, devolvendo tempo valioso para focar no que mais importa.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaDollarSign className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Reduza Custos</h3>
                  <p className="text-gray-300">Otimizando seu fluxo de trabalho, nosso app ajuda você a reduzir gastos desnecessários e maximizar recursos.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaHeart className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Melhore o Bem-Estar</h3>
                  <p className="text-gray-300">Menos estresse, mais organização. Nosso app ajuda a criar equilíbrio na sua rotina diária.</p>
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
