<template>
  <div class="page">
    <nav-cmp :title="'游戏记录'" :leftArrow="true" :fixed="true" @onClickLeft="back"></nav-cmp>
    <div class="lContent">
      <div class="top-bar">
        <ul class="tabs">
          <li
            @click="onTabClick(item.id)"
            :class="winStatus===item.id ? 'active' : ''"
            v-for="item in tabData"
            :key="item.id"
          >{{item.name}}</li>
        </ul>
        <van-dropdown-menu>
          <van-dropdown-item v-model="value" :options="option1" class="dropdown" @change="dropdownChange"/>
        </van-dropdown-menu>
      </div>
      <van-list class="game-wrapper" v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <li v-for="(item,index) in list"  :key="index" class="game-item">
          <div class="game-info">
            <h2 class="title">编号：weih329rh9823hf</h2>
            <div class="game-info-inner">
              <p>安徽快3（201910170864期）</p>
              <p>投注内容：单</p>
              <p>注数：1</p>
              <p>投注金额：10</p>
              <p>开奖号码：</p>
              <p>中奖金额：0.00</p>
              <p>状态：待开奖</p>
              <van-button type="default" class="p-button-s">撤单</van-button>
            </div>
          </div>
        </li>
      </van-list>
    </div>
  </div>
</template>

<script>
import navCmp from "../../../components/nav";
import { getTeamOrderRecords } from "@/api/agency";
export default {
  name: "",
  components: { navCmp },
  data() {
    return {
      value: "全部彩种",
      option1: [
        { text: "全部彩种", value: "全部彩种" },
        { text: "江苏快3", value: "江苏快3" },
        { text: "安徽快3", value: "安徽快3" },
        { text: "极速快3", value: "极速快3" },
        { text: "五分六合彩", value: "五分六合彩" },
        { text: "PC蛋蛋", value: "PC蛋蛋" }
      ],
      list: [],
      loading: false, // 是否处于加载状态
      finished: false, // 是否已加载完所有数据
      pageNo: 0,
      pageSize: 15,
      tabData: [{name:"待开奖",id:4}, {name:"未中奖",id:1}, {name:"已中奖",id:2}, {name:"已撤单",id:3}],
      winStatus: 4
    };
  },
  created() {},
  mounted() {
    this.getTeamOrderRecords()
  },
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
    onTabClick(i) {
      this.winStatus = i;
    },
    async getTeamOrderRecords() {
      let params = {
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        winStatus: this.winStatus,
        lotteryName: this.value
      };
      await getTeamOrderRecords(params).then(res => {
        this.list = this.list.concat(res.data.list)
        console.log(res)
      });
    },
    dropdownChange(v){
      console.log(v)
    }
  },
  watch: {
    winStatus(){
      this.getTeamOrderRecords()
    },
    value(){
      this.getTeamOrderRecords()
    }
  }
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
.top-bar{
  width: 100%;
  position: fixed;
  top:46px;
  z-index: 100;
}
.tabs {
  display: flex;
  justify-content: center;
  li {
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
    background-color: #fff;
    border: 1px solid #ebebeb;
    box-sizing: border-box;
    margin: 0 0 -1px -1px;
    border-top: none;
    font-size: 0.24rem;
    color: #333;
    &.active {
      color: #fff;
      background-color: #f10f11;
    }
  }
}
.dropdown {
  .van-cell__title {
    font-size: 18px;
  }
}
.game-wrapper{
  margin-top: 1.4rem;
}
.game-item{
  margin: .11rem .3rem;
}
.game-info{
  border-radius: .1rem;
  background-color: #fff;
  .title{
    font-weight: normal;
    border-bottom: 1px solid #EBEBEB;
    padding: .2rem;
    font-size: .24rem;
    color: #4D4D4D;
  }
  .game-info-inner{
    position: relative;
    padding: .2rem ;
    p{
      font-size: .24rem;
      color: #4D4D4D;
      margin-bottom: .2rem;
      &:last-child{
        margin-bottom: 0;
      }
    }

  }
}
.p-button-s{
  position: absolute;
  right:.2rem;
  bottom: .4rem;
  border-radius: .07rem;
}
</style>
<style scoped>
.dropdown >>> .van-cell__title {
  font-size: 0.24rem;
  color: #333;
  text-align: center;
}
.dropdown >>> .van-cell__value {
  display: none;
}
.dropdown >>> .van-dropdown-item__option--active,
.page >>> .van-dropdown-menu__title--active {
  color: #333;
}
.page >>> .van-dropdown-menu__title {
  font-size: 0.24rem;
  color: #333;
}
.page >>> .van-dropdown-menu{
  height: .66rem;
}
</style>
