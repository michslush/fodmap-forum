import axios from 'axios'

// ACTION TYPES
const GET_RESTAURANTS = 'GET_RESTAURANTS'
const SEARCH = 'SEARCH'
const SINGLE_RESTAURANT = 'SINGLE_RESTAURANT'
const POST_COMMENT = 'POST_COMMENT'

// INITIAL STATE
const initialState = {
  restaurants: [],
  restaurantsFromSearch: [],
  singleRestaurant: {}
}

// ACTION CREATORS
const getRestaurantsAction = data => ({
  type: GET_RESTAURANTS,
  data
})

const searchAction = data => ({
  type: SEARCH,
  data
})

const singleRestaurantAction = data => ({
  type: SINGLE_RESTAURANT,
  data
})

const postCommentAction = data => ({
  type: POST_COMMENT,
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
      dispatch(searchAction(data))
    }

    if (searchType === 'cuisine') {
      const {data} = await axios.get(`/api/restaurants/byCuisine/${name}`)
      dispatch(searchAction(data))
    }

    if (searchType === 'location') {
      const {data} = await axios.get(`/api/restaurants/byLocation/${name}`)
      dispatch(searchAction(data))
    }
  } catch (err) {
    console.error(err)
  }
}

export const getSingleRestaurantThunk = restaurantName => async dispatch => {
  try {
    restaurantName = restaurantName.toLowerCase()
    const {data} = await axios.get(`/api/restaurants/${restaurantName}`)
    dispatch(singleRestaurantAction(data))
  } catch (err) {
    console.error(err)
  }
}

export const postCommentThunk = newComment => async dispatch => {
  try {
    const {data} = await axios.post('/api/comments/addComment', newComment)
    dispatch(postCommentAction(data))
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
    case SEARCH:
      return {...state, restaurantsFromSearch: action.data}
    case SINGLE_RESTAURANT:
      return {...state, singleRestaurant: action.data}
    case POST_COMMENT:
      return {...state, singleRestaurant: action.data}
    default:
      return state
  }
}
