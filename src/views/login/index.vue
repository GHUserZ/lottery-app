<template>
  <div class="page">
    <navCom
      :title="'会员登录'"
      :icon="imgSrc"
      class="nav"
      :leftArrow=true
      @onClickLeft="onClickLeft"
      @onClickRight="onClickRight"
    />
    <div class="lContent">
      <img class="logo" src="./image/logo.png" alt="logo" />
      <div class="form">
        <div class="form-item">
          <i class="user icon"></i>
          <input type="text" placeholder="用户名" v-model="username"/>
        </div>
        <div class="form-item">
          <i class="pwd icon"></i>
          <input type="password" placeholder="密码（4-16位的数字）" v-model="password" />
        </div>
        <div class="submit-wrapper">
          <van-button type="default" class="p-button" @click="login">登录</van-button>
        </div>
        <van-button @click="registerSkip" type="default" class="d-button">立即注册</van-button>
      </div>
    </div>
    <van-popup class="c-popup" v-model="show" :close-on-click-overlay=false closeable >
      <header>提示</header>
      <div class="pop-con">
          {{errorMsg}}
          <van-button type="default" class="p-button-s" @click.stop="show=false">确认</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script>
import navCom from "../../components/nav";
import imgSrc from "./image/service.png";
import { login } from "@/api/user";
export default {
  name: "login",
  components: {
    navCom
  },
  data() {
    return {
      imgSrc: imgSrc,
      username:'',
      password:'',
      redirect: undefined,
      otherQuery: {},
      errorMsg:'',
      show:false
    };
  },
  created() {},
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      alert("点击了客服");
    },
    registerSkip() {
      this.$router.push({
        name: "register"
      });
    },
    // 用户登录
    async login() {
      let loginForm = { username: this.username, password: this.password }
       this.$store.dispatch('user/login', loginForm)
        .then((res) => {
          if(res.code!=='0'){
            this.errorMsg = res.message
            this.show= true
          }else{
            this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/css/reset.css";
@import "../../assets/css/login.scss";

</style>
<style scoped>
.c-popup >>> .van-popup__close-icon{
    color: #fff;
    top: .14rem;
}
</style>