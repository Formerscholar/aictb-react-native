import defaultState from './defaultState'
import {
  USER_INFO,
} from './actionType'

const reducer = (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case USER_INFO:
      newState.userInfo = action.value
      return newState
    default:
      break
  }
  return state
}

export default reducer
