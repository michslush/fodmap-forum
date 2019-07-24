import axios from 'axios'

// ACTION TYPES
const GET_RESTAURANTS = 'GET_RESTAURANTS'

// INITIAL STATE
const restaurants = []

// ACTION CREATORS
const getRestaurantsAction = data => ({
  type: GET_RESTAURANTS,
  data
})

// THUNKS
export const getRestaurants = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/restaurants')

    dispatch(getRestaurantsAction(data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = restaurants, action) {
  switch (action.type) {
    case GET_RESTAURANTS:
      return action.data
    default:
      return state
  }
}
