import React from 'react'
import {connect} from 'react-redux'
// import {withRouter} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'
import {getRestaurantsByZipThunk} from '../store/restaurant'
import {ResultsTable} from './ResultsTable'

class SearchByZipcode extends React.Component {
  constructor() {
    super()
    this.state = {
      location: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    try {
      this.props.getRestaurantsByZipThunk(this.state.location)

      if (this.props.restaurantsFromSearch.businesses) {
        console.log(this.props.restaurantsFromSearch.businesses)
      }
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    // const {restaurants} = this.state
    const {restaurantsFromSearch} = this.props
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="location">
            <Form.Label>Search for a restaurant by location:</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="location"
              name="location"
              placeholder="Location"
              value={this.state.location}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <div>
          {restaurantsFromSearch.businesses && (
            <ResultsTable restaurants={restaurantsFromSearch.businesses} />
          )}
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  restaurantsFromSearch: state.restaurants.restaurantsFromSearch
})

const mapDispatch = dispatch => ({
  getRestaurantsByZipThunk: zipcode =>
    dispatch(getRestaurantsByZipThunk(zipcode))
})

export default connect(mapState, mapDispatch)(SearchByZipcode)
