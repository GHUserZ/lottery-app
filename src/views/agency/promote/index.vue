<template>
  <div class="page">
    <nav-cmp
      :title="'代理推广'"
      :leftArrow="true"
      :fixed="true"
      @onClickLeft="back"
      :txt="'新增代理'"
      @onClickRight="onClickRight"
    ></nav-cmp>
    <div class="lContent">
      <div class="panel">
        <div class="d-flex grid-left">
          <div class="g-item">
            <div
              class="name"
              v-clipboard:copy="link"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              邀请码
              <img class="copy-icon" src="../image/copy.png" />
            </div>
            <div class="num">FSA892</div>
          </div>
          <div class="g-item">
            <div class="name">返点率</div>
            <div class="num">3.01%</div>
          </div>
          <div class="g-item">
            <div class="name">创建时间</div>
            <div class="num">2019-10-17 21:21:21</div>
          </div>
          <div class="g-item">
            <div class="name">类型</div>
            <div class="num">代理</div>
          </div>
        </div>
        <div class="bottom-link">
          <van-grid class="grid-center" :border="false" :column-num="2">
            <van-grid-item class="g-item">
              <van-button
                v-clipboard:copy="link"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
                type="default"
                class="p-button"
              >复制链接</van-button>
            </van-grid-item>
            <van-grid-item class="g-item">
              <van-button type="default" class="p-button" @click="look">查看二维码</van-button>
            </van-grid-item>
          </van-grid>
        </div>
      </div>
    </div>
    <van-popup class="c-popup-2" v-model="show" :closeable="false">
      <header class="tl">{{title}}</header>
      <div class="pop-con">
        <div v-if="type===1" class="from-wrapper">
          <div class="input-inner">
            <input type="number" v-model="rebates" placeholder="彩票返点" @input="isLength" />
          </div>
          <div class="input-inner">
            <div class="slider-wrapper">
              <van-slider
                v-model="value"
                active-color="#ee0a24"
                bar-height="5px"
                class="van-slider"
              >
                <div slot="button" class="custom-button"></div>
              </van-slider>
              <div class="d-flex">
                <div class="l">0%</div>
                <div class="r">{{value}}%</div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="type===2" class="qrcode-wrapper">
          <div id="qrcode" ref="qrcode"></div>
        </div>
        <div class="button-wrap">
          <van-button type="default" class="p-button-d" @click.stop="show=false">取消</van-button>
          <van-button type="default" class="p-button-s" @click.stop>确认</van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import navCmp from "../../../components/nav";
import { getBankCardList } from "@/api/user";
import QRCode from "qrcodejs2";
export default {
  name: "",
  components: { navCmp },
  data() {
    return {
      link: "www.baicu.com",
      show: false,
      title: "返点设置",
      rebates: "",
      value: 0,
      type: 1
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
    onCopy() {
      this.$toast("复制成功！");
    },
    onError() {
      console.log("复制失败");
    },
    onClickRight() {
      this.type = 1;
      this.show = true;
    },
    look() {
      this.type = 2;
      this.show = true;
      this.title = "二维码";
      setTimeout(() => {
        if (this.show) {
          this.qrcode();
        }
      });
    },
    qrcode() {
      let qrcodeC = new QRCode(document.getElementById("qrcode"), {
        width: 120, // 设置宽度
        height: 120, // 设置高度
        text: this.link
      });
    },
    isLength() {
      if (this.rebates >= 0 && this.rebates <= 100) {
        this.rebates = this.rebates;
      } else {
        this.rebates = 100;
      }
    }
  },
  watch: {
    show() {
      if (!this.show) {
        if (this.type === 2) {
          document.getElementById("qrcode").innerHTML = "";
        }
        this.rebates = "";
      }
    },
    rebates() {
      this.value = this.rebates;
    },
    value() {
      // console.log(this.value)
      // if (this.value === 0) {
      //   this.rebates = "";
      // } else {
      //   this.rebates = this.value;
      // }
    }
  }
};
</script>
<style scoped lang="scss">
@import "../../../assets/css/reset.css";
@import "../../../assets/scss/common.scss";
@import "../scss/style.scss";
@import "../../me/css/popup.scss";
.page {
  background-color: #f0f1f6;
  overflow: hidden;
}
.lContent {
  position: relative;
  height: calc(100% - 46px);
  overflow: auto;
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
.p-button {
  border-radius: 0.1rem;
  font-size: 0.3rem;
}
.copy-icon {
  width: 0.21rem;
  height: 0.23rem;
  margin-left: 0.1rem;
  vertical-align: -0.02rem;
}
.slider-wrapper {
  padding: 0 0.1rem;
  margin-top: 0.4rem;
  .custom-button {
    width: 0.4rem;
    height: 0.4rem;
    background: rgba(255, 61, 61, 1);
    border-radius: 50%;
  }
  .van-slider {
    // background-color: #fff;
  }
  .d-flex {
    margin-top: 0.2rem;
    justify-content: space-between;
    font-size: 0.3rem;
    color: #4d4d4d;
  }
}
header {
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
</style>
<style scoped>
.grid-center >>> .van-grid-item__content {
  padding: 0.1rem 0.2rem;
}
.c-popup-2 >>> .van-popup__close-icon{
  color: #fff;
  top: .14rem;
}
</style>
