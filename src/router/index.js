import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import ('@/views/index')
  },
  {
    path: "/pay",
    name: "pay",
    component: () => import ('@/views/pay/index')
  },
  {
    path: "/buy",
    name: "buy",
    component: () => import ('@/views/buy/index')
  },
  {
    path: "/discounts",
    name: "discounts",
    component: () => import ('@/views/discounts/index')
  },
  {
    path: "/me",
    name: "me",
    component: () => import ('@/views/me/index')
  },
  {
    path: "/register",
    name: "register",
    component: () => import ('@/views/register/index')
  },
  {
    path: "/login",
    name: "login",
    component: () => import ('@/views/login/index')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
export default router;
