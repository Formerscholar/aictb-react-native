import {
  GET_HOME_INFO,
} from './actionType'

export const GetListAction = (value) => {
  return {
    type: GET_HOME_INFO,
    value,
  }
}


// --------------------------------------------

// export const GetTopics = (data) => {
//   return (dispatch) => {
//     setTimeout(() => {
//       const action = GetTopicslist(data)
//       dispatch(action)
//     }, 2000)
//   }
// }
