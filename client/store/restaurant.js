import axios from 'axios'

// ACTION TYPES
const GET_RESTAURANTS = 'GET_RESTAURANTS'
const SEARCH_BY_NAME = 'SEARCH_BY_NAME'

// INITIAL STATE
const initialState = {
  restaurants: [],
  restaurantsFromSearch: []
}

// ACTION CREATORS
const getRestaurantsAction = data => ({
  type: GET_RESTAURANTS,
  data
})

const searchByNameAction = data => ({
  type: SEARCH_BY_NAME,
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

export const searchThunk = (name, searchType) => async dispatch => {
  try {
    if (searchType === 'name') {
      const {data} = await axios.get(`/api/restaurants/byName/${name}`)
      dispatch(searchByNameAction(data))
    }

    if (searchType === 'cuisine') {
      const {data} = await axios.get(`/api/restaurants/byCuisine/${name}`)
      dispatch(searchByNameAction(data))
    }
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RESTAURANTS:
      return {...state, restaurants: action.data}
    case SEARCH_BY_NAME:
      return {...state, restaurantsFromSearch: action.data}
    default:
      return state
  }
}
