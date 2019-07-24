import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import SearchCard from './SearchCard'

const restaurantCard = {
  imgSrc: 'restaurant.png',
  cardTitle: 'Search by Restaurant',
  cardText:
    'Find your favorite restaurants by name or search for that new place you recently heard about.'
}

const cuisineCard = {
  imgSrc: 'cuisine.png',
  cardTitle: 'Search by Cuisine',
  cardText: `Whatever you're in the mood for, you can search for it here.`
}

const locationCard = {
  imgSrc: 'location.png',
  cardTitle: 'Search by Location',
  cardText: 'WYA?'
}

const searchArray = [restaurantCard, cuisineCard, locationCard]

class LandingPage extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          {searchArray.map(current => {
            return (
              <Col key={current.id}>
                <SearchCard current={current} />
              </Col>
            )
          })}
        </Row>
      </Container>
    )
  }
}

export default LandingPage
