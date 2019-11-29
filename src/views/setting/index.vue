<template>
  <div class="page">
    <navCom :title="'设置'" class="nav" :leftArrow="true" @onClickLeft="back" />
    <div class="lContent">
      <div class="banner">
        <img src="./image/banner.png" alt />
      </div>
      <div class="setting-wrapper">
        <van-cell-group>
          <van-cell title="清除缓存" icon="brush-o" class="brush cell" @click="clear">
            <van-icon slot="right-icon" name="arrow" style="line-height: inherit;" />
          </van-cell>
          <van-cell title="开奖声音提示" icon="volume-o" class="cell">
            <van-switch slot="right-icon" v-model="kjChecked" active-color="#F10F11" inactive-color="#B9BABD" size="24px" />
          </van-cell>
          <van-cell title="封单声音提示" icon="volume-o" class="cell">
            <van-switch slot="right-icon" v-model="fdChecked" active-color="#F10F11" inactive-color="#B9BABD" size="24px" />
          </van-cell>
          <van-cell title="帮助中心" icon="question-o" class="cell" @click="helpSkip">
            <van-icon slot="right-icon" name="arrow" style="line-height: inherit;" />
          </van-cell>
          <van-cell title="当前版本" icon="warning-o" class="cell">
            <span class="custom-title">v1.0.1</span>
            <van-icon slot="right-icon" name="arrow" style="line-height: inherit;" />
          </van-cell>
        </van-cell-group>
        <van-button type="default" class="p-button p-button-c" @click="logOutConfirm">退出登录</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import navCom from "../../components/nav";
export default {
  name: "money",
  components: { navCom },
  data() {
    return {
      kjChecked: true,
      fdChecked: true
    };
  },
  created() {},
  mounted() {},
  methods: {
    back() {
      this.$router.go(-1);
    },
    clear(){
      this.$toast('清除缓存成功')
    },
    logOutConfirm(){
      this.$dialog.confirm({
        message: '是否退出登录？'
      }).then(() => {
        this.$store.dispatch('user/logout').then((res) => {
          if(res.code ==='0'){
            this.$router.go(0)
          }
        })
      }).catch(() => {
        console.log('取消')
      });
    },
    helpSkip(){
      this.$router.push({name:'help'})
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/css/reset.css";
.page {
  background-color: #f0f1f6;
}
.lContent {
  height: calc(100% - 46px);
}
.banner{
  margin-bottom: .2rem;
  height: 2.5rem;
  img{
    width:100%;
    height: 100%;
  }
}
.setting-wrapper {
  width: 100%;
  height: 100%;
}
.p-button {
  position: absolute;
  bottom: .6rem;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  width: 90%;
  margin: auto;
  font-size: 0.3rem;
  margin-top: 2.8rem;
}
.brush{
  .van-icon-brush-o{
    transform: rotate(180deg)
  }
}
.custom-title,
.cell{
  color: #333;
  font-size: .3rem;
}
.cell {
  .van-icon {
    font-size: .4rem;
  }
}
</style>
