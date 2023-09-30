import { useContext } from "react"
import { DrinksContext } from "../Context/DrinksProvider"

const useDrinks = () => {

  return useContext(DrinksContext)
}

export default useDrinks
