import React from 'react'
import {connect} from 'react-redux'
import {CardColumns, Spinner} from 'react-bootstrap'
import {loadRestaurantsThunk} from '../store/restaurant'
import {Restaurant} from './index'

class SearchResults extends React.Component {
  componentDidMount() {
    this.props.loadRestaurants(this.props.match.params.name)
  }

  render() {
    const {restaurants} = this.props

    return (
      <CardColumns>
        {restaurants.length ? (
          restaurants.map(restaurant => (
            <Restaurant key={restaurant.id} restaurant={restaurant} />
          ))
        ) : (
          <Spinner animation="border" />
        )}
      </CardColumns>
    )
  }
}

const mapState = state => ({
  restaurants: state.restaurants.restaurants
})

const mapDispatch = dispatch => ({
  loadRestaurants: location => dispatch(loadRestaurantsThunk(location))
})

export default connect(mapState, mapDispatch)(SearchResults)
