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

// 用户提币地址列表
export function getAddressList(data) {
  return request({
    url: '/api/userAddress/action/getAddressList',
    method: 'POST',
    data
  })
}
// 删除提币地址
export function delAddress(data) {
  return request({
    url: '/api/userAddress/action/delAddress',
    method: 'POST',
    data
  })
}
// 添加提币地址
export function addAddress(data) {
  return request({
    url: '/api/userAddress/action/addAddress',
    method: 'POST',
    data
  })
}

// 获取用户银行卡
export function getBankCard() {
  return request({
    url: '/api/user/bankcard/get',
    method: 'get'
  })
}
// 获取用户银行卡列表
export function getBankCardList(params) {
  return request({
    url: '/api/user/bankcard/list',
    method: 'get',
    params
  })
}
// 保存用户银行卡
export function addBankCard(data) {
  return request({
    url: '/api/user/bankcard/save',
    method: 'POST',
    data
  })
}

// 信息安全修改密码
export function updatePassword(data) {
  return request({
    url: '/api/user/action/updatePassword',
    method: 'POST',
    data
  })
}
//个人中心-个人统计
export function userStatistical(data) {
  return request({
    url: '/api/user/action/userStatistical',
    method: 'POST',
    data
  })
}

//个人中心-个人盈亏
export function userGainOrLoss(data) {
  return request({
    url: '/api/user/action/userGainOrLoss',
    method: 'POST',
    data
  })
}

