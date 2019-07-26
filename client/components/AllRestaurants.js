import React from 'react'
import {connect} from 'react-redux'
import {Restaurant} from './Restaurant'
import {getRestaurants} from '../store/restaurant'

class AllRestaurants extends React.Component {
  componentDidMount() {
    this.props.getRestaurants()
  }

  render() {
    const {restaurants} = this.props

    return restaurants.length ? (
      restaurants.map(restaurant => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))
    ) : (
      <div>Loading...</div>
    )
  }
}

const mapState = state => ({
  restaurants: state.restaurants.restaurants
})

const mapDispatch = dispatch => ({
  getRestaurants: () => dispatch(getRestaurants())
})

export default connect(mapState, mapDispatch)(AllRestaurants)
