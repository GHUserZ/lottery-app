<template>
  <div class="page">
    <nav-cmp
      :title="title"
      :leftArrow="true"
      :fixed="true"
      @onClickLeft="back"
      @onClickRight="onClickRight"
    ></nav-cmp>
    <div class="lContent">
      <div class="list-wrapper">
        <van-list v-model="loading" :finished="finished" finished-text @load="onLoad">
          <div class="panel">
            <div class="title">
              充值单号
              <span>SADDSA3298DA</span>
            </div>
            <div class="d-flex grid-left">
              <div class="g-item">
                <div class="name">充值金额</div>
                <div class="num">100.12</div>
              </div>
              <div class="g-item">
                <div class="name">状态</div>
                <div class="num">处理中</div>
              </div>
              <div class="g-item">
                <div class="name">充值方式</div>
                <div class="num">人民币</div>
              </div>
              <div class="g-item">
                <div class="name">充值时间</div>
                <div class="num">2019-10-19 12:21:21</div>
              </div>
              <div class="g-item">
                <div class="name">存款地址</div>
                <div class="num red">-</div>
              </div>
            </div>
          </div>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
import navCmp from "../../../components/nav";
import { getTeamProfitAndLossRecords } from "@/api/agency";
export default {
  name: "stat",
  components: { navCmp },
  data() {
    return {
      title: "充值明细",
      show: false,
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
    userInfo() {
      this.getTeamProfitAndLossRecords();
    }
  }
};
</script>
<style scoped lang="scss">
@import "../../../assets/css/reset.css";
@import "../../../assets/scss/common.scss";
@import "../../agency/scss/style.scss";
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
.title {
  position: relative;
  font-size: 0.24rem;
  color: #4d4d4d;
  padding: 0.2rem;
  border-bottom: 1px solid #ccc;
  span {
    position: absolute;
    right: 0.2rem;
  }
}
.red{
    color: #F10F11FF !important;
}
.grid-left{
    padding: .2rem;
} 
</style>
<style scoped>
.page >>> .van-nav-bar__right img {
  width: 0.29rem;
  height: 0.29rem;
}
</style>