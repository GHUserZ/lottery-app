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

// 代理中心-团队统计分析
export function agentStatistical(data) {
  return request({
    url: '/api/user/agent/action/agentStatistical',
    method: 'post',
    data
  })
}


// 代理中心-团队盈亏报表
export function getTeamProfitAndLossRecords(data) {
  return request({
    url: '/api/user/agent/action/getTeamProfitAndLossRecords',
    method: 'post',
    data
  })
}

// 代理中心-团队游戏记录
export function getTeamOrderRecords(data) {
  return request({
    url: '/api/user/agent/action/getTeamOrderRecords',
    method: 'post',
    data
  })
}


