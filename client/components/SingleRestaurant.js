import React from 'react'
import {connect} from 'react-redux'
import {getSingleRestaurantThunk, loadCommentsThunk} from '../store/restaurant'
import {Jumbotron, Button, Image, ListGroup} from 'react-bootstrap'
import {CommentForm} from './index'

class SingleRestaurant extends React.Component {
  constructor() {
    super()
    this.state = {
      showButton: true,
      showForm: false
    }
  }

  componentDidMount() {
    this.props.getSingleRestaurantThunk(this.props.match.params.name)
    this.props.loadCommentsThunk(this.props.match.params.name)
  }

  handleClick = () => {
    this.state.showForm
      ? this.setState({showForm: false, showButton: true})
      : this.setState({showForm: true, showButton: false})
  }

  render() {
    const {restaurant, comments} = this.props
    const {showForm, showButton} = this.state

    if (restaurant)
      return (
        <Jumbotron>
          <h1>{restaurant.name}</h1>
          <Image src={restaurant.image_url} style={{width: '200px'}} />
          <ListGroup>
            {comments &&
              comments.map(comment => (
                <ListGroup.Item className="restaurant-comment" key={comment.id}>
                  {comment.content}
                </ListGroup.Item>
              ))}
          </ListGroup>
          {showButton && (
            <p>
              <Button type="button" variant="dark" onClick={this.handleClick}>
                Add a new comment!
              </Button>
            </p>
          )}
          {showForm && <CommentForm restaurantId={restaurant.id} />}
        </Jumbotron>
      )

    return <div>Loading...</div>
  }
}

const MapDispatch = dispatch => ({
  getSingleRestaurantThunk: id => dispatch(getSingleRestaurantThunk(id)),
  loadCommentsThunk: id => dispatch(loadCommentsThunk(id))
})

const MapState = state => ({
  restaurant: state.restaurants.singleRestaurant,
  comments: state.restaurants.comments
})

export default connect(MapState, MapDispatch)(SingleRestaurant)
