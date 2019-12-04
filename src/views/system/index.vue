<template>
  <div class="page">
    <navCom :title="'帮助中心'" class="nav" :leftArrow="true" @onClickLeft="back" />
    <div class="lContent">
      <div class="card-item">
        <h2>BYS娱乐官方域名</h2>
        <div class="content">
          <ul>
            <li>官方域名 ：https://www.bys.com</li>
          </ul>
        </div>
        <div class="bottom">
          BYS 2019-10-16 17:33
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navCom from "../../components/nav";
export default {
  name: "money",
  components: { navCom },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/css/reset.css";
.page {
  background-color: #f0f1f6;
}
.lContent {
    padding-left: .3rem;
    padding-right: .3rem;
}
.card-item{
    h2{
        background: red;
        border-top-left-radius: .1rem;
        border-top-right-radius: .1rem;
        font-size: .24rem;
        height: .65rem;
        line-height: .65rem;
        color: #fff;
        font-weight: normal;
        padding-left: .2rem;
    }
    border-radius:.1rem;
    margin-top: .2rem;
    background: #fff;
    ul{
        padding: .2rem;
        font-size: .24rem;
        color: #4D4D4D;
        a{
            color: #4D4D4D;
        }
        li{
            line-height: 1.4;
            margin-bottom: .2rem;
        }
    }
}
.bottom{
  padding: .2rem;
  border-top: 1px solid #EBEBEB;
  font-size: .24rem;
  color: #4D4D4D;
}
</style>
