<template>
  <div class="page">
    <nav-cmp :title="'团队管理'" :leftArrow="true" :fixed="true" @onClickLeft="back"></nav-cmp>
    <div class="lContent">
      <div class="serach d-flex">
        <div class="input-inner">
          <input type="text" placeholder="会员账号查找" />
        </div>
        <van-button type="default" class="p-button-s">查询</van-button>
      </div>
      <div class="list-wrapper">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <div class="panel">
            <div class="d-flex grid-left">
              <div class="g-item">
                <div class="name">代理账号</div>
                <div class="num">testbys01</div>
              </div>
              <div class="g-item">
                <div class="name">返点率</div>
                <div class="num">3.01%</div>
              </div>
              <div class="g-item">
                <div class="name">下级人数</div>
                <div class="num">0</div>
              </div>
              <div class="g-item">
                <div class="name">彩票余额</div>
                <div class="num">0.00</div>
              </div>
              <div class="g-item">
                <div class="name">团队余额</div>
                <div class="num">0.00</div>
              </div>
            </div>
            <div class="bottom-link">
              <van-grid class="grid-center" :border="false" :column-num="2">
                <van-grid-item class="g-item">
                  <div class="name" @click="skipTeamBill">帐变</div>
                </van-grid-item>
                <van-grid-item class="g-item">
                  <div class="name" @click="skipSub(1)">查看下级</div>
                </van-grid-item>
              </van-grid>
            </div>
          </div>
        </van-list>
      </div>
    </div>
    <div class="footer d-flex">
      <div>
        <van-button type="default" class="p-button" @click="skipRegister">
          <img class="icon" src="../image/register.png" />注册账号
        </van-button>
      </div>
      <div>
        <van-button type="default" class="p-button" @click="skipPromote">
          <img class="icon" src="../image/share.png" />新增推广
        </van-button>
      </div>
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
    },
    skipRegister() {
      this.$router.push({ name: "agencyRegister" });
    },
    skipPromote() {
      this.$router.push({ name: "agencyPromote" });
    },
    skipSub(id) {
      this.$router.push({ name: "agencyTeam", query: { id: id } });
      document.title = id;
    },
    skipTeamBill(){
      this.$router.push({ name: "teamBill" });
    }
  },
  watch: {}
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
  height: calc(100% - 110px);
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
  .g-item {
    &:first-child {
      border-right: 1px solid #ccc;
    }
  }
}
.footer {
  width: 100%;
  height: 1.2rem;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  line-height: 1.2rem;
  > div {
    width: 100%;
  }
  .icon {
    width: 0.33rem;
    height: 0.33rem;
    vertical-align: -0.04rem;
    margin-right: 0.12rem;
  }
  .p-button {
    display: block;
    width: 90%;
    margin: 0.2rem auto 0;
    border-radius: 0.1rem;
    font-size: 0.3rem;
  }
}
</style>
<style scoped>
.grid-center >>> .van-grid-item__content {
  padding: 0;
  height: 0.8rem;
  line-height: 0.8rem;
}
</style>