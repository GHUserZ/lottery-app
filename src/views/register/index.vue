<template>
  <div class="page">
    <navCom
      :title="'会员注册'"
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
          <input v-model="account" type="text" placeholder="账号（4-16位的数字或字母）" />
        </div>
        <div class="form-item">
          <i class="pwd icon"></i>
          <input v-model="pwd" type="password" placeholder="密码（4-16位的数字）" />
        </div>
        <div class="form-item">
          <i class="pwd icon"></i>
          <input v-model="againPwd" type="password" placeholder="再次确认密码" />
        </div>
        <div class="form-item">
          <i class="code icon"></i>
          <input v-model="code" type="text" placeholder="请输入邀请码" />
        </div>
        <div class="submit-wrapper">
          <van-button @click="reigsterSumbmit" type="default" class="d-button">注册</van-button>
        </div>
      </div>
      <div class="bottom tc">
        已有账号，立即
        <a href="javascript:;" @click="loginSkip">登录</a>
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
import { userRegister } from "@/api/user";
export default {
  name: "register",
  components: {
    navCom
  },
  data() {
    return {
      imgSrc: imgSrc,
      account: "",
      pwd: "",
      againPwd: "",
      code: "",
      show: false,
      errorMsg:''
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
    loginSkip() {
      this.$router.push({
        name: "login"
      });
    },
    // 验证用户名
    isAccount(account) {
      var regu = "^[0-9a-zA-Z]{4,16}$";
      var re = new RegExp(regu);
      if (re.test(account)) {
        return true;
      } else {
        return false;
      }
    },
    // 验证密码
    isPwd(pwd) {
      var regu = "^[0-9]{6,16}$";
      var re = new RegExp(regu);
      if (re.test(pwd)) {
        return true;
      } else {
        return false;
      }
    },
    // 用户注册
    async reigsterSumbmit() {
       if(!this.isAccount(this.account)){
           this.errorMsg = '账号必须为4-16位'
           this.show = true
       }else if(!this.isPwd(this.pwd)){
           this.errorMsg = '密码必须为6-16位'
           this.show = true
       }else if (this.pwd !== this.againPwd){
           this.errorMsg = '两次输入密码不一致'
           this.show = true
       }else{
        let parmas = {
            "invitationCode": this.code,
            "password": this.pwd,
            "username": this.account
        }
        userRegister(parmas).then((res) => {
            if(res.code!=='0'){
                this.errorMsg = res.message
                this.show = true
            }
        })
       }
    }
  },
  watch: {}
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
