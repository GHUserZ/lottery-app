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
      <h2 class="c-title">
        个人统计
        <img class="calendar" src="../image/calendar.png" alt @click="onClickRight" />
      </h2>
      <div class="list-wrapper">
        <van-list v-model="loading" :finished="finished" finished-text @load="onLoad">
          <div class="panel">
            <div class="d-flex grid-left">
              <div class="g-item">
                <div class="name">直属上级</div>
                <div class="num">testbys01</div>
              </div>
              <div class="g-item">
                <div class="name">返点率</div>
                <div class="num">5.22%</div>
              </div>
              <div class="g-item">
                <div class="name">个人充值</div>
                <div class="num">0.00</div>
              </div>
              <div class="g-item">
                <div class="name">个人提现</div>
                <div class="num">0.00</div>
              </div>
              <div class="g-item">
                <div class="name">活动礼金</div>
                <div class="num">0.00</div>
              </div>
              <div class="g-item">
                <div class="name">个人佣金</div>
                <div class="num">0.00</div>
              </div>
            </div>
          </div>
        </van-list>
      </div>
    </div>
    <van-popup v-model="show" position="bottom">
      <van-picker
        :columns="columns"
        @change="onChange"
        show-toolbar
        @cancel="show = false"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
import navCmp from "../../../components/nav";
import { userGainOrLoss } from "@/api/user";
import calendarImg from "../image/calendar.png";
import dateMixin from "../../../mixins/date";
export default {
  name: "stat",
  mixins: [dateMixin],
  components: { navCmp },
  data() {
    return {
      calendarImg: calendarImg,
      show: false,
      list: [],
      loading: false, // 是否处于加载状态
      finished: false, // 是否已加载完所有数据
      pageNo: 0,
      pageSize: 15
    };
  },
  created() {},
  mounted() {
    // this.userStatistical()
    this.getYesterday();
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
    async userStatistical() {
      let params = {
        modifiedBegin: this.modifiedBegin,
        modifiedEnd: this.modifiedEnd
      };
      await userStatistical(params)
        .then(res => {
          this.data = res.data;
        })
        .catch(err => {
          this.$toast(err.message);
        });
    },
    onClickRight() {
      this.show = true;
    },
    onConfirm() {
      this.show = false;
      this.userStatistical();
    }
  },
  watch: {}
};
</script>
<style scoped lang="scss">
@import "../../../assets/css/reset.css";
@import "../../agency/scss/style.scss";
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
.list-wrapper{
    margin: .2rem;
}
.panel {
  margin: 0.2rem 0 0.4rem;
  border-radius: .1rem;
}
.c-title {
  position: relative;
}
.calendar {
  position: absolute;
  right: 0.3rem;
  top: 50%;
  transform: translateY(-50%);
  width: 0.31rem;
  height: 0.31rem;
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