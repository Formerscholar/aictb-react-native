import { request } from './axios';
import Qs from 'qs';


// 学生登录
export function StudentLogin(data) {
  return request({
    url: '/app/user/login/',
    method: 'POST',
    data: Qs.stringify(data),
  })
}

// 老师登录
export function teacherLogin(data) {
  return request({
    url: '/app/teacher/login/',
    method: 'POST',
    data: Qs.stringify(data),
  })
}


// 老师wx登录
export function WxTeacherLogin(data) {
  return request({
    url: '/app/teacher/wx_login/',
    method: 'POST',
    data: Qs.stringify(data),
  })
}

// 学生wx登录
export function WxStudentLogin(data) {
  return request({
    url: '/app/user/wx_login/',
    method: 'POST',
    data: Qs.stringify(data),
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
