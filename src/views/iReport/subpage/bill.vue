<template>
  <div class="page">
    <nav-cmp :title="'账变明细'" :leftArrow="true" :fixed="true" @onClickLeft="back"></nav-cmp>
    <div class="lContent">
      <div class="filter-top d-flex">
        <div class="select-inner">
          <select name id>
            <option value="0">全部</option>
            <option value="1">用户撤单</option>
            <option value="2">下注</option>
            <option value="3">充值</option>
            <option value="4">提现</option>
          </select>
        </div>
        <div class="select-inner">
          <select name id>
            <option value="0">2019-01</option>
          </select>
        </div>
        <div class="select-inner">
          <select name id>
            <option value="0">所有下级</option>
            <option value="1">直属下级</option>
            <option value="2">自己</option>
          </select>
        </div>
      </div>
      <div class="list-wrapper">
        <van-list v-model="loading" :finished="finished" finished-text="" @load="onLoad">
          <li>
            <div class="d-flex list-top">
              <span>用户撤单</span>
              <span>+100.00</span>
            </div>
            <div class="d-flex list-inner">
              <span>testbys01</span>
              <span>余额：500.00</span>
            </div>
            <div class="d-flex list-bottom">
              <span>06-19 21:13</span>
            </div>
          </li>
          <li>
            <div class="d-flex list-top">
              <span>用户撤单</span>
              <span>+100.00</span>
            </div>
            <div class="d-flex list-inner">
              <span>testbys01</span>
              <span>余额：500.00</span>
            </div>
            <div class="d-flex list-bottom">
              <span>06-19 21:13</span>
            </div>
          </li>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
import navCmp from "../../../components/nav";
import { getBankCardList } from "@/api/user";
export default {
  name: "bill",
  components: { navCmp },
  data() {
    return {
      list: [],
      loading: false, // 是否处于加载状态
      finished: false, // 是否已加载完所有数据
      pageNo: 0,
      pageSize: 15
    };
  },
  created() {},
  mounted() {},
  methods: {
    onLoad() {
      // 请求接口数据
      // announcementList(this.pageNum+1,this.pageSize,this.secCode).then(res => {
      //   var data = res.data.data
      //   // 拼接数据
      //   this.list = this.list.concat(data.list)
      //   // 加载状态结束
      //   this.loading = false
      //   this.pageNo++
      //   this.pageTotal = data.total
      //   // 数据全部加载完成
      //   if (this.list.length >= data.total) {
      //     this.finished = true
      //   }
      // })
      setTimeout(() => {
        this.loading = false;
        this.finished = true;
      });
    },
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
@import "../../../assets/scss/common.scss";
.page {
  background-color: #f0f1f6;
  overflow: hidden;
}
.lContent {
  position: relative;
  height: calc(100% - 46px);
  overflow: auto;
  padding-top: 0;
}
.filter-top {
  > div {
    width: 100%;
    margin: 0.2rem;
  }
  select {
    font-size: 0.24rem;
    color: #4d4d4d;
  }
}
.list-wrapper{
    margin: 0 .2rem;
    li{
        font-size: .24rem;
        color: #4D4D4D;
        background-color: #fff;
        border-radius: .1rem;
        line-height: 1.2;
        margin-bottom: .2rem;
    }
    .list-top{
        border-bottom: 1px solid #ccc;
    }
    .d-flex{
        padding:.2rem;
        justify-content: space-between;
    }
    .list-bottom{
        padding-top: 0;
    }
}
</style>
