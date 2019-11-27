<template>
  <div class="page">
    <navCom :title="'人民币充值'" class="nav" :leftArrow="true" @onClickLeft="back" />
    <div class="lContent">
      <div class="pay-wrapper">
        <div class="pay-money">
          <span>充值金额</span>
          <input v-model="money" type="text" placeholder="请输入充值金额">
          <p class="tips">充值范围100-5000元</p>
        </div>
        <div class="money-wrapper">
          <div :class="money===item.id ? 'active':''" v-for="item in payMoney" :key="item.id" @click="selectMoney(item.id)">{{item.money}}元</div>
        </div>
        <van-button type="default" class="p-button">确认充值</van-button>
      </div>
      <footer>
        <p>充值须知:</p>
        <p>1.请使用支付宝(微信)等方式转账到以上账户。</p>
        <p>2.若提供的是二维码，请使用支付宝(微信)扫- -扫进行转账。若提供的是支付宝(微信)账号或银行账号，请使用支付宝(微信)转账到银行卡的方式进行转账。</p>
        <p>3.请正确填写您的姓名和充值金额。设置了支付宝(微信)昵称的请直接填写昵称。</p>
        <p>4.请务必转账后再提交订单，否则无法及时查到您的款项!转账1笔提交一次，请勿重复提交订单。</p>
        <p>5.可以使用其它手机扫二维码进行充值，也可以将-维码保存到相册再使用支付宝识别相册中的二维码进行充值，由于本二维码经常更换，充值前务必重新保存最新的二维码。</p>
        <p>6.充值过程中如遇到任何疑问，请及时联系我们的客服为您解答。</p>
      </footer>
    </div>
  </div>
</template>

<script>
import navCom from "../../components/nav";
export default {
  name: "money",
  components: { navCom },
  data() {
    return {
      money:'',
      payMoney:[{money:100,id:100},{money:300,id:300},{money:500,id:500},{money:1000,id:1000},{money:2000,id:2000},{money:5000,id:5000}]
    };
  },
  created() {},
  mounted() {
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    selectMoney(money){
      this.money = money
    }
  },
  watch: {
    money(){
      console.log(this.money)
    }
  }
};
</script>

<style scoped lang="scss">
.page {
  background-color: #f0f1f6;
}
.lContent{
  padding-left: .3rem;
  padding-right: .3rem;
}
.p-button {
  background: linear-gradient(
    90deg,
    rgba(233, 26, 30, 1),
    rgba(254, 80, 63, 1)
  );
  border-radius: 0.1rem;
  margin-bottom: .4rem;
}
.pay-money{
  position: relative;
  display: flex;
  height:1.24rem;
  padding-top: .39rem;
  span{
    display: block;
    width:20%;
    font-size: .3rem;
    color: #333333;
    padding-top: .1rem;
  }
  input{
    width:80%;
    height:.66rem;
    text-indent: .25rem;
    background:rgba(255,255,255,1);
    border:1px solid rgba(204, 204, 204, 1);
    font-size: .3rem;
    color: #333;
  }
  .tips{
    position: absolute;
    bottom: .12rem;
    left: 20%;
    font-size: .24rem;
    color: #EB3828;
  }
}
.money-wrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
  margin-top: .4rem;
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: .4rem;
    width:2rem;
    height:1.33rem;
    background:rgba(255,255,255,1);
    border:1px solid rgba(204, 204, 204, 1);
    border-radius:.1rem;
    font-size: .38rem;
    color: #666;
  }
  div.active{
    background-color: #fd8727;
    color:#fff;
    border-color: #fd8727;
  }
}
footer {
  width: 6.91rem;
  margin: auto;
  font-size: 0.24rem;
  color: #808080;
  line-height: .4rem;
}
</style>
