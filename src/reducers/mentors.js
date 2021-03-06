import {SET_MENTORS} from '../actions/setters'

export default (prevState = {}, action) => {
  // Add your action conditionals here
  if (action.type === SET_MENTORS) {
    return {
      ...prevState,
      ...action.data
    }
  }
  return prevState
}
