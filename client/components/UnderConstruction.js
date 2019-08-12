import React from 'react'
import {Jumbotron, Container, Button} from 'react-bootstrap'

export const UnderConstruction = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Coming Soon</h1>
        <p>
          This feature is currently under construction. For now, you can search
          by location! Check back soon!!!
        </p>
        <Button href="/home" variant="primary">
          Back to home
        </Button>
      </Container>
    </Jumbotron>
  )
}
