import { FaBolt, FaFilter, FaUtensils } from 'react-icons/fa'

function Features() {
  const features = [
    {
      icon: FaUtensils,
      title: "Buscas por tipos de comida",
      description: "O usuário encontra rapidamente pratos ou culinárias específicas digitando palavras-chave. Isso torna a navegação prática e direcionada, sem perda de tempo."
    },
    {
      icon: FaFilter,
      title: "Filtros avançados",
      description: "Com filtros de preço, tempo de entrega, avaliações e restrições alimentares, o cliente consegue personalizar a busca e escolher de forma mais assertiva."
    },
    {
      icon: FaBolt,
      title: "Recomendações inteligentes",
      description: "Um sistema sugere pratos com base em pedidos anteriores e preferências, ajudando o usuário a descobrir novidades sem esforço."
    }
  ]

  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Principais Funcionalidades</h2>
          <p className="text-base lg:text-lg text-gray-600">Descubra o que torna nosso app único no mercado</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 lg:p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="text-white text-xl lg:text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Features
