<template>
  <div class="page">
    <nav-cmp :title="'提现地址管理'" :leftArrow="true" :fixed="true" @onClickLeft="back"></nav-cmp>
    <div class="lContent">
      <ul>
        <li
          v-for="(item,index) in addressData"
          :key="index"
          @touchstart="gtouchstart(item)"
          @touchmove="gtouchmove()"
          @touchend="gtouchend(item)"
        >
          <van-cell title="我的BYS地址" size="large" icon="location" :label="item.address" class="cell">
            <van-icon slot="right-icon" name="weapp-nav" style="line-height: inherit;" />
          </van-cell>
        </li>
      </ul>
      <div class="p-button-box">
        <van-button type="default" class="p-button p-button-c" @click="skipAddress">添加地址</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import navCmp from "../../../../components/nav";
import { addAddress, getAddressList, delAddress } from "@/api/user";
let timeOutEvent = null;
export default {
  components: { navCmp },
  data() {
    return {
      addressData: []
    };
  },
  created() {},
  mounted() {
    this.getAddressList();
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    async getAddressList() {
      let parmas = {
        pageNo: 1,
        pageSize: 10,
        type: 2
      };
      await getAddressList(parmas).then(res => {
        this.addressData = res.data.list;
      });
    },
    skipAddress() {
      this.$router.push({ name: "meAddAddress" });
    },
    //开始按
    gtouchstart(item) {
      timeOutEvent = setTimeout(() => {
        this.longPress(item);
      }, 500); //这里设置定时器，定义长按500毫秒触发长按事件
      return false;
    },
    //手释放，如果在500毫秒内就释放，则取消长按事件，此时可以执行onclick应该执行的事件
    gtouchend(item) {
      clearTimeout(timeOutEvent); //清除定时器
      if (timeOutEvent != 0) {
        //这里写要执行的内容（尤如onclick事件）
        this.skipWithdrawBys(item)
      }
      return false;
    },
    //如果手指有移动，则取消所有事件，此时说明用户只是要移动而不是长按
    gtouchmove() {
      clearTimeout(timeOutEvent); //清除定时器
      timeOutEvent = 0;
    },

    //真正长按后应该执行的内容
    longPress(item) {
      timeOutEvent = 0;
      //执行长按要执行的内容，如弹出菜单
      this.$dialog
        .confirm({
          message: "确认删除地址？"
        })
        .then(() => {
          this.delAddressData(item);
        })
        .catch(() => {
          console.log("取消");
        });
    },
    delAddressData(ele) {
      for (const item of this.addressData) {
        if (item.id === ele.id) {
          const index = this.addressData.indexOf(item);
          this.addressData.splice(index, 1);
          this.delAddress(item.id);
          break;
        }
      }
    },
    async delAddress(id) {
      await delAddress({ id }).then(res => {
        if (res.code === "0") {
          this.$toast(res.data);
        }
      });
    },
    skipWithdrawBys(item){
      this.$router.push({name:'meWithdrawBys',query:{'address':item.address}})
    }
  },
  watch: {}
};
</script>

<style scoped lang="scss">
@import "../../../../assets/css/reset.css";
.page {
  background-color: #f0f1f6;
  overflow: hidden;
}
.lContent {
  position: relative;
  height: calc(100% - 46px);
  overflow: auto;
}
ul {
  padding: 0.2rem 0.2rem 1.5rem 0.2rem;
  li {
    margin-bottom: 0.2rem;
    .cell {
      border-radius: 0.1rem;
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
