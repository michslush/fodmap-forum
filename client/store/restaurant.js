import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_RESTAURANT = 'GET_RESTAURANT'

/**
 * INITIAL STATE
 */
const defaultRestaurant = {}

/**
 * ACTION CREATORS
 */
const getRestaurant = restaurant => ({type: GET_RESTAURANT, restaurant})

/**
 * THUNK CREATORS
 */
export const getRestaurantThunk = locationSearched => async dispatch => {
  try {
    const {data} = await axios.get(
      'https://api.yelp.com/v3/businesses/search',
      {
        headers: {
          Authorization: `Bearer ${process.env.YELP_API_KEY}`
        },
        params: {
          location: {locationSearched},
          categories: 'breakfast_brunch'
        }
      }
    )

    dispatch(getRestaurant(data || defaultRestaurant))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultRestaurant, action) {
  switch (action.type) {
    case GET_RESTAURANT:
      return action.restaurant
    default:
      return state
  }
}
