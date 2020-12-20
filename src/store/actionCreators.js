import {
  USER_INFO,
} from './actionType'

export const getUserInfo = (value) => {
  return {
    type: USER_INFO,
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
