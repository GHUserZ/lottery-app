<template>
  <div class="page">
    <nav-cmp :title="'信息安全'" :leftArrow="true" :fixed="true" @onClickLeft="back"></nav-cmp>
    <div class="lContent">
      <div class="top">
        <img src="./image/safe.png" alt />
        <p>账户安全保障中</p>
      </div>
      <div class="linkContent">
        <van-grid :column-num="2">
          <van-grid-item v-for="(item,index) in linkData" :key="index" @click="handleClick(index)">
            <van-image class="img" :src="item.src" />
            <p>{{item.name}}</p>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <van-popup class="c-popup-2" v-model="show" :close-on-click-overlay="false">
      <header>{{title}}</header>
      <div class="pop-con">
        <div class="from-wrapper">
          <div class="input-inner" v-if="(isFirst&&index===1) ||  index===0">
            <input type="password" v-model="oldPassword" placeholder="旧密码" />
          </div>
          <div class="input-inner">
            <input type="password" v-model="newPassword" placeholder="新密码" />
          </div>
          <div class="input-inner">
            <input type="password" v-model="againPassword" placeholder="确认新密码" />
          </div>
          <div class="tips tl">
            <p>提醒您：</p>
            <p>登录密码乃重要个人信息！请勿告知他人。</p>
            <p>若遗忘登录密码，烦请与客服联系。</p>
            <p>登录密码必须为6-16位的数字或字母的组合。</p>
          </div>
        </div>
        <div class="button-wrap">
          <van-button type="default" class="p-button-d" @click.stop="show=false">取消</van-button>
          <van-button type="default" class="p-button-s" @click.stop="updatePassword">确认</van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import navCmp from "../../../components/nav";
import modifyPwd from "./image/moneyPwd.png";
import moneyPwd from "./image/moneyPwd.png";
import cardBank from "./image/cardBank.png";
import history from "./image/history.png";
import { updatePassword } from "@/api/user";
export default {
  name: "bank",
  components: { navCmp },
  data() {
    return {
      title: "登录密码",
      show: false,
      isFirst:false,
      oldPassword: "",
      newPassword: "",
      againPassword: "",
      index:0,
      linkData: [
        { src: modifyPwd, name: "修改密码" },
        { src: moneyPwd, name: "资金密码" },
        { src: cardBank, name: "银行卡" },
        { src: history, name: "登录历史" }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    back() {
      this.$router.go(-1);
    },
    handleClick(i) {
      switch (i) {
        case 0:
          this.show = true;
          this.index = 0
          break;
        case 1:
            this.index = 1
            this.show = true;
            this.title="设置资金密码"
            break;
        case 2:
            this.$router.push({name:'bankCard'})
            break;
        case 3:
            this.$router.push({name:'loginHistory'})
            break;
      }
    },
    restValue() {
      this.againPassword = "";
      this.oldPassword = "";
      this.newPassword = "";
    },
    async updatePassword() {
      let params = {
        againPassword: this.againPassword,
        newPassword: this.newPassword,
        oldPassword: this.oldPassword
      };
      await updatePassword(params)
        .then(res => {
          this.show = false;
          this.$toast("密码修改成功");
        })
        .catch(err => {
          this.$toast(err.message);
        });
    }
  },
  watch: {
    show() {
      if (!this.show) {
        this.restValue();
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../../assets/css/reset.css";
@import "../css/popup.scss";
.page {
  background-color: #f0f1f6;
  overflow: hidden;
}
.lContent {
  position: relative;
  height: calc(100% - 46px);
  overflow: auto;
}
.top {
  height: 2.5rem;
  background: #fff;
  text-align: center;
  margin-top: 0.2rem;
  img {
    width: 1.04rem;
    height: 1.2rem;
    margin: 0.36rem 0 0.25rem 0;
  }
  p {
    font-size: 0.3rem;
    color: #333;
  }
}
.linkContent {
  padding: 0.2rem 0.3rem;
  .img {
    width: 0.7rem;
    height: 0.7rem;
  }
  p {
    font-size: 0.28rem;
    color: #4d4d4dff;
    padding-top: 0.23rem;
  }
}
.tips {
  font-size: 0.24rem;
  color: #8f8f8fff;
}
</style>