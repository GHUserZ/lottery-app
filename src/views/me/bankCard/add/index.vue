<template>
  <div class="page">
    <nav-cmp :title="'添加银行卡'" :leftArrow="true" :fixed="true" @onClickLeft="back"></nav-cmp>
    <div class="lContent">
      <van-cell-group title="请绑定持卡人本人的银行卡">
        <van-cell class="cell">
          <span>持卡人</span>
          <div class="input-inner">
            <input v-model="name" type="text" placeholder="请输入持卡人姓名" @input="getInputValue" />
          </div>
          <van-icon
            class="info-o"
            slot="right-icon"
            name="info-o"
            style="line-height: inherit;"
            @click="showInfoP"
          />
        </van-cell>
        <van-cell class="cell">
          <span>卡号</span>
          <div class="input-inner">
            <input v-model="bankNum" type="number" placeholder="无需网银，免手续费" @input="getInputValue" />
          </div>
        </van-cell>
      </van-cell-group>
      <div class="p-button-box">
        <van-button
          type="default"
          class="p-button p-button-c"
          @click="next"
          :disabled="disabled"
        >下一步</van-button>
      </div>
      <p class="tip tc">账户安全险保障中</p>
    </div>
    <van-popup class="c-popup-2" v-model="show" :close-on-click-overlay="false">
      <header class="tl">提示</header>
      <div class="pop-con">
        <div class="tips tc">
          <p>
            真实姓名保存后不能修改，
            <br />是否确认为您本人？
          </p>
        </div>
        <div class="button-wrap">
          <van-button type="default" class="p-button-d" @click.stop="show=false">取消</van-button>
          <van-button type="default" class="p-button-s" @click.stop="updatePassword">确认</van-button>
        </div>
      </div>
    </van-popup>
    <van-popup class="c-popup" v-model="showInfo" :close-on-click-overlay="false" closeable>
      <header>持卡人说明</header>
      <div class="pop-con">
        <p>确认为了保证账户资金安全，请绑定账户真实姓名本人的银行卡</p>
        <van-button type="default" class="p-button-s" @click.stop="showInfo=false">确认</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script>
import navCmp from "../../../../components/nav";
import { addBankCard } from "@/api/user";
export default {
  name: "",
  components: { navCmp },
  data() {
    return {
      disabled: true,
      name: "",
      bankNum: "",
      show: false,
      showInfo: false
    };
  },
  created() {},
  mounted() {},
  methods: {
    back() {
      this.$router.go(-1);
    },
    async addBankCard() {
      let params = {
        cardNo: "222222222",
        name: "测试"
      };
      await addBankCard(params).then(res => {
        console.log(res);
      });
    },
    getInputValue() {
      this.name !== "" && this.bankNum
        ? (this.disabled = false)
        : (this.disabled = true);
    },
    next() {
      this.show = true;
      this.addBankCard()
    },
    showInfoP() {
      this.showInfo = true;
    }
  },
  watch: {}
};
</script>
<style scoped lang="scss">
@import "../../../../assets/css/reset.css";
@import "../../css/popup.scss";
.page {
  background-color: #f0f1f6;
  overflow: hidden;
}
.lContent {
  position: relative;
  height: calc(100% - 46px);
  overflow: auto;
}
.cell {
  height: 1.27rem;
  line-height: 1.27rem;
  padding: 0 0.3rem;
  > div {
    display: flex;
    font-size: 0.3rem;
  }
  span {
    width: 20%;
  }
  .input-inner {
    width: 80%;
    input {
      width: 100%;
    }
  }
  .info-o {
    font-size: 0.4rem;
    color: #ef2827;
  }
}
.p-button-box {
  padding: 0.4rem 0.3rem 0.2rem;
}
.tip {
  font-size: 0.26rem;
  color: #fa4639ff;
}
.tips {
  padding: 0.3rem 0;
}
</style>
<style scoped>
.page >>> .van-cell-group__title {
  font-size: 0.3rem;
  color: #808080ff;
  padding: 0.2rem 0.3rem;
}
.c-popup >>> .van-popup__close-icon {
  color: #fff;
  top: 0.14rem;
}
</style>
