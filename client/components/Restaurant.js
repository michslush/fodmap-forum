import React from 'react'
import {Card} from 'react-bootstrap'

export const Restaurant = props => {
  const {restaurant} = props

  return (
    <Card style={{width: '18rem'}}>
      <Card.Body>
        <Card.Title>
          <Card.Link href={`/restaurant/${restaurant.id}`}>
            {restaurant.name}
          </Card.Link>
        </Card.Title>
        <Card.Img variant="top" src={restaurant.image_url} />
        <Card.Text>
          {restaurant.categories.map(current => current.title).join(', ')}
        </Card.Text>
        <Card.Text>{restaurant.display_phone}</Card.Text>
        <Card.Text>{restaurant.location.address1}</Card.Text>
        <Card.Text>
          {restaurant.location.city}, {restaurant.location.state}{' '}
          {restaurant.location.zip_code}
        </Card.Text>
        <Card.Text>
          Stars {restaurant.rating} | Cost {restaurant.price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
