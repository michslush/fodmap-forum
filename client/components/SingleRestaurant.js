import React from 'react'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'

export const SingleRestaurant = props => {
  const {restaurant} = props

  return (
    <Card style={{width: '18rem'}}>
      {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <Card.Text>{restaurant.cuisine} Cuisine</Card.Text>
        <Card.Text>
          {restaurant.address} {restaurant.city}, {restaurant.state}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Header>Comments</Card.Header>
        <ListGroup className="list-group-flush">
          {restaurant.comments.length ? (
            restaurant.comments.map(comment => (
              <ListGroupItem key={comment.id}>{comment.content}</ListGroupItem>
            ))
          ) : (
            <div>No comments yet!</div>
          )}
        </ListGroup>
      </Card.Body>
    </Card>
  )
}
