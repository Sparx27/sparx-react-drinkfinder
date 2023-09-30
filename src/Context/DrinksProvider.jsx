import axios from "axios"
import { createContext, useEffect, useState } from "react"

const DrinksContext = createContext()

const DrinksProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([])
  const [modal, setModal] = useState(false)
  const [drinkId, setDrinkId] = useState(null)
  const [recipe, setRecipe] = useState({})
  const [loading, setLoading] = useState(false)
  const [loadingTwo, setLoadingTwo] = useState(false)

  const handleDrinks = async (selectedSearch) => {
    setLoadingTwo(true)
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${selectedSearch}`
      const { data } = await axios(url)
      setDrinks(data.drinks)
    } catch (error) {
      console.log(error)
    }
    setLoadingTwo(false)
  }

  const handleModalClick = () => {
    setModal(!modal)
  }

  const handleModalRecipe = (id) => {
    setDrinkId(id)
  }

  useEffect(() => {
    setLoading(true)
    const getRecipe = async () => {
      if(!drinkId) return
      
      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
        const { data } = await axios(url)
        setRecipe(data.drinks[0])
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    getRecipe()
  }, [drinkId])

  return (
    <DrinksContext.Provider
      value={{
        drinks,
        setDrinks,
        handleDrinks,
        handleModalClick,
        modal,
        handleModalRecipe,
        recipe,
        loading,
        loadingTwo
      }}
    >
      {children}
    </DrinksContext.Provider>
  )
}

export {
  DrinksContext
}
export default DrinksProvider
