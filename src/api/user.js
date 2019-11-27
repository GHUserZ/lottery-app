import request from '@/utils/request'
// 登录
export function login(data) {
  return request({
    url: '/api/user/login/userLogin',
    method: 'post',
    data
  })
}

// 个人中心-用户个人基本信息
export function getInfo() {
  return request({
    url: '/api/user/action/userInfo',
    method: 'get'
  })
}
// 登出
export function logout() {
  return request({
    url: '/api/user/login/loginOut',
    method: 'get'
  })
}
// 用户注册
export function userRegister(data) {
  return request({
    url: '/api/user/register/userRegister',
    method: 'POST',
    data
  })
}

