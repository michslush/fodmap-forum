import React from 'react'
import {connect} from 'react-redux'
import {getSingleRestaurantThunk} from '../store/restaurant'
import {Jumbotron, Button} from 'react-bootstrap'

class SingleRestaurant extends React.Component {
  componentDidMount() {
    this.props.getSingleRestaurantThunk(this.props.match.params.name)
  }

  render() {
    const {restaurant} = this.props

    if (restaurant)
      return (
        <Jumbotron>
          <h1>{restaurant.name}</h1>
          <h4>
            {restaurant.address} {restaurant.city}, {restaurant.state}
          </h4>
          <ul>
            {restaurant.comments &&
              restaurant.comments.map(comment => (
                <li key={comment.id}>{comment.content}</li>
              ))}
          </ul>
          <p>
            <Button variant="primary">Add a new comment!</Button>
          </p>
        </Jumbotron>
      )

    return <div>Loading...</div>
  }
}

const MapDispatch = dispatch => ({
  getSingleRestaurantThunk: name => dispatch(getSingleRestaurantThunk(name))
})

const MapState = state => ({
  restaurant: state.restaurants.singleRestaurant
})

export default connect(MapState, MapDispatch)(SingleRestaurant)
