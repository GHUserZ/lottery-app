<template>
  <div class="page">
    <navCom :title="'帮助中心'" class="nav" :leftArrow="true" @onClickLeft="back" />
    <div class="lContent">
      <div class="card-item">
        <h2>充值问题</h2>
        <div class="content">
          <ul>
            <li>为什么充值未到账？</li>
            <li>如何使用网银充值？</li>
            <li>如何使用微信充值？</li>
            <li>如何使用支付宝充值？</li>
          </ul>
        </div>
      </div>
      <div class="card-item">
        <h2>彩票以外产品</h2>
        <div class="content">
          <ul>
            <li>如何开始游戏？</li>
            <li>产品介绍</li>
          </ul>
        </div>
      </div>
      <div class="card-item">
        <h2>提现问题</h2>
        <div class="content">
          <ul>
            <li>为什么提现未到账？</li>
            <li>如何提现？</li>
            <li>流水(销量)是什么？</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navCom from "../../components/nav";
export default {
  name: "money",
  components: { navCom },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/css/reset.css";
.page {
  background-color: #f0f1f6;
}
.lContent {
    padding-left: .3rem;
    padding-right: .3rem;
}
.card-item{
    h2{
        background: red;
        border-top-left-radius: .1rem;
        border-top-right-radius: .1rem;
        font-size: .24rem;
        height: .65rem;
        line-height: .65rem;
        color: #fff;
        font-weight: normal;
        padding-left: .2rem;
    }
    border-radius:.1rem;
    margin-top: .2rem;
    background: #fff;
    ul{
        padding: .2rem;
        font-size: .24rem;
        color: #4D4D4D;
        a{
            color: #4D4D4D;
        }
        li{
            line-height: 1.4;
            margin-bottom: .2rem;
        }
    }
}
</style>
