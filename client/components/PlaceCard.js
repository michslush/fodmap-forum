import React from 'react'
import {Card} from 'react-bootstrap'
import {YelpLogo} from './index'

export const PlaceCard = props => {
  const {restaurant} = props

  return (
    <Card style={{width: '20rem'}}>
      <Card.Body>
        <Card.Title>
          <Card.Link href={`/restaurant/${restaurant.restaurantId}`}>
            {restaurant.name}
          </Card.Link>
        </Card.Title>
      </Card.Body>
      <Card.Body>
        <Card.Link href={`/restaurant/${restaurant.restaurantId}`}>
          <Card.Img
            className="restaurant-image"
            variant="top"
            src={restaurant.imageUrl}
          />
        </Card.Link>
        <Card.Body>
          <Card.Text>
            Stars {restaurant.rating} | Cost {restaurant.price}
          </Card.Text>
          <YelpLogo url={restaurant.url} />
        </Card.Body>
      </Card.Body>
    </Card>
  )
}
