<template>
  <div class="page bg">
    <nav-cmp :title="'BYS娱乐'" :price="'1000'"></nav-cmp>
    <div class="lContent">
      <!-- 轮播 -->
      <van-swipe class="swiper" :autoplay="3000" indicator-color="white">
        <van-swipe-item><img src="./image/bannr.png" alt=""></van-swipe-item>
      </van-swipe>
      <div class="panel">
        <div class="top-line">
          <div class="left">
            <p>BYS</p>
            <span>头条</span>
          </div>
          <div class="right">
            <p>【BYS娱乐官方域名】尊敬的客户您好，平台现已推出【聊天室】功能。</p>
            <p>【聊天系统上线公告】温馨提示：为了确保您的  账号及资金安全，请您定期更换登录。</p>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="i-nav">
          <van-grid class="nav-wrapper">
            <van-grid-item v-for="item in navData" :key="item.txt">
              <van-image :src="item.src" />
              <p>{{item.txt}}</p>
            </van-grid-item>
          </van-grid>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {queryWinnerList} from '@/api/home/index'
import navCmp from "@/components/nav";
import payImg from './image/pay.png'
import withdrawImg from './image/withdraw.png'
import gameImg from './image/game.png'
import serviceImg from './image/service.png'
export default {
  name: "index",
  components: {
    navCmp
  },
  data() {
    return {
      navData:[{src:payImg,txt:'立即充值'},{src:withdrawImg,txt:'快速提现'},{src:gameImg,txt:'快速游戏'},{src:serviceImg,txt:'联系客服'}]
    };
  },
  computed: {},
  created() {

  },
  mounted() {
    // this.queryWinnerList()
  },
  methods: {
    // async queryWinnerList() {
    //   queryWinnerList().then((res) => {
    //     this.data = res
    //   })
    // }
  },
  watch: {}
};
</script>

<style scoped lang="scss">
@import '../../assets/css/reset.css';
.page{
  background: #f0f1f6
}
.panel{
  background: #fff;
  padding: .2rem .3rem;
  border-radius:.1rem;
}
.panel.noPading{
  padding: 0;
}
.panel{
  margin-top: .1rem;
}
.top-line{
  display: flex;
  height: 1.42rem;
  .left{
    width: 1.57rem;
    font-size: .36rem;
    p{
      color: #FF3D3D;
      margin-top: .3rem;
      line-height: 1.2;
    }
    span{
      color: #333;
    }
  }
  .right{
    font-size: .24rem;
    color: #4D4D4D;
    p:first-child{
      border-bottom: 1px solid #CCCCCC;
    }
    p:last-child{
      padding-top: .06rem;
    }
    p{
      padding-bottom: .06rem;
    }
  }
}
.lContent{
  margin: 0 .3rem;
}
.swiper{
  margin-top: .14rem;
  img{
    width:100%;
    // height: 
  }
}
.nav-wrapper{
  p{
    color: #333333;
    font-size: .24rem;
    margin-top: .09rem;
  }
}
</style>
<style scoped>
  .page >>> .van-image__img{
    width: 1rem;
    height: 1rem;
  }
  .page >>> .van-grid-item__content{
    padding: 0
  }
  .page >>> .van-grid-item__content::after,
  .page >>> .van-hairline--top::after{
    border: none;
  }
</style>
