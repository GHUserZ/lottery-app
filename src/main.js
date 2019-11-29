import Vue from "vue"
import App from "@/App.vue"
import router from "@/router"
import store from "@/store"
import './permission'
import directive from '@/directive/sse' // 公共指令
import FastClick from 'fastclick' // 移动端点击
import VueLazyload from 'vue-lazyload' // 懒加载 
import Navigation from 'vue-navigation' // 页面缓存
import Vant from 'vant' // vant组件
import 'vant/lib/index.css'
import VueClipboard from 'vue-clipboard2' // 复制
Vue.use(VueClipboard)
// 懒加载配置
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'static/error.jpeg',
  loading: 'static/loading.gif',
  attempt: 1,
  try: 3
})
FastClick.attach(document.body)
Vue.use(Vant)
Vue.use(Navigation, {router})
Vue.use(directive)
Vue.config.productionTip = false;
import Vconsole from 'vconsole'
// new Vconsole()
/* eslint-disable */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
