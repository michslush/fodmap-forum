import React from 'react'
import {Card, ListGroup, ListGroupItem, Row, Col} from 'react-bootstrap'

export const Restaurant = props => {
  const {restaurant} = props

  return (
    <Card style={{width: '18rem'}}>
      <Card.Body>
        <Card.Title>
          <Card.Link
            href={`/restaurants/singleRestaurant/${restaurant.name}`}
            params={{restaurant: restaurant}}
          >
            {restaurant.name}
          </Card.Link>
        </Card.Title>
        <Card.Text>{restaurant.cuisine} Cuisine</Card.Text>
        <Card.Text>
          {restaurant.address} {restaurant.city}, {restaurant.state}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Header>Comments</Card.Header>
        <ListGroup className="list-group-flush">
          <Row>
            {restaurant.comments.length ? (
              restaurant.comments.map(comment => (
                <ListGroupItem key={comment.id}>
                  <Col>{comment.content}</Col>
                  <Col> Upvotes: {comment.upvotes}</Col>
                </ListGroupItem>
              ))
            ) : (
              <div>No comments yet!</div>
            )}
          </Row>
        </ListGroup>
      </Card.Body>
    </Card>
  )
}
