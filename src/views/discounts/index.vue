<template>
  <div class="page">
    <nav-cmp :title="'优惠活动'" class="nav" />
    <div class="lContent">
      <ul class="clist">
        <li
          v-for="(item,index) in dlist"
          @click="listClick5(index)"
          :class="{selected: showlist[index]}"
          :key="index"
        >
          <img :src="item.src" alt="">
          <p class="t">{{item.title}} <van-icon name="play" class="play"/></p>
          <div class="tips-wrapper" v-show="showlist[index]" @click.stop>
            <h2>首存款送彩金</h2>
            <h3>活动详情</h3>
            <p>领取次数：仅限申请一次。</p>
            <p>实名认证：所有申请领取彩金会员必须绑定正确银行卡信息</p>
            <h3>活动规则：</h3>
            <p>首次充值金额100元或以上领取加奖8元</p>
            <p>首次充值金额500元或以上领取加奖38元</p>
            <p>首次充值金额1000元或以上领取加奖68元</p>
            <p>首次充值金额5000元或以上领取加奖98元</p>
            <p>首次充值金额10000元或以上领取加奖188元</p>
            <p>首次充值金额30000元或以上领取加奖388元</p>
            <p>首次充值金额50000元或以上领取加奖588元</p>     
            <p>*首次充值赠送活动充值金额不累计，会员仅限领取一次</p>
            <h3>注意事项：</h3 >
            <p>每个银行卡户名，每位会员，每一相同IP，每一电子邮箱，每一电话号码，相同支付方式（微信/支付宝/借记卡/信用卡/银行账户）及共享计算机环境（例如网吧，其他公用计算机等）只能享受一次优惠；若会员有重复申请账号行为，公司保留取消或收回会员优惠彩金的权利。</p>
            <p>鸿耀彩票的所有优惠为玩家而设，如发现任何团体或个人，以不诚实方式套取红利或任何威胁，滥用公司优惠等行为。公司保留冻结，取消该团体或个人账户结余的权利。</p>
            <p>若会员对活动有争议时，为确保双方利益，杜绝身份盗用行为，鸿耀彩票有权要求会员向我们提供充足有效文件，用以确认是否享有该优惠的资质。</p>
            <p>此活动可与其他优惠同时进行享用。</p>
            <p>鸿耀彩票保留对活动最终解释权；以及在无通知的情况下修改，终止活动的权利，适用于所有优惠，最终解释权归我方所有</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import navCmp from "../../components/nav";
import activityImg from './image/activity.png'
export default {
  name: "discounts",
  components: { navCmp },
  data() {
    return {
      activeNames: ["1"],
      dlist: [
        {
          title: "点击查看活动详情",
          content: "公告内容1",
          src:activityImg
        },
        {
          title: "点击查看活动详情",
          content:"公告内容2",
          src:activityImg
        }
      ],
      showlist: []
    };
  },
  created() {
    for (var x in this.dlist) {
      this.showlist.push(false);
    }
  },
  mounted() {},
  methods: {
    listClick5: function(index) {
      this.$set(this.showlist, index, !this.showlist[index]);
    }
  },
  watch: {}
};
</script>

<style scoped lang="scss">
.page {
  background-color: #f0f1f6;
}
img{
  width: 100%
}
.clist{
  padding: .24rem .3rem;
  li{
    border-bottom: 1px solid #ccc;
    margin-bottom: .3rem;
    padding-bottom: .2rem;
  }
  .t{
    font-size: .24rem;
    color: #4D4D4D;
    margin-top: .2rem;
  }
}
.tips-wrapper{
  h2,p,h3{
    font-size: .24rem;
    color: #4D4D4D;
  }
  h2{
    margin-top:.1rem;
  }
  p{
    line-height: 20px;
  }
  h3{
    margin-top: .2rem;
  }
}
.play{
  transform: rotate(90deg);
}
</style>
