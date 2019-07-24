import React from 'react'

export const SingleRestaurant = props => {
  const {restaurant} = props

  return <div>{restaurant.name}</div>
}
