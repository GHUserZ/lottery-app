<template>
  <div class="page">
    <nav-cmp
      :title="'统计分析'"
      :leftArrow="true"
      :fixed="true"
      @onClickLeft="back"
      @onClickRight="onClickRight"
    ></nav-cmp>
    <div class="lContent">
      <h2 class="c-title">个人统计<img class="calendar" src="../image/calendar.png" alt="" @click="onClickRight"></h2>
      <div class="panel">
        <van-grid :column-num="4" :gutter="10">
          <van-grid-item class="grid-item">
            <p class="name">总充值</p>
            <img class="t_1" src="../image/t_2.png" alt />
            <p class="txt">{{data.rechargeAmount | formatVolume}}</p>
          </van-grid-item>
          <van-grid-item class="grid-item">
            <p class="name">总提现</p>
            <img class="t_2" src="../image/t_3.png" alt />
            <p class="txt">{{data.embodyAmount | formatVolume}}</p>
          </van-grid-item>
          <van-grid-item class="grid-item">
            <p class="name">总下注</p>
            <img class="t_3" src="../image/t_5.png" alt />
            <p class="txt">{{data.orderAmount | formatVolume}}</p>
          </van-grid-item>
          <van-grid-item class="grid-item">
            <p class="name">总派奖</p>
            <img class="t_4" src="../image/t_6.png" alt />
            <p class="txt">{{data.winAmount | formatVolume}}</p>
          </van-grid-item>
          <van-grid-item class="grid-item">
            <p class="name">总返点</p>
            <img class="t_5" src="../image/t_7.png" alt />
            <p class="txt">{{data.directlySubRebateAmount | formatVolume}}</p>
          </van-grid-item>
          <van-grid-item class="grid-item">
            <p class="name">总礼金</p>
            <img class="t_6" src="../image/t_4.png" alt />
            <p class="txt">{{data.activitiesAmount | formatVolume}}</p>
          </van-grid-item>
          <van-grid-item class="grid-item">
            <p class="name">总佣金</p>
            <img class="t_7" src="../image/t_1.png" alt />
            <p class="txt">{{data.agentRebateAmount | formatVolume}}</p>
          </van-grid-item>
          <van-grid-item class="grid-item">
            <p class="name">总盈亏</p>
            <img class="t_8" src="../image/t_8.png" alt />
            <p class="txt">{{data.totalProfitAndLoss | formatVolume}}</p>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <van-popup v-model="show" position="bottom">
      <van-picker :columns="columns" @change="onChange" show-toolbar  @cancel="show = false"  @confirm="onConfirm"/>
    </van-popup>
  </div>
</template>

<script>
import navCmp from "../../../components/nav";
import { userStatistical } from "@/api/user";
import calendarImg from "../image/calendar.png";
import dateMixin from '../../../mixins/date'
export default {
  name: "stat",
  mixins:[dateMixin],
  components: { navCmp },
  data() {
    return {
      calendarImg: calendarImg,
      show: false,
      data:{}
    };
  },
  created() {},
  mounted() {
    this.userStatistical()
    this.getYesterday()
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    async userStatistical() {
      let params = {
        modifiedBegin:this.modifiedBegin,
        modifiedEnd: this.modifiedEnd
      };
      await userStatistical(params).then(res => {
        this.data = res.data
      }).catch((err) => {
        this.$toast(err.message)
      });
    },
    onClickRight() {
      this.show = true;
    },
    onConfirm() {
      this.show = false;
      this.userStatistical()
    }
  },
  watch: {}
};
</script>
<style scoped lang="scss">
@import "../../../assets/css/reset.css";
@import "../../agency/scss/style.scss";
.page {
  background-color: #f0f1f6;
  overflow: hidden;
}
.lContent {
  position: relative;
  height: calc(100% - 46px);
  overflow: auto;
  padding-top: 0
}
.panel {
  margin: 0.2rem 0 0.4rem;
}
.grid-item {
  height: 2.09rem;
  .name {
    font-size: 0.24rem;
    color: #333;
    font-weight: bold;
  }
  img {
    width: 0.78rem;
    height: 0.78rem;
    margin: 0.2rem 0;
  }
  .txt {
    font-size: 0.24rem; 
    color: #808080;
    min-height: .3rem;
  }
}
.c-title{
    position: relative;
}
.calendar{
    position: absolute;
    right: .3rem;
    top: 50%;
    transform: translateY(-50%);
    width: .31rem;
    height: .31rem;
}
</style>
<style scoped>
.page >>> .van-nav-bar__right img {
  width: 0.29rem;
  height: 0.29rem;
}
.page >>> .grid-item .van-grid-item__content {
  padding: 0.2rem 0;
}
.page >>> [class*="van-hairline"]::after {
  border: none;
}
</style>