import request from './axios'
import Qs from 'qs'

export function gethome() {
  return request({
    url: '/home',
    method: 'GET'
  })
}


// export function getTeamDetail(params) {
//   return request({
//     url: '/getTeamDetail',
//     method: 'GET',
//     params,
//   })
// }



// export function delTeamStudent(data) {
//   return request({
//     url: '/delTeamStudent',
//     method: 'POST',
//     data: Qs.stringify(data),
//   })
// }
