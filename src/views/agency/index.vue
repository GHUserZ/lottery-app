<template>
  <div class="page">
    <nav-cmp :title="'代理中心'" :leftArrow="true" :fixed="true" @onClickLeft="back"></nav-cmp>
    <div class="lContent">
      <div class="banner">
        <div class="txt">
          <h1>恭喜你</h1>
          <p>拥有代理权限</p>
          <p>即可自己投注，也可招募</p>
          <p>下级赚取返点佣金！</p>
        </div>
      </div>
      <div class="panel">
        <h2 class="p-t">我的收益<a class="more" href="javascript:;" @click="skipTeamBill">团队帐变明细></a></h2>
        <div class="d-flex">
          <div>邀请人数 <p class="num">100</p></div>
          <div>返佣金额 <p class="num">￥100.12</p></div>
        </div>
      </div>
      <div class="panel">
        <div class="linkContent">
          <div class="line"></div>
          <van-grid :column-num="2" class="g-box" :border="false">
            <van-grid-item class="g-item"  v-for="(item,index) in linkData" :key="index" @click="handleClick(index)">
              <van-image class="img" :src="item.src" />
              <p>{{item.name}}</p>
            </van-grid-item>
          </van-grid>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navCmp from "../../components/nav";
import { getBankCardList } from "@/api/user";
import team from './image/team.png'
import stat from './image/stat.png'
import report from './image/report.png'
import game from './image/game.png'
export default {
  name: "agency",
  components: { navCmp },
  data() {
    return {
      linkData: [
        { src: team, name: "团队管理" },
        { src: stat, name: "统计分析" },
        { src: report, name: "盈亏报表" },
        { src: game, name: "游戏记录" }
      ]
    };
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
    },
    handleClick(i){
      switch(i){
        case 0:
          this.$router.push({name:'agencyTeam'})
          break
        case 1:
          this.$router.push({name:'agencyStat'})
          break
        case 2:
          this.$router.push({name:'agencyReport'})
          break
        case 3:
          this.$router.push({name:'agencyGame'})
          break
      }
    },
    skipTeamBill(){
      this.$router.push({name:'teamBill'})
    }
  },
  watch: {}
};
</script>
<style scoped lang="scss">
@import "../../assets/css/reset.css";
@import "../../assets/scss/common.scss";
.page {
  background-color: #f0f1f6;
  overflow: hidden;
}
.lContent {
  position: relative;
  height: calc(100% - 46px);
  overflow: auto;
}
.banner {
  width: 100%;
  height: 2.5rem;
  background: url("./image/banner.png") no-repeat;
  background-size: 100% 2.5rem;
  .txt {
    color: #fff;
    padding: 0.49rem 0 0 0.94rem;
    line-height: 1.2;
    h1 {
      font-size: 0.4rem;
      color: #fff;
      padding-bottom: 0.26rem;
    }
    p {
      font-size: 0.26rem;
    }
  }
}
.panel{
  background-color: #fff;
  margin: .2rem .3rem;
}
.p-t{
  position: relative;
  font-size: .28rem;
  font-weight: normal;
  color: #333333;
  padding:.2rem;
  border-bottom: 1px solid #ccc;
  .more{
    position: absolute;
    right: .2rem;
    color: #333;
  }
}
.d-flex{
  display:flex;
  >div{
    width: 100%;
    font-size: .24rem;
    color: #4D4D4DFF;
    padding: .2rem;
    &:first-child{
      border-right: 1px solid #ccc;
    }
  }
}
.linkContent{
  position: relative;
  .img{
    width: .7rem;
    height: .7rem;
  }
  p{
    font-size: .28rem;
    color: #4D4D4DFF;
    margin-top: .25rem;
  }
}
</style>
