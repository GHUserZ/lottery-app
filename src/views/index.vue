<template>
  <div class="index">
    <component v-bind:is="current[active]"></component>
    <!-- 底部导航栏 -->
    <van-tabbar v-model="active" active-color="#EA1C1F" inactive-color="#838383">
        <van-tabbar-item >
          <span>首页</span>
          <img slot="icon" slot-scope="props" :src="props.active ? icon.home.active : icon.home.normal">
        </van-tabbar-item>
        <van-tabbar-item><span>充值</span><img slot="icon" slot-scope="props" :src="props.active ? icon.pay.active : icon.pay.normal"></van-tabbar-item>
        <van-tabbar-item><span>购彩</span><img slot="icon" slot-scope="props" :src="props.active ? icon.buy.active : icon.buy.normal"></van-tabbar-item>
        <van-tabbar-item><span>优惠</span><img slot="icon" slot-scope="props" :src="props.active ? icon.discounts.active : icon.discounts.normal"></van-tabbar-item>
        <van-tabbar-item><span>我的</span><img slot="icon" slot-scope="props" :src="props.active ? icon.me.active : icon.me.normal"></van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import home from '../assets/image/home.png'
import homeActive from '../assets/image/home-active.png'
import pay from '../assets/image/pay.png'
import payActive from '../assets/image/pay-active.png'
import buy from '../assets/image/buy.png'
import buyActive from '../assets/image/buy-active.png'
import discounts from '../assets/image/discounts.png'
import discountsActive from '../assets/image/discounts-active.png'
import me from '../assets/image/me.png'
import meActive from '../assets/image/me-active.png'
export default {
  name: '',
  components: {
    'home':() => import('@/views/home/index'),
    'pay':() => import('@/views/pay/index'),
    'buy':() => import('@/views/buy/index'),
    'discounts':() => import('@/views/discounts/index'),
    'me':() => import('@/views/me/index')
  },
  data() {
    return {
        active:0,
        current: ['home', 'pay', 'buy', 'discounts','me'],
        icon: {
        home: {
          normal: home,
          active: homeActive
        },
        pay: {
          normal: pay,
          active: payActive
        },
        buy: {
          normal: buy,
          active: buyActive
        },
        discounts: {
          normal: discounts,
          active: discountsActive
        },
        me: {
          normal: me,
          active: meActive
        }
      }
    }
  },
  created(){

  },
  mounted() {

  },
  methods: {},
  watch: {},
}
</script>

<style scoped lang="scss"></style>
