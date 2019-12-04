<template>
  <div class="page">
    <nav-cmp
      :title="'统计分析'"
      :leftArrow="true"
      :fixed="true"
      @onClickLeft="back"
      :icon="calendarImg"
      @onClickRight="onClickRight"
    ></nav-cmp>
    <div class="lContent">
      <h2 class="c-title">团队统计</h2>
      <div class="panel">
        <van-grid :column-num="4" :gutter="10">
          <van-grid-item class="grid-item">
            <p class="name">团队佣金</p>
            <img class="t_1" src="./image/t_1.png" alt />
            <p class="txt">{{data.teamCommission | formatVolume}}</p>
          </van-grid-item>
          <van-grid-item class="grid-item">
            <p class="name">团队充值</p>
            <img class="t_2" src="./image/t_2.png" alt />
            <p class="txt">{{data.teamRechargeAmount | formatVolume}}</p>
          </van-grid-item>
          <van-grid-item class="grid-item">
            <p class="name">团队提现</p>
            <img class="t_3" src="./image/t_3.png" alt />
            <p class="txt">{{data.teamEmbodyAmount | formatVolume}}</p>
          </van-grid-item>
          <van-grid-item class="grid-item">
            <p class="name">团队余额</p>
            <img class="t_4" src="./image/t_4.png" alt />
            <p class="txt">{{data.teamBalance | formatVolume}}</p>
          </van-grid-item>
          <van-grid-item class="grid-item">
            <p class="name">团队下注</p>
            <img class="t_5" src="./image/t_5.png" alt />
            <p class="txt">{{data.teamOrderAmount | formatVolume}}</p>
          </van-grid-item>
          <van-grid-item class="grid-item">
            <p class="name">团队派奖</p>
            <img class="t_6" src="./image/t_6.png" alt />
            <p class="txt">{{data.teamWinAmount | formatVolume}}</p>
          </van-grid-item>
          <van-grid-item class="grid-item">
            <p class="name">团队返点</p>
            <img class="t_7" src="./image/t_7.png" alt />
            <p class="txt">{{data.teamRebate | formatVolume}}</p>
          </van-grid-item>
          <van-grid-item class="grid-item">
            <p class="name">团队盈亏</p>
            <img class="t_8" src="./image/t_8.png" alt />
            <p class="txt">{{data.teamProfitAndLoss | formatVolume}}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <h2 class="c-title">用户统计</h2>
      <div class="panel">
        <van-grid :column-num="4" :gutter="10">
          <van-grid-item class="grid-item">
            <p class="name">团队人数</p>
            <img class="t_1" src="./image/u_1.png" alt />
            <p class="txt">{{data.teamNum}}人</p>
          </van-grid-item>
          <van-grid-item class="grid-item">
            <p class="name">在线人数</p>
            <img class="u_2" src="./image/u_2.png" alt />
            <p class="txt">{{data.onlineNum}}人</p>
          </van-grid-item>
          <van-grid-item class="grid-item">
            <p class="name">新增人数</p>
            <img class="u_3" src="./image/u_3.png" alt />
            <p class="txt">{{data.registerNum}}人</p>
          </van-grid-item>
          <van-grid-item class="grid-item">
            <p class="name">今日投注</p>
            <img class="u_4" src="./image/u_4.png" alt />
            <p class="txt">{{data.todayOrderAmountNum}}人</p>
          </van-grid-item>
          <van-grid-item class="grid-item">
            <p class="name">余额小于10元</p>
            <img class="u_5" src="./image/u_5.png" alt />
            <p class="txt">{{data.balanceLessThan10Num}}人</p>
          </van-grid-item>
          <van-grid-item class="grid-item">
            <p class="name">余额大于10元</p>
            <img class="u_6" src="./image/u_6.png" alt />
            <p class="txt">{{data.balanceMoreThan10Num	}}人</p>
          </van-grid-item>
          <van-grid-item class="grid-item">
            <p class="name">三十日未登录</p>
            <img class="u_7" src="./image/u_7.png" alt />
            <p class="txt">{{data.day30NotloginCount}}人</p>
          </van-grid-item>
          <van-grid-item class="grid-item">
            <p class="name">六十日未登录</p>
            <img class="u_7" src="./image/u_7.png" alt />
            <p class="txt">{{data.day60NotloginCount}}人</p>
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
import { agentStatistical } from "@/api/agency";
import calendarImg from "./image/calendar.png";
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
    this.agentStatistical()
    this.getYesterday()
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    async agentStatistical() {
      let params = {
        modifiedBegin:this.modifiedBegin,
        modifiedEnd: this.modifiedEnd
      };
      await agentStatistical(params).then(res => {
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
      this.agentStatistical()
    }
  },
  watch: {}
};
</script>
<style scoped lang="scss">
@import "../../../assets/css/reset.css";
@import "../scss/style.scss";
.page {
  background-color: #f0f1f6;
  overflow: hidden;
}
.lContent {
  position: relative;
  height: calc(100% - 46px);
  overflow: auto;
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