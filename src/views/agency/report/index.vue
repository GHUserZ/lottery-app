<template>
  <div class="page">
    <nav-cmp
      :title="'盈亏报表'"
      :leftArrow="true"
      :fixed="true"
      @onClickLeft="back"
      :icon="calendarImg"
      @onClickRight="onClickRight"
    ></nav-cmp>
    <div class="lContent">
      <div class="serach d-flex">
        <div class="input-inner">
          <input type="text" placeholder="会员账号查找" />
        </div>
        <van-button type="default" class="p-button-s">查询</van-button>
      </div>
      <div class="list-wrapper">
        <van-list v-model="loading" :finished="finished" finished-text="" @load="onLoad">
          <div class="panel">
            <div class="d-flex grid-left">
              <div class="g-item">
                <div class="name">代理账号</div>
                <div class="num">testbys01</div>
              </div>
              <div class="g-item">
                <div class="name">充值金额</div>
                <div class="num">323.05</div>
              </div>
              <div class="g-item">
                <div class="name">提现金额</div>
                <div class="num">0.00</div>
              </div>
              <div class="g-item">
                <div class="name">投注金额</div>
                <div class="num">0.00</div>
              </div>
              <div class="g-item">
                <div class="name">中奖金额</div>
                <div class="num">0.00</div>
              </div>
              <div class="g-item">
                <div class="name">返点佣金</div>
                <div class="num">0.00</div>
              </div>
              <div class="g-item">
                <div class="name">活动礼金</div>
                <div class="num">0.00</div>
              </div>
              <div class="g-item">
                <div class="name">个人盈亏</div>
                <div class="num">0.00</div>
              </div>
            </div>
            <div class="bottom-link">
              <van-grid class="grid-center" :border="false" :column-num="1">
                <van-grid-item class="g-item">
                  <div class="name">查看下级</div>
                </van-grid-item>
              </van-grid>
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
import { getTeamProfitAndLossRecords } from "@/api/agency";
import calendarImg from "./image/calendar.png";
import dateMixin from "../../../mixins/date";
import {mapGetters} from 'vuex'
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
  computed:{
    ...mapGetters([
      'userInfo'
    ])
  },
  created() {},
  mounted() {
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
    async getTeamProfitAndLossRecords() {
      let params = {
        modifiedBegin: this.modifiedBegin,
        modifiedEnd: this.modifiedEnd,
        pageNo: this.pageNo,
        pageSize: this.pageSize
      };
      await getTeamProfitAndLossRecords(params)
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
      this.agentStatistical();
    }
  },
  watch: {
    userInfo(){
      this.getTeamProfitAndLossRecords()
    }
  }
};
</script>
<style scoped lang="scss">
@import "../../../assets/css/reset.css";
@import "../../../assets/scss/common.scss";
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
  border-radius: 0.1rem;
  overflow: hidden;
}
.bottom-link {
  border-top: 1px solid #ccc;
  .name {
    font-size: 0.3rem;
    color: #333;
  }
}
</style>
<style scoped>
.page >>> .van-nav-bar__right img {
  width: 0.29rem;
  height: 0.29rem;
}
</style>