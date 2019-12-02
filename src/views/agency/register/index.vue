<template>
  <div class="page">
    <nav-cmp :title="'注册账号'" :leftArrow="true" :fixed="true" @onClickLeft="back"></nav-cmp>
    <div class="lContent">
      <h2 class="c-title">账户设置</h2>
      <div class="content-item">
        <div class="input-inner">
          <input
            v-model="username"
            type="text"
            placeholder="账号（4-16位的数字或字母）"
            @input="getInputValue"
          />
        </div>
        <div class="input-inner">
          <input
            v-model="password"
            type="password"
            placeholder="密码（4-16位的数字或字母）"
            @input="getInputValue"
          />
        </div>
        <div class="input-inner">
          <input
            v-model="againPassword"
            type="password"
            placeholder="再次确认密码"
            @input="getInputValue"
          />
        </div>
      </div>
      <h2 class="c-title">返点设置</h2>
      <div class="content-item">
        <div class="input-inner">
          <input v-model="rebates" type="number" placeholder="彩票返点" @input="getInputValue" />
        </div>
        <div class="slider-wrapper">
          <van-slider v-model="value" active-color="#ee0a24" bar-height="5px" class="van-slider">
            <div slot="button" class="custom-button"></div>
          </van-slider>
          <div class="d-flex">
            <div class="l">0%</div>
            <div class="r">{{value}}%</div>
          </div>
        </div>
      </div>
      <div class="p-button-box content-item">
        <van-button
          type="default"
          class="p-button p-button-c"
          @click="submit"
          :disabled="disabled"
        >注册账号</van-button>
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
      value: "",
      username: "",
      password: "",
      againPassword: "",
      rebates: "",
      disabled: true
    };
  },
  created() {},
  mounted() {},
  methods: {
    back() {
      this.$router.go(-1);
    },
    async getBankCardList() {
      await getBankCardList().then(res => {
        console.log(res);
      });
    },
    getInputValue() {
      if (
        this.username !== "" &&
        this.password !== "" &&
        this.againPassword !== "" &&
        this.rebates !== ""
      ) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
    submit() {}
  },
  watch: {
    rebates(){
      this.value = this.rebates
    },
    value(){
      if(this.value===0){
        this.rebates = ''
      }else{
        this.rebates = this.value
      }
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
.content-item {
  padding: 0.2rem 0.3rem;
}
.input-inner {
  margin-bottom: 0.2rem;
  input{
    border-radius: 0
  }
}
.slider-wrapper {
  padding: 0 0.1rem;
  margin-top: .4rem;
  .custom-button {
    width: 0.4rem;
    height: 0.4rem;
    background: rgba(255, 61, 61, 1);
    border-radius: 50%;
  }
  .van-slider {
    background-color: #fff;
  }
  .d-flex {
    margin-top: 0.2rem;
    justify-content: space-between;
    font-size: 0.3rem;
    color: #4d4d4d;
  }
}
</style>
