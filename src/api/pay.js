import request from '@/utils/request'
// 充值相关接口
// 用户BYS充值接口
export function bysPayAddress() {
  return request({
    url: '/api/user/deposit/bys/address',
    method: 'post'
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

