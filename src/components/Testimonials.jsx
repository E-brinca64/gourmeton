import { FaStar } from 'react-icons/fa'

function Testimonials() {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Food Blogger",
      content: "O GourmetOn revolucionou minha experiência com delivery. A interface é intuitiva e os pedidos chegam sempre no prazo. Recomendo para todos!",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Empresário",
      content: "Como trabalho muito, preciso de praticidade. O app me permite pedir comida rapidamente e acompanhar a entrega em tempo real. Excelente!",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Estudante",
      content: "Os preços são justos e a variedade de restaurantes é incrível. Nunca mais fiquei sem opções para pedir comida. Adorei!",
      rating: 5
    }
  ]

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">O Que Nossos Usuários Dizem</h2>
          <p className="text-lg text-gray-600">Feedback real de pessoas que usam nosso app todos os dias</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-amber-400 text-lg" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              <div className="border-t pt-4">
                <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
