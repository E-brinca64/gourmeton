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
    <div className="">
      <h1 className="font-bold text-4xl flex items-center justify-center">Pratos Sugeridos</h1>
      <ul className="flex items-center justify-center">
        {recipes.map((r) => (
          <li key={r.id}>
            <img src={r.image} alt={r.title} width={340} className="rounded-2xl m-10"/>
            <p className="text-4 my-10 w-50">{r.title}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Receitas