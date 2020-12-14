import defaultState from './defaultState'
import {
  GET_HOME_INFO,
} from './actionType'

const reducer = (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case GET_HOME_INFO:
      newState.homeInfo = action.value
      return newState
    default:
      break
  }
  return state
}

export default reducer
