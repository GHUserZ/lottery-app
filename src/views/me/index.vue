<template>
  <div class="page">
      <div class="topBar">
        <div>
          <p class="name">{{userInfo.username}}</p>
          <p class="money">余额：<span>￥</span>{{userInfo.balance}}</p>
        </div>
        <div class="head">
          <img src="./image/logo.png" alt="">
          <van-icon @click="settingSkip" class="setting" name="setting-o" />
        </div>
      </div>
      <div class="link-wrapper">
        <div v-for="(item,index) in linkData" :key="index" @click="skipPage(index)">
          <img :src="item.img" alt="">
          <p>{{item.name}}</p>
        </div>
        <div></div>
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import a from './image/a.png'
import b from './image/b.png'
import c from './image/c.png'
import d from './image/d.png'
import e from './image/e.png'
import f from './image/f.png'
import g from './image/g.png'
import h from './image/h.png'
export default {
  name: 'me',
  components: {},
  computed:{
    ...mapGetters([
      'userInfo'
    ])
  },
  data() {
    return {
        linkData:[
          {name:'立即充值',img:a}, {name:'我要提现',img:b}, {name:'信息安全',img:c}, {name:'代理中心',img:d}, {name:'个人报表',img:e}, {name:'资金明细',img:f}, {name:'系统公告',img:g}, {name:'在线客服',img:h}
        ]
    }
  },
  created() {},
  mounted() {},
  methods: {
    skipPage(index){
      switch(index){
        case 0:
          this.$router.push({ path:'/',  query:{ tab:1 } })
          break;
        case 1:
          this.$router.push({ path:'/meWithdraw'})
          break;
        case 2:
          this.$router.push({ path:'/meSafe'})
          break;
        case 3:
          this.$router.push({ path:'/agency'})
          break;
        case 4:
          this.$router.push({ path:'/iReport'})
          break;
        case 5:
          this.$router.push({ path:'/financial'})
          break;
        case 6:
          this.$router.push({ path:'/system'})
          break;
      }
    },
    settingSkip(){
      this.$router.push({name:'setting'})
    }
  },
  watch: {},
}
</script>

<style scoped lang="scss">
@import '../../assets/css/reset.css';
.topBar,.link-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.topBar{
  height:2.4rem;
  background:linear-gradient(269deg,rgba(233,26,30,1),rgba(254,117,63,1));
  div{
    width: 50%;
    padding-left: .7rem;
  }
  div:last-child{
    text-align: right;
    padding-right: .86rem;
  }
  .name{
    font-size: .6rem;
    color: #fff;
  }
  .money{
    font-size: .3rem;
    color: #fff;
    span{
      color: #ffdf29;
    }
  }
  .head{
    img{
      width: 1.08rem;
      height: 1.08rem;
      border-radius: 100px;
      border: 2px solid #fff;
    }
  }
}
.setting{
  font-size: .4rem;
  color: #fff;
  position: absolute;
  top: .2rem;
  right: .3rem;
}
.link-wrapper{
  flex-wrap: wrap;
  border-radius:.15rem .15rem 0 0;
  margin-top: -.2rem;
  background: #fff;
  div{
    width:30%;
    text-align: center;
    margin-top:.8rem;
  }
  img{
    width: .81rem;
    height: .81rem;
  }
  p{
    font-size: .24rem;
    color: #4D4D4D;
    margin-top: .1rem;
  }
}
</style>
