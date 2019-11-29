<template>
  <div class="page">
    <nav-cmp :title="'银行卡'" :leftArrow="true" :fixed="true" @onClickLeft="back"></nav-cmp>
    <div class="lContent">
      <div class="bankCard">
        <ul class="bankCard-wrapper">
          <li v-for="item in bankCardData" :key="item.id">
            <div>
              <div class="bankImg">
                <img src="./image/gs.png" alt />
              </div>
            </div>
            <div class="bankInfo">
              <p>
                工商银行
                <span class="unit">储蓄卡</span>
              </p>
              <p class="cardNum">6221 **** **** **** 901</p>
            </div>
          </li>
        </ul>
        <div class="addBankCard" @click="skipAddBlank">
          <van-icon name="add-o" class="add" />
          <span>添加银行卡</span>
        </div>
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
      pageNo: 1,
      pageSize: 100,
      bankCardData: [
        {
          bankId: 0,
          bankName: 0,
          branchBankId: 0,
          branchBankName: 0,
          cardNo: "string",
          created: "2019-11-29T07:21:18.345Z",
          id: 0,
          modified: "2019-11-29T07:21:18.345Z",
          name: "string",
          userId: 0
        }
      ]
    };
  },
  created() {},
  mounted() {
    this.getBankCardList();
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    async getBankCardList() {
      let params = {
        pageNo: this.pageNo,
        pageSize: this.pageSize
      };
      await getBankCardList(params).then(res => {
        console.log(res);
        // this.bankCardData = res.data.list
      });
    },
    skipAddBlank() {
      this.$router.push({ name: "addBankCard" });
    }
  },
  watch: {}
};
</script>
<style scoped lang="scss">
@import "../../../assets/css/reset.css";
.page {
  background-color: #f0f1f6;
  overflow: hidden;
}
.lContent {
  position: relative;
  height: calc(100% - 46px);
  overflow: auto;
}
.bankCard {
  padding: 0.2rem 0.3rem;
}
.addBankCard {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 1.44rem;
  background: #fff;
  border-radius: 0.1rem;
  color: #a8a8a8ff;
  font-size: 0.3rem;
  span {
    margin-left: 0.1rem;
  }
  .add {
    font-size: 0.4rem;
    font-weight: bold;
  }
}
.bankCard-wrapper {
  li {
    display: flex;
    align-items: center;
    height: 1.44rem;
    background: linear-gradient(
      90deg,
      rgba(252, 106, 114, 1),
      rgba(255, 173, 123, 1)
    );
    border-radius: 0.1rem;
    margin-bottom: 0.2rem;
    > div:first-child {
      width: 1.47rem;
    }
  }
  .bankInfo {
    font-size: 0.3rem;
    color: #fff;
    line-height: 0.45rem;
    .unit {
      font-size: 0.24rem;
      padding-left: 0.1rem;
    }
  }
  .bankImg {
    width: 0.8rem;
    height: 0.8rem;
    border: 4px solid #fff;
    border-radius: 100px;
    background-color: #fff;
    margin: auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
