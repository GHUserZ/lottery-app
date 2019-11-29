<template>
  <div class="page">
    <nav-cmp :title="'登录历史'" :leftArrow="true" :fixed="true" @onClickLeft="back"></nav-cmp>
    <div class="lContent">
      <ul class="history">
        <li>
          <h2 class="title">登录地址：中国香港</h2>
          <div class="loginInfo">
            <div>IP：47.43.12.100</div>
            <div>时间：2019-10-19 12:21:32</div>
          </div>
        </li>
        <li>
          <h2 class="title">登录地址：中国香港</h2>
          <div class="loginInfo">
            <div>IP：47.43.12.100</div>
            <div>时间：2019-10-19 12:21:32</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import navCmp from "../../../components/nav";
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
    },
    async getBankCardList() {
      await getBankCardList().then(res => {
        console.log(res);
      });
    }
  },
  watch: {}
};
</script>
<style scoped lang="scss">
@import "../../../assets/css/reset.css";
.page {
  background-color: #f0f1f6;
  overflow: hidden;
}
.lContent {
  position: relative;
  height: calc(100% - 46px);
  overflow: auto;
}
.history{
  li{
    padding: .3rem;
    background-color: #fff;
    border-bottom: 1px solid #CFCFCFFF;
    &:last-child{
      border-bottom: none;
    }
    .title{
      font-size: .3rem;
      color: #333;
      font-weight: normal;
    }
  }
  .loginInfo{
    font-size: .24rem;
    color: #808080;
    display: flex;
    justify-content: space-between;
    margin-top: .18rem;
    line-height: 1.4;
  }
}
</style>
