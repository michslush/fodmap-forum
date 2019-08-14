import axios from 'axios'

// CONSTANTS
const CORS_URL = 'https://cors-anywhere.herokuapp.com'
const YELP_BUSINESS_SEARCH = 'https://api.yelp.com/v3/businesses/search'

// ACTION TYPES
const SINGLE_RESTAURANT = 'SINGLE_RESTAURANT'
const POST_COMMENT = 'POST_COMMENT'
const LOAD_COMMENTS = 'LOAD_COMMENTS'
const LOAD_RESTAURANTS = 'LOAD_RESTAURANTS'

// INITIAL STATE
const initialState = {
  restaurants: [],
  singleRestaurant: {},
  comments: []
}

// ACTION CREATORS
const singleRestaurantAction = data => ({
  type: SINGLE_RESTAURANT,
  data
})

const postCommentAction = data => ({
  type: POST_COMMENT,
  data
})

const loadCommentsAction = data => ({
  type: LOAD_COMMENTS,
  data
})

const loadRestaurantsAction = data => ({
  type: LOAD_RESTAURANTS,
  data
})

// THUNKS
export const getSingleRestaurantThunk = id => async dispatch => {
  try {
    const key = await axios.get('/api/restaurants')
    const YELP_ID_SEARCH = `https://api.yelp.com/v3/businesses/${id}`

    const {data} = await axios.get(CORS_URL + '/' + YELP_ID_SEARCH, {
      headers: {
        Authorization: `Bearer ${key.data}`
      }
    })

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

export const loadCommentsThunk = restaurantId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/comments/${restaurantId}`)
    dispatch(loadCommentsAction(data))
  } catch (err) {
    console.error(err)
  }
}

export const loadRestaurantsThunk = location => async dispatch => {
  try {
    const key = await axios.get('/api/restaurants')

    const {data} = await axios.get(CORS_URL + '/' + YELP_BUSINESS_SEARCH, {
      headers: {
        Authorization: `Bearer ${key.data}`
      },
      params: {
        term: 'restaurants',
        location
      }
    })

    dispatch(loadRestaurantsAction(data))
  } catch (err) {
    console.error(err)
  }
}

// REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case SINGLE_RESTAURANT:
      return {...state, singleRestaurant: action.data}
    case POST_COMMENT:
      return {...state, comments: [...state.comments, action.data]}
    case LOAD_COMMENTS:
      return {...state, comments: action.data}
    case LOAD_RESTAURANTS:
      return {...state, restaurants: action.data.businesses}
    default:
      return state
  }
}
