<template>
  <div class="page"  ref="outerWrapper" >
    <nav-cmp
      :title="'提现'"
      :leftArrow="true"
      :fixed="true"
      :address="true"
      @onClickLeft="back"
      @onClickRight="onClickRight"
    ></nav-cmp>
    <div class="lContent">
      <van-cell title="币种" value="BYS" class="cell"></van-cell>
      <div class="from-wrapper">
        <div class="from-item">
          <div class="label">提币地址</div>
          <div class="input-inner">
            <input
              v-model="address"
              type="text"
              placeholder="输入或粘贴地址"
              @input="getInputValue"
              @focus="onFocus"
            />
          </div>
        </div>
        <div class="from-item">
          <div class="label">地址备注</div>
          <div class="input-inner">
            <input
              v-model="remark"
              type="text"
              placeholder="如钱包、交易所等地址信息"
              @input="getInputValue"
              @focus="onFocus"
            />
          </div>
        </div>
        <div class="from-item">
          <div class="label">
            提币数量
            <a href="javascript:;" class="r">全部</a>
          </div>
          <div class="input-inner">
            <input
              v-model="amount"
              type="text"
              placeholder="最低提币10个"
              @input="getInputValue"
              @focus="onFocus"
            />
          </div>
        </div>
        <div class="from-item">
          <div class="label">
            当前可提
            <span class="txt">1000 BYS</span>
          </div>
        </div>
        <div class="from-item">
          <div class="label">
            手续费
            <span class="txt">1%</span>
          </div>
        </div>
        <div class="tips">
          <p>最小提币数量为：500BYS（500 金币）。</p>
          <p>为保障资金安全，当您账户安全策略变更、密码修改、我们会对提币进行人工审核，请耐心等待工作人员电话或邮件联系。</p>
          <p>请务必确认电脑及浏览器安全，防止信息被篡改或泄露。</p>
        </div>
      </div>
      <van-button
        type="default"
        class="p-button p-button-c"
        :disabled="disabled"
        @click="mentionMoney"
      >提币</van-button>
    </div>
    <van-popup class="c-popup-2" v-model="show" :close-on-click-overlay="false">
      <header>提示</header>
      <div class="pop-con">
        <p class="txt" v-if="!isPwd">{{message}}</p>
        <div class="input-inner" v-else>
          <input type="password" v-model="password" placeholder="请输入资金密码" />
        </div>
        <div class="button-wrap">
          <van-button type="default" class="p-button-d" @click.stop="show=false">取消</van-button>
          <van-button v-if="isPwd" type="default" class="p-button-s" @click.stop="show=false">确认</van-button>
          <van-button v-else type="default" class="p-button-s" @click.stop="show=false">立即设置</van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import navCmp from "../../../../components/nav";
import {mapGetters} from 'vuex'
import {BysDraw} from '@/api/pay'
export default {
  name: "bys提现",
  components: { navCmp },
  data() {
    return {
      address:this.$route.query.address ||  "",
      remark: "",
      amount: "",
      show: false,
      message: "您未设置资金密码，请前往设置",
      isPwd: true,
      password: "",
      disabled: true
    };
  },
  computed:{
    ...mapGetters([
      'userInfo'
    ])
  },
  created() {},
  mounted() {
    console.log('userInfo')
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push({ name: "meWithdrawAddress" });
    },
    mentionMoney() {
      this.show = true;
    },
    onFocus(){
     this.$refs.outerWrapper.scrollIntoView();
    },
    getInputValue() {
      if (this.address !== "" && this.remark !== "" && this.num !== "") {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
    async BysDraw(){
      let params = {
        address:this.address,
        amount:this.amount
      }
      await BysDraw(params).then((res) =>{
        console.log(res)
      }).catch((err) => {
        console.log(err.message)
      })
    }
  },
  watch: {}
};
</script>

<style scoped lang="scss">
@import "../../../../assets/css/reset.css";
.lContent {
padding-top: 46px;
padding-bottom: 50px;
height: 100%;
}
.page {
  background-color: #f0f1f6;
}
.cell {
  font-size: 0.3rem;
  margin-top: 0.2rem;
  span {
    color: #333;
  }
}
.from-wrapper {
  padding: 0.3rem;
  .label {
    position: relative;
    font-size: 0.3rem;
    color: #4d4d4d;
    margin-bottom: 0.2rem;
    .txt {
      margin-left: 0.2rem;
    }
    .r {
      position: absolute;
      right: 0;
      color: #fd8727;
    }
  }
  .input-inner {
    input {
      width: 100%;
      height: 0.66rem;
      border: 1px solid #ccc;
      border-radius: 0.1rem;
      text-indent: 0.2rem;
      font-size: 0.3rem;
      color: #333;
    }
  }
  .from-item {
    margin-bottom: 0.38rem;
  }
  .tips {
    p {
      font-size: 0.24rem;
      color: #eb3828;
      line-height: 0.35rem;
    }
  }
}
.p-button {
  display: block;
    width: 94%;
    margin: 0.2rem auto 0;
    font-size: 0.3rem;
    &:disabled{
        opacity: 1;
        background: #ccc
    }
}
.c-popup-2 {
  width: 80%;
  height: 3.7rem;
  header {
    height: 0.62rem;
    line-height: 0.62rem;
    background-color: #ff3d3d;
    padding-left: 0.2rem;
    color: #fff;
    text-align: center;
  }
  .txt {
    padding-top: 0.4rem;
  }
  .pop-con {
    display: flex;
    justify-content: center;
    position: relative;
    padding: 0.2rem;
    height: 2.5rem;
    font-size: 0.25rem;
    color: #595959;
    text-align: center;
  }
  .button-wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 0.2rem;
  }
  .p-button-d,
  .p-button-s {
    width: 45%;
    height: 0.6rem;
    line-height: 0.6rem;
    margin: 0 0.2rem;
  }
  .input-inner {
    width: 100%;
    margin-top: 0.4rem;
    input {
      width: 100%;
      height: 0.6rem;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(224, 224, 224, 1);
      border-radius: 0;
      text-indent: 0.2rem;
    }
  }
}
</style>