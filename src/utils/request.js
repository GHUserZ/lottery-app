import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'
import { Dialog, Notify } from 'vant'
import router from '@/router'
// create an axios instance
const service = axios.create({
  baseURL:process.env.VUE_APP_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
  withCredentials: true,
  // 默认等待请求头格式
  headers: {
    // 设置请求头格式
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      // config.headers['x-token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)
// response interceptor
service.interceptors.response.use(
  response => {
    /**
    * code为非0是抛错 可结合自己业务进行修改
    */
      const res = response.data
      // 成功（1.http状态码为200 2.res的code为0） ==> 需要前后台定制好code成功值
      if ((res.code === undefined && res.retCode === undefined) || (res.code !== undefined && !parseInt(res.code)) || (res.retCode !== undefined && !parseInt(res.retCode))) { // res.code没有值并且retCode没有值 或者值为0
        // const result = res.data ? res.data : res
        return Promise.resolve(res)
      }
      // 失败(1. http状态码为200 2.res的code非2000)
      if ([508, 512, 514].indexOf(res.code) > -1) { // 登出
        try {
          store.dispatch('ClearLogin') // 清空登录信息
          Dialog.alert({
            title: '登录过期',
            message: '当前登录以超时，请重新登录!!!'
          }).then(() => {
            router.push({ path: '/login' })
          })
        } catch (error) {
          console.warn(error)
        }
      } else { // 请求接口失败
        // const errMsg = res.msg ? res.msg : '获取接口信息失败'
        // Notify(errMsg) // 显示错误信息
        return Promise.resolve(res)
      }
      return Promise.reject(res)
    },
    // 失败 http状态码非200
    error => {
      Dialog.alert({
        title: '网络异常',
        message: '当前网路异常，请稍后再试!!!'
      }).then(() => {
  
      })
      return Promise.reject(error)
    }
)
export default service
