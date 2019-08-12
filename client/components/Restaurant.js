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
      </Card.Body>
      <Card.Body>
        <Card.Header>Comments</Card.Header>
        <ListGroup className="list-group-flush">
          <Row>
            {restaurant.comments ? (
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
