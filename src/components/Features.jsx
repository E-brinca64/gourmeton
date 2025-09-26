import { FaBolt } from 'react-icons/fa'
import { FaFilter } from "react-icons/fa6";
import { GiTacos } from "react-icons/gi";

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
              <GiTacos className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Buscas por tipos de comida</h3>
            <p className="text-gray-600">O usuário encontra rapidamente pratos ou culinárias específicas digitando palavras-chave. Isso torna a navegação prática e direcionada, sem perda de tempo.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaFilter className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Filtros avançados</h3>
            <p className="text-gray-600">Com filtros de preço, tempo de entrega, avaliações e restrições alimentares, o cliente consegue personalizar a busca e escolher de forma mais assertiva.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaBolt className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Recomendações inteligentes</h3>
            <p className="text-gray-600">Um sistema sugere pratos com base em pedidos anteriores e preferências, ajudando o usuário a descobrir novidades sem esforço.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
