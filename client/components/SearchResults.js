import React from 'react'
import {Restaurant} from './Restaurant'
import {connect} from 'react-redux'
import {CardColumns, Spinner} from 'react-bootstrap'

class SearchResults extends React.Component {
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
  restaurants: state.restaurants.restaurantsFromSearch
})

export default connect(mapState)(SearchResults)
