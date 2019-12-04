<template>
  <div class="page">
    <div class="lContent">
      <div class="top-bar">
        <ul class="tabs">
          <li
            @click="onTabClick(item.id)"
            :class="winStatus===item.id ? 'active' : ''"
            v-for="item in tabData"
            :key="item.id"
          >{{item.name}}</li>
        </ul>
        <van-dropdown-menu>
          <van-dropdown-item
            v-model="value"
            :options="option1"
            class="dropdown"
            @change="dropdownChange"
          />
        </van-dropdown-menu>
      </div>
      <van-list
        class="game-wrapper"
        v-model="loading"
        :finished="finished"
        finished-text
        @load="onLoad"
      >
        <li v-for="(item,index) in list" :key="index" class="game-item">
          <div class="game-info">
            <h2 class="title">编号：{{item.sn}}</h2>
            <div class="game-info-inner">
              <p>{{item.lotteryName}}（{{item.period}}期）</p>
              <p>投注内容：{{item.playName}}</p>
              <p>注数：1</p>
              <p>投注金额：{{item.orderAmount}}</p>
              <p>开奖号码：{{item.sn}}</p>
              <p>中奖金额：{{item.winAmount}}</p>
              <p>状态：{{item.type}}</p>
              <van-button type="default" class="p-button-s" v-if="item.type==='待开奖'">撤单</van-button>
            </div>
          </div>
        </li>
      </van-list>
    </div>
  </div>
</template>

<script>
import gameMixin from '../../../mixins/game'
export default {
  name: "",
  mixins:[gameMixin],
  components: {},
  data() {
    return {
      
    };
  },
  created() {},
  mounted() {
    this.getTeamOrderRecords();
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    onTabClick(i) {
      this.winStatus = i;
    }
  },
  watch: {
    winStatus() {
      this.initTeamOrderRecords();
    },
    value() {
      this.initTeamOrderRecords();
    }
  }
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
  padding-top: 0;
  //   padding-top:1.4rem;
}
// .top-bar{
//   width: 100%;
//   position: fixed;
//   top:89px;
//   z-index: 100;
// }
.tabs {
  display: flex;
  justify-content: center;
  li {
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
    background-color: #fff;
    border: 1px solid #ebebeb;
    box-sizing: border-box;
    margin: 0 0 -1px -1px;
    border-top: none;
    font-size: 0.24rem;
    color: #333;
    &.active {
      color: #fff;
      background-color: #f10f11;
    }
  }
}
.dropdown {
  .van-cell__title {
    font-size: 18px;
  }
}
.game-wrapper {
  //   margin-top: 1.4rem;
}
.game-item {
  margin: 0.11rem 0.3rem;
}
.game-info {
  border-radius: 0.1rem;
  background-color: #fff;
  .title {
    font-weight: normal;
    border-bottom: 1px solid #ebebeb;
    padding: 0.2rem;
    font-size: 0.24rem;
    color: #4d4d4d;
  }
  .game-info-inner {
    position: relative;
    padding: 0.2rem;
    p {
      font-size: 0.24rem;
      color: #4d4d4d;
      margin-bottom: 0.2rem;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
.p-button-s {
  position: absolute;
  right: 0.2rem;
  bottom: 0.4rem;
  border-radius: 0.07rem;
}
</style>
<style scoped>
.dropdown >>> .van-cell__title {
  font-size: 0.24rem;
  color: #333;
  text-align: center;
}
.dropdown >>> .van-cell__value {
  display: none;
}
.dropdown >>> .van-dropdown-item__option--active,
.page >>> .van-dropdown-menu__title--active {
  color: #333;
}
.page >>> .van-dropdown-menu__title {
  font-size: 0.24rem;
  color: #333;
}
.page >>> .van-dropdown-menu {
  height: 0.66rem;
}
</style>
