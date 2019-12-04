<template>
  <div class="page">
    <nav-cmp :title="'资金明细'" :leftArrow="true" :fixed="true" @onClickLeft="back"></nav-cmp>
    <div class="lContent">
      <van-cell-group>
        <van-cell class="cell" :to="`/financialDetails?type=${1}`">
          <img src="./image/account.png" class="account" alt slot="icon" />
          <template slot="title">
            <span class="custom-title">充值明细</span>
          </template>
          <van-icon slot="right-icon" name="arrow" style="line-height: inherit;" />
        </van-cell>
        <van-cell class="cell" :to="`/financialDetails?type=${2}`">
          <img src="./image/cz.png" class="cz" alt slot="icon" />
          <template slot="title">
            <span class="custom-title">提现明细</span>
          </template>
          <van-icon slot="right-icon" name="arrow" style="line-height: inherit;" />
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import navCmp from "../../components/nav";
import { getBankCardList } from "@/api/user";
export default {
  name: "",
  components: { navCmp },
  data() {
    return {};
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
@import "../../assets/css/reset.css";
.page {
  background-color: #f0f1f6;
  overflow: hidden;
}
.lContent {
  position: relative;
  height: calc(100% - 46px);
  overflow: auto;
}
.cell{
  font-size: .3rem;
  color: #333;
}
.account {
  width: 0.36rem;
  height: 0.32rem;
}
.cz {
  width: 0.36rem;
  height: 0.26rem;
}
.account,.cz{
  padding-right: .2rem;
  margin-top: .08rem;
}
</style>
