import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {addToMyPlacesThunk} from '../store/myPlaces'
import {connect} from 'react-redux'

class AddToMyPlaces extends React.Component {
  constructor() {
    super()
    this.state = {
      showAdded: false
    }
  }

  handleClick = () => {
    this.props.addToMyPlacesThunk(this.props.restaurant)
    this.setState({
      showAdded: true
    })
  }

  render() {
    const {restaurant} = this.props
    const {showAdded} = this.state

    return (
      <Card>
        <Card.Body>
          <Card.Title>Add Restaurant To My Places</Card.Title>
          <Button type="button" variant="success" onClick={this.handleClick}>
            Add {restaurant.name}
          </Button>
        </Card.Body>
        <Card.Body>
          {showAdded && <Card.Text>Added To My Places!</Card.Text>}
        </Card.Body>
      </Card>
    )
  }
}

const mapDispatch = dispatch => ({
  addToMyPlacesThunk: restaurant => dispatch(addToMyPlacesThunk(restaurant))
})

export default connect(null, mapDispatch)(AddToMyPlaces)
