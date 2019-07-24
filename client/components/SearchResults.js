import React from 'react'
import {Restaurant} from './Restaurant'
import {connect} from 'react-redux'

class SearchResults extends React.Component {
  render() {
    const {restaurants} = this.props

    if (restaurants.length) {
      return restaurants.map(restaurant => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
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
