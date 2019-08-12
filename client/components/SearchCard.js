import React from 'react'
import {searchThunk} from '../store/restaurant'
import {Card, Form, FormControl, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class SearchCard extends React.Component {
  constructor() {
    super()
    this.state = {
      searchVal: '',
      redirectToResults: false
    }
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = evt => {
    evt.preventDefault()
    this.props.searchThunk(this.state.searchVal, this.props.current.searchType)
    this.setState({
      redirectToResults: true
    })
  }

  render() {
    const {current} = this.props
    const {searchVal, redirectToResults} = this.state

    if (redirectToResults && current.searchType === 'name') {
      return <Redirect to="/underConstruction" />
      // return <Redirect to={`/restaurants/byName/${searchVal}`} />
    }

    if (redirectToResults && current.searchType === 'cuisine') {
      return <Redirect to="/underConstruction" />
      // return <Redirect to={`/restaurants/byCuisine/${searchVal}`} />
    }

    if (redirectToResults && current.searchType === 'location') {
      return <Redirect to={`/restaurants/byLocation/${searchVal}`} />
    }

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
            <Button type="submit" variant="outline-dark">
              Search
            </Button>
          </Form>
        </Card.Body>
      </Card>
    )
  }
}

const mapState = state => ({
  restaurants: state.restaurants
})

const mapDispatch = dispatch => ({
  searchThunk: (name, type) => dispatch(searchThunk(name, type))
})

export default connect(mapState, mapDispatch)(SearchCard)
