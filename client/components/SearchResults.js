import React from 'react'
import {SingleRestaurant} from './SingleRestaurant'
import {connect} from 'react-redux'

class SearchResults extends React.Component {
  render() {
    const {restaurants} = this.props

    if (restaurants.length) {
      return restaurants.map(restaurant => (
        <SingleRestaurant key={restaurant.id} restaurant={restaurant} />
      ))
    } else {
      return <div>Loading results...</div>
    }
  }
}

const mapState = state => ({
  restaurants: state.restaurants.restaurantsFromSearch
})

export default connect(mapState)(SearchResults)
