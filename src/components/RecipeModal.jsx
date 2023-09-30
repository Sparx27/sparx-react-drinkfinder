import { Modal, Image} from 'react-bootstrap'
import useDrinks from '../hooks/useDrinks'

const RecipeModal = () => {
  const { modal, handleModalClick, recipe, loading } = useDrinks()

  const showIngredients = () => {
    const list = []

    for(let i=1; i<16; i++) {
      if(recipe[`strIngredient${i}`]) {
        list.push(<li>{recipe[`strIngredient${i}`]} {recipe[`strMeasure${i}`]}</li>)
      }
    }

    return list
  }

  return (
    !loading && <Modal show={modal} onHide={handleModalClick}>
      <Image 
        src={recipe.strDrinkThumb}
        alt={`recipe img of ${recipe.strDrink}`}
      />

      <Modal.Header>
        <Modal.Title>{recipe.strDrink}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='p-3'>
          <h2>Ingredients</h2>
          {showIngredients()}
          <h2>Instructions</h2>
          {recipe.strInstructions}
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default RecipeModal
