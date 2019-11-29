<template>
  <div class="page">
    <nav-cmp
      :title="'提现'"
      :leftArrow="true"
      :fixed="true"
      @onClickLeft="back"
      :price="userInfo.balance"
    ></nav-cmp>
    <div class="lContent">
      <van-cell :title="bankName" size="large" class="cell" @click="showBankList">
        <van-icon name="arrow" slot="right-icon" style="line-height:inherit" />
      </van-cell>
      <van-cell size="large" class="money-box">
        <div class="symbol">¥</div>
        <div class="input-inner">
          <input type="text" v-model="money" :placeholder="moneyPlace" />
        </div>
        <div class="all">全部</div>
      </van-cell>
      <div class="pay-money">
        <span>资金密码</span>
        <input type="password" v-model="password" placeholder="请输入资金密码"  @input="getInputValue"/>
      </div>
      <div class="p-button-box">
        <van-button type="default" class="p-button p-button-c" @click="sumbit" :disabled="disabled">确认提款</van-button>
      </div>
      <div class="tips">
        <p>提现注意事项</p>
        <p>1. 提现服务时间为24小时。</p>
        <p>
          2. 同姓名同卡号等同帐号，每日提现总金额最高 10,000,000 元
          整，提领次数上限为 100 次。
        </p>
        <p>
          3. 提现需进行充值金额满100%的投注，若未满足消费流水将无法
          成功提现。(例：充值100元需投注100元才能进行提现)
        </p>
        <p>4. 银行卡请务必正确填写开户银行和银行卡号码、持卡人姓名。</p>
        <p>
          5. 新设定好的银行卡，需要于设定完成的6小时后才可以进行提现
          申请。
        </p>
        <p>
          6. 当您提现申请完成后，我们承诺，除非遇到非可控因素，我们
          将为您提供1分钟快速到账的提款服务。
        </p>
      </div>
    </div>
    <van-popup class="bankPopup"   v-model="show" position="bottom" :style="{ height: '35%' }" closeable close-icon-position="top-left">
      <h2 class="title">选择银行卡</h2>
      <van-radio-group v-model="radio" @change="setBlankInfo">
        <van-cell-group>
          <van-cell title="交通银行（1234）" clickable @click="radio = '交通银行（1234）'" class="cellRadio" >
            <van-radio slot="right-icon" name="交通银行（1234）" />
          </van-cell>
          <van-cell title="建设银行（1234）" clickable @click="radio = '建设银行（1234）'" class="cellRadio">
            <van-radio slot="right-icon" name="建设银行（1234）" />
          </van-cell>
          <van-cell title="中国银行（1234）" clickable @click="radio = '中国银行（1234）'" class="cellRadio">
            <van-radio slot="right-icon" name="中国银行（1234）" />
          </van-cell>
          <van-cell title="工商银行（1234）" clickable @click="radio = '工商银行（1234）'" class="cellRadio">
            <van-radio slot="right-icon" name="工商银行（1234）" />
          </van-cell>
        </van-cell-group>
        <van-cell title="添加银行卡+" is-link />
      </van-radio-group>
    </van-popup>
  </div>
</template>

<script>
import navCmp from "../../../../components/nav";
import { mapGetters } from "vuex";
import { getBankCardList } from "@/api/user";
let timeOutEvent = null;
export default {
  name: "bank",
  components: { navCmp },
  data() {
    return {
      password: "",
      money: "",
      moneyPlace:'可转出到卡 32485.30',
      bankName: "交通银行（1234）",
      show: false,
      radio: "交通银行（1234）",
      disabled:true,
      pageNo:1,
      pageSize:100,
      list: [
        {
          bankId: 0,
          bankName: 0,
          branchBankId: 0,
          branchBankName: 0,
          cardNo: "string",
          created: "2019-11-29T02:15:56.490Z",
          id: 0,
          modified: "2019-11-29T02:15:56.490Z",
          name: "string",
          userId: 0
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  created() {},
  mounted() {
    this.getBankCardList();
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    async getBankCardList() {
      let params = {
        pageNo:this.pageNo,
        pageSize:this.pageSize
      }
      await getBankCardList(params).then(res => {
        console.log(res);
      });
    },
    getInputValue(){
     this.password!=='' ? this.disabled = false : this.disabled =true
    },
    showBankList(){
      this.show = true
    },
    // 确认提现
    sumbit(){
      this.$toast('点击了确认提款')
    },
    setBlankInfo(name){
      this.bankName = name
      this.show = false
    }
  },
  watch: {}
};
</script>

<style scoped lang="scss">
@import "../../../../assets/css/reset.css";
.page {
  background-color: #f0f1f6;
  overflow: hidden;
}
.lContent {
  position: relative;
  height: calc(100% - 46px);
  overflow: auto;
}
.cell {
  &.van-cell:not(:last-child)::after {
    left: 0;
  }
}
.money-box {
  > div {
    display: flex;
  }
}
.symbol {
  width: 12%;
  font-size: 0.9rem;
  color: #eaa10f;
  height: 0.6rem;
}
.input-inner {
  width: 78%;
  input{
    width:100%;
    height: 100%;
  }
}
.all {
  width: 10%;
  text-align: center;
  font-size: .3rem;
  color:#FD8727FF;
}
.p-button-box {
  padding: 0.3rem;
}
.pay-money {
  position: relative;
  display: flex;
  padding: 0.2rem 0.3rem 0;
  span {
    display: block;
    width: 24%;
    font-size: 0.3rem;
    color: #4d4d4dff;
    line-height: 0.68rem;
  }
  input {
    width: 76%;
    height: 0.66rem;
    text-indent: 0.25rem;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(204, 204, 204, 1);
    font-size: 0.3rem;
    color: #333;
  }
}
.tips {
  padding: 0.3rem;
  font-size: 0.24rem;
  color: #808080ff;
  line-height: 0.4rem;
}
.bankPopup{
  .title{
    height: .6rem;
    line-height: .6rem;
    font-size: .24rem;
    color: #333;
    text-align: center;
  }
}
</style>
<style scoped>
  .cellRadio >>> .van-radio__icon .van-icon{
    border: none;
  }
  .cellRadio >>> .van-radio__icon--checked .van-icon{
    background: #08c558;
  }
  .page >>> .van-cell:not(:last-child)::after{
    left: 0
  }
  .page >>> .van-popup__close-icon--top-left{
    top: .14rem;
    color: #333;
  }
</style>
