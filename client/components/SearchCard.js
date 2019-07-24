import React from 'react'
import {Card, Button} from 'react-bootstrap'

export const SearchCard = props => {
  const {current} = props
  return (
    <Card style={{width: '18rem'}}>
      <Card.Img variant="top" src={current.imgSrc} style={{width: '17rem'}} />
      <Card.Body>
        <Card.Title>{current.cardTitle}</Card.Title>
        <Card.Text>{current.cardText}</Card.Text>
        {/* <Button variant="primary">Search</Button> */}
        <Card.Link href="/restaurants">Search</Card.Link>
      </Card.Body>
    </Card>
  )
}
