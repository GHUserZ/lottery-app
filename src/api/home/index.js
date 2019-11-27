import request from '@/utils/request'

export function queryWinnerList() {
  return request({
    url: '/api/user/action/winnerList',
    method: 'get'
  })
}
