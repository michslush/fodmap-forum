import axios from 'axios'

// ACTION TYPES
const ADD_TO_MY_PLACES = 'ADD_TO_MY_PLACES'
const GET_MY_PLACES = 'GET_MY_PLACES'

// INITIAL STATE
const initialState = {
  myPlaces: []
}

// ACTION CREATORS
const addToMyPlacesAction = data => ({
  type: ADD_TO_MY_PLACES,
  data
})

const getMyPlacesAction = data => ({
  type: GET_MY_PLACES,
  data
})

// THUNKS
export const addToMyPlacesThunk = info => async dispatch => {
  try {
    const {data} = await axios.post('/api/myPlaces', info)
    dispatch(addToMyPlacesAction(data))
  } catch (err) {
    console.error(err)
  }
}

export const getMyPlacesThunk = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/myPlaces')
    dispatch(getMyPlacesAction(data))
  } catch (err) {
    console.error(err)
  }
}

// REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_MY_PLACES:
      return {...state, myPlaces: [...state.myPlaces, action.data]}
    case GET_MY_PLACES:
      return {...state, myPlaces: action.data}
    default:
      return state
  }
}
