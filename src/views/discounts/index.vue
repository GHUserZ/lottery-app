<template>
  <div class="page">
    <nav-cmp :title="'优惠活动'" class="nav" />
    <div class="lContent">
      <van-collapse v-model="activeNames">
        <van-collapse-item name="1">
          <div slot="title">标题1 <van-icon name="question-o" /></div>
          内容
        </van-collapse-item>

        <van-collapse-item
          title="标题2"
          name="2"
          icon="shop-o"
        >
          内容
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script>
import navCmp from "../../components/nav";
export default {
  name: 'discounts',
  components: {navCmp},
  data() {
    return {
      activeNames: ['1']
    }
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
}
</script>

<style scoped lang="scss">
.page {
  background-color: #f0f1f6;
}
</style>
