import { Container } from "react-bootstrap"
import DrinkForm from "./components/DrinkForm"
import CategoriesProvider from "./Context/CategoriesProvider"
import DrinksProvider from "./Context/DrinksProvider"
import DrinksList from "./components/DrinksList"
import RecipeModal from "./components/RecipeModal"

function App() {

  return (
    <>
      <CategoriesProvider>
        <DrinksProvider>
        <header className="py-5">
            <h1>Drink Finder</h1>
          </header>

          <Container className="mt-5">
            <DrinkForm />

            <DrinksList />

            <RecipeModal />
          </Container>
        </DrinksProvider>
      </CategoriesProvider>
    </>
  )
}

export default App
