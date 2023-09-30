import { Button, Card, Col } from "react-bootstrap"
import useDrinks from "../hooks/useDrinks"

const Drinks = ({ drink }) => {
  const { strDrink, strDrinkThumb } = drink
  const { handleModalClick, handleModalRecipe } = useDrinks()

  return (
    <Col md={6} lg={3}>
      <Card className="mb-4">
        <Card.Img
          variant="top"
          src={strDrinkThumb}
          alt={`${strDrink} img`}
        />
        
        <Card.Body>
          <Card.Title>{strDrink}</Card.Title>

          <Button
            className="w-100 text-uppercase mt-2" 
            variant="warning"
            onClick={() => {
              handleModalClick()
              handleModalRecipe(drink.idDrink)
            }}
          >Check Recipe</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Drinks
