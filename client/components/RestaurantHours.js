import React from 'react'
import {ListGroup, Card} from 'react-bootstrap'

const hours = {
  0: 'Monday',
  1: 'Tuesday',
  2: 'Wednesday',
  3: 'Thursday',
  4: 'Friday',
  5: 'Saturday',
  6: 'Sunday'
}

export const RestaurantHours = props => {
  const {restaurant} = props

  return (
    <ListGroup style={{width: 'fit-content'}}>
      <Card.Header variant="dark">Hours</Card.Header>
      {restaurant.hours &&
        restaurant.hours[0].open.map(day => {
          return (
            <ListGroup.Item key={day.day}>
              {hours[day.day]}: {day.start} - {day.end}
            </ListGroup.Item>
          )
        })}
    </ListGroup>
  )
}
