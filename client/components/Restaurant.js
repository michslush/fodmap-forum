import React from 'react'
import {Card} from 'react-bootstrap'
import {YelpLogo} from './index'

export const Restaurant = props => {
  const {restaurant} = props

  return (
    <Card style={{width: '20rem'}}>
      <Card.Body>
        <Card.Title>
          <Card.Link href={`/restaurant/${restaurant.id}`}>
            {restaurant.name}
          </Card.Link>
        </Card.Title>
        <Card.Subtitle>
          {restaurant.categories.map(current => current.title).join(', ')}
        </Card.Subtitle>
      </Card.Body>
      <Card.Body>
        <Card.Link href={`/restaurant/${restaurant.id}`}>
          <Card.Img
            className="restaurant-image"
            variant="top"
            src={restaurant.image_url}
          />
        </Card.Link>
        <Card.Body>
          <Card.Text>{restaurant.display_phone}</Card.Text>
          <Card.Text>{restaurant.location.address1}</Card.Text>
          <Card.Text>
            {restaurant.location.city}, {restaurant.location.state}{' '}
            {restaurant.location.zip_code}
          </Card.Text>
          <Card.Text>
            Stars {restaurant.rating} | Cost {restaurant.price}
          </Card.Text>
          <YelpLogo url={restaurant.url} />
        </Card.Body>
      </Card.Body>
    </Card>
  )
}
