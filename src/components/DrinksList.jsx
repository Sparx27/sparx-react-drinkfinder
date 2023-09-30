import { Row } from "react-bootstrap"
import useDrinks from "../hooks/useDrinks"
import Drinks from "./Drinks"
import Spinner from "./Spinner"

const DrinksList = () => {
  const { drinks, loadingTwo } = useDrinks()

  return (
      loadingTwo ? <Spinner /> : (
        <Row className="mt-5">
          {
            drinks ? (
              drinks.map(drink => (
                <Drinks 
                  key={drink.idDrink}
                  drink={drink}
                />
              ))
            ) : (
              <div>
                <h2>Drinks not found</h2>
                <p>Check that you have entered only one ingredient and that it is spelled correctly or selected a category</p>
              </div>
            )
          }
        </Row>
      )
  )
}

export default DrinksList
