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
          {{item.title}}
          <div v-show="showlist[index]" @click.stop>{{item.content}}</div>
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
          title: "公告标题1",
          content: "公告内容1",
          src:activityImg
        },
        {
          title: "公告标题2",
          content:"公告内容2",
          src:activityImg
        },
        {
          title: "公告标题3",
          content: "公告内容3",
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
</style>
