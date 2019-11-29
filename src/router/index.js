import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import ('@/views/index'),
    meta: { title: '首页' }
  },
  {
    path: "/pay",
    name: "pay",
    component: () => import ('@/views/pay/index'),
    meta: { title: '充值' }
  },
  {
    path: "/payBys",
    name: "payBys",
    component: () => import ('@/views/pay-bys/index'),
    meta: { title: 'BYS充值' }
  },
  {
    path: "/payMoney",
    name: "payMoney",
    component: () => import ('@/views/pay-money/index'),
    meta: { title: '人民币充值' }
  },
  {
    path: "/buy",
    name: "buy",
    component: () => import ('@/views/buy/index'),
    meta: { title: '购彩' }
  },
  {
    path: "/discounts",
    name: "discounts",
    component: () => import ('@/views/discounts/index'),
    meta: { title: '优惠' }
  },
  {
    path: "/me",
    name: "me",
    component: () => import ('@/views/me/index'),
    meta: { title: '我的' }
  },
  {
    path: "/meWithdraw",
    name: "meWithdraw",
    component: () => import ('@/views/me/withdraw/index'),
    meta: { title: '我要提现' }
  },
  {
    path: "/meWithdrawBys",
    name: "meWithdrawBys",
    component: () => import ('@/views/me/withdraw/bys/index'),
    meta: { title: 'BYS提币' }
  },
  {
    path: "/meWithdrawBank",
    name: "meWithdrawBank",
    component: () => import ('@/views/me/withdraw/bank/index'),
    meta: { title: '银行卡' }
  },
  {
    path: "/meWithdrawAddress",
    name: "meWithdrawAddress",
    component: () => import ('@/views/me/withdraw/address/index'),
    meta: { title: 'BYS地址管理' }
  },
  {
    path: "/meAddAddress",
    name: "meAddAddress",
    component: () => import ('@/views/me/withdraw/address/addAddress/index'),
    meta: { title: 'BYS地址管理' }
  },
  {
    path: "/register",
    name: "register",
    component: () => import ('@/views/register/index'),
    meta: { title: '注册' }
  },
  {
    path: "/login",
    name: "login",
    component: () => import ('@/views/login/index'),
    meta: { title: '登录' }
  }
  ,
  {
    path: "/setting",
    name: "setting",
    component: () => import ('@/views/setting/index'),
    meta: { title: '设置' }
  },
  {
    path: "/help",
    name: "help",
    component: () => import ('@/views/help/index'),
    meta: { title: '帮助中心' }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
export default router;
