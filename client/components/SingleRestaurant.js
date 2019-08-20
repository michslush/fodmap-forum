import React from 'react'
import {connect} from 'react-redux'
import {getSingleRestaurantThunk, loadCommentsThunk} from '../store/restaurant'
import {Jumbotron, Button, Card, ListGroup, CardColumns} from 'react-bootstrap'
import {CommentForm, YelpLogo, RestaurantDetails, AddToMyPlaces} from './index'

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
          <CardColumns>
            <RestaurantDetails restaurant={restaurant} />

            {/** this is where I want to put the add to My Places list */}
            <AddToMyPlaces restaurant={restaurant} />

            {restaurant.photos &&
              restaurant.photos.map((photo, idx) => (
                <Card key={idx} style={{width: '70%'}}>
                  <Card.Img src={photo} />
                </Card>
              ))}

            <Card>
              <Card.Body>
                <div className="seeMoreOnYelp">
                  See more about this restaurant on
                  <YelpLogo url={restaurant.url} />
                </div>
                {showButton && (
                  <p>
                    <Button
                      type="button"
                      variant="dark"
                      onClick={this.handleClick}
                    >
                      Add a new comment!
                    </Button>
                  </p>
                )}
                <ListGroup>
                  {comments &&
                    comments.map(comment => (
                      <ListGroup.Item
                        className="restaurant-comment"
                        key={comment.id}
                      >
                        {comment.content}
                      </ListGroup.Item>
                    ))}
                </ListGroup>
                {showForm && <CommentForm restaurantId={restaurant.id} />}
              </Card.Body>
            </Card>
          </CardColumns>
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
