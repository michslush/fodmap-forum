import React from 'react'
import {connect} from 'react-redux'
import {getSingleRestaurantThunk} from '../store/restaurant'
import {Jumbotron, Button} from 'react-bootstrap'
import {CommentForm} from './index'

class SingleRestaurant extends React.Component {
  constructor() {
    super()
    this.state = {
      showForm: false
    }
  }

  componentDidMount() {
    this.props.getSingleRestaurantThunk(this.props.match.params.name)
  }

  handleClick = () => {
    this.state.showForm
      ? this.setState({showForm: false})
      : this.setState({showForm: true})
  }

  render() {
    const {restaurant} = this.props
    const {showForm} = this.state

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
            <Button type="button" variant="primary" onClick={this.handleClick}>
              Add a new comment!
            </Button>
          </p>
          {showForm && <CommentForm restaurantId={restaurant.id} />}
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
  // comments: state.comments.comment
})

export default connect(MapState, MapDispatch)(SingleRestaurant)
