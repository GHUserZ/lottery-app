<template>
    <van-nav-bar :title="title" :left-arrow="leftArrow" @click-left="onClickLeft" fixed @click-right="onClickRight">
      <img v-if="icon" class="rightIcon" :src="icon" slot="right" />
      <div v-if="price" class="price" slot="right">余额：{{price}}</div>
    </van-nav-bar>
</template>

<script>
export default {
  props:['title','icon','leftArrow','price'],
  name: '',
  components: {},
  data() {
    return {

    }
  },
  created() {},
  mounted() {},
  methods: {
      onClickLeft(){
        this.$emit('onClickLeft')
      },
      onClickRight(){
        this.$emit('onClickRight')
      }
  },
  watch: {},
}
</script>
<style scoped>
.van-nav-bar .van-icon{
    color: #333;
    font-size: 20px;
}
 .van-nav-bar__title{ 
    font-family:'MicrosoftYaHei'; 
    color:#333;
    font-size: .36rem;
}
.rightIcon{
    width:.35rem;
    height:.29rem;
    margin-top:.3rem;
}
.price{
  font-size: .2rem;
  color: #333
}
</style>
