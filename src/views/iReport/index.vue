<template>
  <div class="page">
    <nav-cmp :title="'个人报表'" :leftArrow="true" :fixed="true" @onClickLeft="back"></nav-cmp>
    <div class="lContent">
      <van-tabs v-model="active" sticky  :offset-top='45'>
        <van-tab v-for="(item ,index) in tabData" :key="index" :title="item.name">
         <component v-bind:is="current[index]"></component>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
// import navCmp from "../../components/nav";
import { getBankCardList } from "@/api/user";

export default {
  name: "",
  components: { 
    'bill':() =>  import('./subpage/bill'),
    'game':() =>  import('./subpage/game'),
    'stat':() =>  import('./subpage/stat'),
    'gainLoss':() =>  import('./subpage/gainLoss'),
    'navCmp':() =>  import('../../components/nav')
  },
  data() {
    return {
      active:0,
      tabData:[{name:'账变明细'},{name:'游戏记录'},{name:'个人统计'},{name:'个人盈亏'}],
      current: ['bill', 'game', 'stat', 'gainLoss'],
    };
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
</style>
