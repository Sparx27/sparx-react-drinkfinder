import { Form, Col, Row, Button, Alert } from "react-bootstrap"
import useCategories from "../hooks/useCategories"
import { useState } from "react"
import useDrinks from "../hooks/useDrinks"

const DrinkForm = () => {
  const [search, setSearch] = useState({})
  const [errorMessage, setErrorMessage] = useState('')
  const [option, setOption] = useState('option1')
  const { categories } = useCategories()
  const { handleDrinks } = useDrinks()

  const handleSubmit = async e => {
    e.preventDefault()

    if(Object.values(search).includes('')) {
      return setErrorMessage('Field can not be empty')
    }

    setErrorMessage('')
    if(search.drinkName) {
      handleDrinks(search.drinkName)
    } else {
      handleDrinks(search.drinkCategory)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          {errorMessage && <Alert variant="danger" className="text-center">{errorMessage}</Alert>}
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label 
              className="btn btn-danger w-100 text-center text-uppercase"
              htmlFor="drinkName"
              onClick={() => setOption('option1')}
            >Search by One Ingredient</Form.Label>
            <Form.Control
              id="drinkName"
              type="text"
              placeholder="Ex: Tekila, Vodka"
              name="drinkName"
              /* value={search.drinkName} */
              onChange={e => setSearch({[e.target.name]: `i=${e.target.value}`})}
              disabled={option === 'option2'}
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className="mb-3">
          <Form.Label 
            className={`btn btn-danger w-100 text-center text-uppercase`}
            htmlFor="drinkCategory"
            onClick={() => setOption('option2')}
          >Search by Category</Form.Label>
            <Form.Select
              id="drinkCategory"
              name="drinkCategory"
              value={search.drinkCategory}
              onChange={e => setSearch({[e.target.name]: `c=${e.target.value}`})}
              disabled={option === 'option1'}
            >
              <option>--- Select Category ---</option>
              {
                categories.map(cat => (
                  <option
                    key={cat.strCategory}
                    value={cat.strCategory}
                  >{cat.strCategory}</option>
                ))
              }
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row className="justify-content-end">
        <Col md={3}>
          <Button
            variant="danger"
            className="text-uppercase w-100"
            type="submit"
          >
            Search Drink
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default DrinkForm
