import request from '@/utils/request'

// 热门彩种
export function queryLotteryKinds() {
  return request({
    url: '/api/lottery/queryLotteryKinds',
    method: 'get'
  })
}

// 中奖信息
export function winnerList() {
  return request({
    url: '/api/user/action/winnerList',
    method: 'get'
  })
}
