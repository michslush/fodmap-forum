import axios from 'axios'

// ACTION TYPES
const POST_COMMENT = 'POST_COMMENT'

// INITIAL STATE
const initialState = {
  comments: [],
  comment: {}
}

// ACTION CREATORS
const postCommentAction = data => ({
  type: POST_COMMENT,
  data
})

// THUNK CREATORS
export const postCommentThunk = newComment => async dispatch => {
  try {
    const {data} = await axios.post('/api/comments/addComment', newComment)
    dispatch(postCommentAction(data))
  } catch (err) {
    console.error(err)
  }
}

// REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case POST_COMMENT:
      return {...state, comments: [...state.comments, action.data]}
    default:
      return state
  }
}
