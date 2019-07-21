import React from 'react'
import {Form, Button} from 'react-bootstrap'
import Axios from 'axios'

export default class Search extends React.Component {
  constructor() {
    super()
    this.state = {
      restaurantName: '',
      restaurant: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  async handleSubmit(evt) {
    evt.preventDefault()
    try {
      const {data} = await Axios.get(
        `${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${
          this.state.restaurantName
        }`,
        {
          headers: {
            Authorization: `Bearer ${process.env.YELP_API_KEY}`
          },
          params: {
            location: this.state.restaurantName,
            categories: 'breakfast_brunch'
          }
        }
      )
      this.setState({restaurant: data})
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const {restaurant} = this.state
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="restaurantName">
            <Form.Label>Search for a restaurant by name:</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="restaurantName"
              name="restaurantName"
              placeholder="Restaurant"
              value={this.state.restaurantName}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <div>{restaurant.buisinesses && <p>{restaurant}</p>}</div>
      </div>
    )
  }
}
