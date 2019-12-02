import request from '@/utils/request'
// 代理相关接口

// 代理中心-注册账号
export function registerByAgent(data) {
  return request({
    url: '/api/user/agent/action/registerByAgent',
    method: 'post',
    data
  })
}
// 人民币充值
export function RMBRecharge(params) {
  return request({
    url: '/api/user/cash/draw/trance',
    method: 'get',
    params
  })
}

// BYS提现
export function BysDraw(data) {
  return request({
    url: '/api/user/deposit/bys/draw',
    method: 'post',
    data
  })
}

