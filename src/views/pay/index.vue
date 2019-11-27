<template>
  <div class="page">
    <nav-cmp :title="'充值中心'" :fixed="true" :price="userInfo.balance"></nav-cmp>
    <div class="lContent">
      <van-cell class="cell" is-link to="/payBys">
        <img src="./image/logo.png" class="logo" alt="" slot="icon">
        <template slot="title">
          <span class="custom-title">BYS</span>
        </template>
        <van-tag type="danger">HOT</van-tag>
      </van-cell>
      <van-cell class="cell" is-link to="/payMoney">
        <img src="./image/money.png" class="money" alt="" slot="icon">
        <template slot="title">
          <span class="custom-title">人民币</span>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
import navCmp from "../../components/nav";
import logoImg from './image/logo.png'
import moneyImg from './image/money.png'
import {mapGetters} from 'vuex'
export default {
  name: 'pay',
  components: {navCmp},
  data() {
    return {
      imgData:[logoImg,moneyImg]
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {}
}
</script>

<style scoped lang="scss">
.page{
  background-color: #f0f1f6
}
.logo{
  width: .65rem;
  height: .77rem;
}
.money{
  width: .54rem;
  height: .67rem;
}
.cell{
  position: relative;
}
.cell{
  .van-icon{
    position:absolute;
    right: .29rem;
    top: 50%;
    color: #333333;
    transform: translateY(-50%);
  }
  .van-tag{
    background-color: #FF0000;
    font-size: .2rem;
    margin:.2rem .4rem 0 0;
  }
}
.custom-title{
  font-size: .3rem;
  color: #333;
  margin-left:.29rem;
  line-height: 35px;
}
</style>
