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
    component: () => import ('@/views/pay/pay-bys/index'),
    meta: { title: 'BYS充值' }
  },
  {
    path: "/payMoney",
    name: "payMoney",
    component: () => import ('@/views/pay/pay-money/index'),
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
    component: () => import ('@/views/me/withdraw/address/add/index'),
    meta: { title: 'BYS地址管理' }
  },
  {
    path: "/meSafe",
    name: "meSafe",
    component: () => import ('@/views/me/safe/index'),
    meta: { title: '信息安全' }
  },
  {
    path: "/bankCard",
    name: "bankCard",
    component: () => import ('@/views/me/bankCard/index'),
    meta: { title: '银行卡' }
  },
  {
    path: "/loginHistory",
    name: "loginHistory",
    component: () => import ('@/views/me/loginHistory/index'),
    meta: { title: '登录历史' }
  },
  {
    path: "/addBankCard",
    name: "addBankCard",
    component: () => import ('@/views/me/bankCard/add/index'),
    meta: { title: '添加银行卡' }
  },
  {
    path: "/agency",
    name: "agency",
    component: () => import ('@/views/agency/index'),
    meta: { title: '代理中心' }
  },
  {
    path: "/agencyRegister",
    name: "agencyRegister",
    component: () => import ('@/views/agency/register/index'),
    meta: { title: '代理注册账号' }
  },
  {
    path: "/agencyTeam",
    name: "agencyTeam",
    component: () => import ('@/views/agency/team/index'),
    meta: { title: '团队管理' }
  },
  {
    path: "/teamBill",
    name: "teamBill",
    component: () => import ('@/views/agency/team/subpage/bill'),
    meta: { title: '账变明细' }
  },
  {
    path: "/agencyPromote",
    name: "agencyPromote",
    component: () => import ('@/views/agency/promote/index'),
    meta: { title: '代理推广' }
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
