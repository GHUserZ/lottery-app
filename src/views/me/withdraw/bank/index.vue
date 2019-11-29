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
      <van-cell :title="bankName" size="large" class="cell">
        <van-icon name="arrow" slot="right-icon" style="line-height:inherit" />
      </van-cell>
      <van-cell size="large" class="money-box">
        <div class="symbol">¥</div>
        <div class="input-inner">
          <input type="text" placeholder="可转出到卡 32485.32" />
        </div>
        <div class="all">全部</div>
      </van-cell>
      <div class="pay-money">
        <span>资金密码</span>
        <input type="password" placeholder="请输入资金密码" />
      </div>
      <div class="p-button-box">
        <van-button type="default" class="p-button p-button-c" @click="2">确认提款</van-button>
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
    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
      <van-radio-group v-model="bankData">
        <van-cell-group>
          <van-cell title="单选框 1" clickable @click="radio = '1'">
            <van-radio slot="right-icon" name="1" />
          </van-cell>
          <van-cell title="单选框 2" clickable @click="radio = '2'">
            <van-radio slot="right-icon" name="2" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
      <van-cell title="添加银行卡+" is-link />
    </van-popup>
  </div>
</template>

<script>
import navCmp from "../../../../components/nav";
import { mapGetters } from "vuex";
import { addAddress } from "@/api/user";
let timeOutEvent = null;
export default {
  name: "bank",
  components: { navCmp },
  data() {
    return {
      address: "",
      remark: "",
      bankName: "交通银行 (1234)",
      show: true,
      bankData:''
    };
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  created() {},
  mounted() {},
  methods: {
    back() {
      this.$router.go(-1);
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
}
.all {
  width: 10%;
  text-align: center;
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
</style>
