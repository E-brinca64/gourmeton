import { useEffect, useState } from "react"

function Receitas() {
  
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/random?number=5&apiKey=a419561cd8f04bcc9316ce02d1aa3682`
        )
        const data = await response.json()
        setRecipes(data.recipes)
      } catch (error) {
        console.error("Erro ao buscar dados:", error)
      }
    }

    fetchData()
  }, [])
    return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-3xl lg:text-4xl text-center text-gray-800 mb-12">Pratos Sugeridos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          {recipes.map((r) => (
            <div key={r.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={r.image} 
                alt={r.title} 
                className="w-full h-56 lg:h-64 object-cover"
              />
              <div className="p-6">
                <p className="text-base lg:text-lg font-medium text-gray-800 line-clamp-2">{r.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Receitas