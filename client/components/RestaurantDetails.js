import React from 'react'
import {RestaurantHours} from './RestaurantHours'
import {Card} from 'react-bootstrap'

export const RestaurantDetails = props => {
  const {restaurant} = props

  return (
    <Card>
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        {restaurant.hours && restaurant.hours[0].is_open_now ? (
          <Card.Subtitle style={{color: 'green'}}>Open Now</Card.Subtitle>
        ) : (
          <Card.Subtitle style={{color: 'red'}}>Closed Now</Card.Subtitle>
        )}
        <Card.Text>
          Price {restaurant.price} | Rating {restaurant.rating}
        </Card.Text>
        <Card.Text>
          {restaurant.categories &&
            restaurant.categories.map(current => current.title).join(', ')}
        </Card.Text>
        <Card.Text>{restaurant.display_phone}</Card.Text>
        <Card.Text>
          {restaurant.location && restaurant.location.address1}
        </Card.Text>
        <Card.Text>
          {restaurant.location && restaurant.location.city},{' '}
          {restaurant.location && restaurant.location.state}{' '}
          {restaurant.location && restaurant.location.zip_code}
        </Card.Text>
        <RestaurantHours restaurant={restaurant} />
      </Card.Body>
    </Card>
  )
}
