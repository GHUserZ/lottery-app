<template>
  <div class="page bg">
    <nav-cmp :title="'BYS娱乐'" :price="'1000'" :fixed=true></nav-cmp>
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
      <div class="panel noPadding nav-box">
        <div class="i-nav">
          <van-grid class="nav-wrapper">
            <van-grid-item v-for="item in navData" :key="item.txt">
              <van-image :src="item.src" />
              <p>{{item.txt}}</p>
            </van-grid-item>
          </van-grid>
        </div>
      </div>
      <div class="panel noPadding hot-lottery nav-box">
        <div class="title-box"><h2 class="c-title">热门彩种<a href="javascript:;" class="more">更多<van-icon class="arrow" name="arrow" /></a></h2></div>
        <van-grid class="nav-wrapper ">
          <van-grid-item v-for="(item,index) in hotData" :key="item.ord">
            <van-image :src="hotLImg[index][item.sn]" />
            <p>{{item.name}}</p>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="panel noPadding hot-lottery nav-box">
        <div class="title-box"><h2 class="c-title">中奖信息</h2></div>
        <ul class="winner-wrapper">
          <li v-for="item in winnerData" :key="item.name">
            <div>{{item.name}}</div>
            <div>购买{{item.lottryName}}</div>
            <div>喜中{{item.winnerMoney}}元</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {queryLotteryKinds,winnerList} from '@/api/home/index'
import navCmp from "@/components/nav";
import payImg from './image/pay.png'
import withdrawImg from './image/withdraw.png'
import gameImg from './image/game.png'
import serviceImg from './image/service.png'
import k3 from './image/k3.png'
import ssc from './image/ssc.png'
import pk10 from './image/pk10.png'
import x11x5 from './image/11x5.png'
import dpc from './image/dpc.png'
import pcdd from './image/pcdd.png'
import kl10f from './image/kl10f.png'
import lhc from './image/lhc.png'
export default {
  name: "index",
  components: {
    navCmp
  },
  data() {
    return {
      navData:[{src:payImg,txt:'立即充值'},{src:withdrawImg,txt:'快速提现'},{src:gameImg,txt:'快速游戏'},{src:serviceImg,txt:'联系客服'}],
      hotLImg:[{'k3':k3},{'ssc':ssc},{'pk10':pk10},{'11x5':x11x5},{'dpc':dpc},{'pcdd':pcdd},{'kl10f':kl10f},{'lhc':lhc}],
      hotData:[],
      winnerData:[]
    };
  },
  computed: {},
  created() {

  },
  mounted() {
    this.init()
  },
  methods: {
    init(){
      this.queryLotteryKinds()
      this.winnerList()
    },
    async queryLotteryKinds() {
      queryLotteryKinds().then((res) => {
        this.hotData = res.data
      })
    },
    async winnerList() {
      winnerList().then((res) => {
        this.winnerData = res.data
      })
    }
  },
  watch: {}
};
</script>

<style scoped lang="scss">
@import '../../assets/css/reset.css';
.lContent{
  padding-bottom: 60px;
}
.page{
  background: #f0f1f6
}
.panel{
  background: #fff;
  padding: .2rem .3rem;
  border-radius:.1rem;
}
.panel.noPadding{
  padding: 0;
}
.panel{
  margin-top: .1rem;
}
.nav-box{
  padding: .3rem 0 !important;
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
.c-title{
  position: relative;
  font-size: .3rem;
  color: #333333;
  font-weight: normal;
  padding-left: .08rem;
  line-height: 1.4;
  &::after{
    content: "";
    width:.04rem;
    height:.3rem;
    background-color: #D23520;
    position:absolute;
    left:-.08rem;
    top:.06rem;
  }
  .more{
    color: #4D4D4D;
    position: absolute;
    right: 0;
  }
  .arrow{
    vertical-align: -.04rem;
  }
}
.hot-lottery{
  .title-box{
    padding:.0rem .3rem .2rem;
  }
}
.winner-wrapper{
  padding:0 .3rem;
  li{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    div{
      height:1rem;
      line-height:1rem;
      font-size: .3rem;
      color: #4D4D4D;
    }
    div:nth-child(1){
      width:20%;
    }
    div:nth-child(2){
      width:40%;
    }
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
  .page >>> .van-grid-item__content--center{
    align-items: left;
    margin:0 .28rem .3rem;
  }
  .page >>> .van-grid-item__content--center p{
    text-align: center;
    width:1rem;
  }
</style>
