<template>
  <div class="page">
    <nav-cmp :title="'添加BYS地址'" :leftArrow="true" :fixed="true" @onClickLeft="back"></nav-cmp>
    <div class="lContent">
      <div class="from-wrap">
        <div class="input-inner">
          <input v-model="address" type="text" placeholder="输入或粘贴BYS地址" />
        </div>
        <div class="input-inner">
          <input v-model="remark" type="text" placeholder="请输入备注信息" maxlength="50"/>
        </div>
      </div>
      <div class="p-button-box">
        <van-button type="default" class="p-button p-button-c" @click="addAddress">确定</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import navCmp from "../../../../../components/nav";
import { addAddress } from "@/api/user";
let timeOutEvent = null;
export default {
  name: "addAddress",
  components: { navCmp },
  data() {
    return {
      address: "",
      remark: ""
    };
  },
  created() {},
  mounted() {},
  methods: {
    back() {
      this.$router.go(-1);
    },
    addAddress() {
      let parmas = {
        address:this.address,
        remark:this.remark,
        stype: 20003
      };
      addAddress(parmas).then(res => {
        if(res.code==='0'){
          this.$toast('添加成功')
          setTimeout(() => {
            this.$toast.clear()
            this.back()
          },2000)
        }
      });
    }
  },
  watch: {}
};
</script>

<style scoped lang="scss">
@import "../../../../../assets/css/reset.css";
.page {
  background-color: #f0f1f6;
  overflow: hidden;
}
.lContent {
  position: relative;
  height: calc(100% - 46px);
  overflow: auto;
}
.from-wrap {
  padding: 0 0.3rem;
  .input-inner {
    margin-top: 0.2rem;
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
}
.p-button-box {
  position: fixed;
  width: 94%;
  bottom: 0.6rem;
  padding: 0 3%;
}
</style>
