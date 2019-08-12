import React from 'react'
import {Table} from 'react-bootstrap'

export const ResultsTable = props => {
  const {restaurants} = props
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Restaurant</th>
          <th>Rating</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {restaurants &&
          restaurants.map(restaurant => {
            return (
              <tr key={restaurant.id}>
                <td>{restaurant.name}</td>
                <td>{restaurant.rating}</td>
                <td>{restaurant.price}</td>
              </tr>
            )
          })}
      </tbody>
    </Table>
  )
}
