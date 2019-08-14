import React from 'react'
import {connect} from 'react-redux'
import {Form, Button} from 'react-bootstrap'
import {postCommentThunk} from '../store/restaurant'

class CommentForm extends React.Component {
  constructor() {
    super()
    this.state = {
      content: '',
      restaurantId: null,
      userId: null
    }
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
      userId: this.props.user.id,
      restaurantId: this.props.restaurant.id
    })
  }

  handleSubmit = evt => {
    evt.preventDefault()

    this.props.postCommentThunk(this.state)

    this.setState({
      content: '',
      restaurantId: null,
      userId: null
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicComment">
          <Form.Label>Leave a comment!</Form.Label>
          <Form.Control
            onChange={this.handleChange}
            as="textarea"
            name="content"
            value={this.state.content}
            rows="3"
            cols="70"
            type="content"
            placeholder="Enter comment"
          />
        </Form.Group>
        <p>
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </p>
      </Form>
    )
  }
}

const mapState = state => ({
  user: state.user,
  restaurant: state.restaurants.singleRestaurant
})

const mapDispatch = dispatch => ({
  postCommentThunk: post => dispatch(postCommentThunk(post))
})

export default connect(mapState, mapDispatch)(CommentForm)
