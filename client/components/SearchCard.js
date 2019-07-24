import React from 'react'
import {searchThunk} from '../store/restaurant'
import {Card, Button, Form, FormControl} from 'react-bootstrap'
import {connect} from 'react-redux'

class SearchCard extends React.Component {
  constructor() {
    super()
    this.state = {
      searchVal: ''
    }
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = evt => {
    evt.preventDefault()
    this.props.searchThunk(this.state.searchVal)
  }

  render() {
    const {current} = this.props
    const {searchVal} = this.state

    return (
      <Card style={{width: '18rem'}}>
        <Card.Img variant="top" src={current.imgSrc} style={{width: '17rem'}} />
        <Card.Body>
          <Card.Title>{current.cardTitle}</Card.Title>
          <Card.Text>{current.cardText}</Card.Text>
          <Form onSubmit={this.handleSubmit} inline>
            <FormControl
              type="text"
              name="searchVal"
              placeholder="Search"
              value={searchVal}
              className="mr-sm-2"
              onChange={this.handleChange}
            />
            <Button type="submit" variant="outline-info">
              Search
            </Button>
          </Form>
        </Card.Body>
      </Card>
    )
  }
}

const mapState = state => ({
  restaurant: state.restaurants.restaurant
})

const mapDispatch = dispatch => ({
  searchThunk: name => dispatch(searchThunk(name))
})

export default connect(mapState, mapDispatch)(SearchCard)
