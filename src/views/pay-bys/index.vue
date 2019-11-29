<template>
  <div class="page">
    <navCom :title="'充值'" class="nav" :leftArrow="true" @onClickLeft="back" />
    <div class="lContent">
      <van-cell class="cell" title="币种" value="BYS" />
      <div class="qrcode-wrapper">
        <div id="qrcode" ref="qrcode"></div>
      </div>
      <van-button
        type="default"
        class="p-button"
        v-clipboard:copy="link"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
      >复制地址</van-button>
      <div class="link-wrapper">
        <div class="link-inner">{{this.link}}</div>
        <p class="txt tc">充币地址</p>
      </div>
      <footer>
        <p>* 禁止向BYS地址充值除BYS之外的资产，任何充入BYS地址的非BYS资产将不可找回。</p>
        <p>* 使用BYS地址充值需要1个网络确认才能到账</p>
        <p>* 充值最小额度为100BYS,小于100BYS将无法到账</p>
        <p>* 充值成功后，自动为您转为金币（1BYS = 1元金币)</p>
      </footer>
    </div>
  </div>
</template>

<script>
import navCom from "../../components/nav";
import QRCode from "qrcodejs2";
import { bysPayAddress } from "@/api/pay";
export default {
  name: "BYS",
  components: { navCom, QRCode },
  data() {
    return {
      link: ""
    };
  },
  created() {},
  mounted() {
    this.bysPayAddress();
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    qrcode() {
      let qrcode = new QRCode("qrcode", {
        width: 120, // 设置宽度
        height: 120, // 设置高度
        text: this.link
      });
    },
    onCopy: function(e) {
      this.$toast("复制成功");
    },
    onError: function(e) {
      this.$toast("复制失败");
    },
    async bysPayAddress() {
      await bysPayAddress().then(res => {
        this.link = res.data.replace(/\"/g,'')
      }).then(() => {
        this.qrcode();
      });
    }
  },
  watch: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/css/reset.css";
.page {
  background-color: #f0f1f6;
}
.qrcode-wrapper {
  position: relative;
  height: 2rem;
  margin: 0.65rem 0.44rem 0.8rem;
  div {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
.p-button {
  display: block;
  width: 120px;
  margin: auto;
  border-radius: 0.1rem;
}
.cell {
  span {
    color: #333;
  }
}
.link-inner {
  width: 6.5rem;
  background: rgba(207, 207, 207, 1);
  border-radius: 0.1rem;
  margin: 0.4rem auto 0.22rem;
  font-size: 0.24rem;
  color: #4d4d4d;
  word-wrap: break-word;
  padding: 0.2rem;
}
.txt {
  font-size: 0.3rem;
  color: #333;
}
footer {
  width: 6.75rem;
  font-size: 0.24rem;
  color: #808080;
  margin: 0.2rem auto 0;
  line-height: 0.4rem;
}
</style>
