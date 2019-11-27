<template>
  <div id="app">
    <!-- <transition :name="transitionName"> -->
      <navigation>
        <router-view class="Router" v-if="isRouterAlive"></router-view>
      </navigation>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$navigation.on("forward", (to, from) => {
      this.transitionName = "slide-left";
      console.log("前进");
    });
    this.$navigation.on("back", (to, from) => {
      this.transitionName = "slide-right";
      console.log("后退");
    });
    this.$navigation.on("replace", (to, from) => {
      console.log("替换");
    });
    this.$navigation.off("refresh", (to, from) => {
      console.log("刷新");
    });
    this.$navigation.on("reset", () => {
      console.log("重置");
    });
    this.resizeEvt()
  },
  data() {
    return {
      transitionName: "",
      isRouterAlive: true
    };
  },
  methods: {
    calculate_size () {
      let BASE_FONT_SIZE = 100;
      let docEl = document.documentElement,
        clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      let size =  BASE_FONT_SIZE * (clientWidth / 750) ;
      docEl.style.fontSize = size + 'px';
      if(size>56){
        size = 56;
        docEl.style.fontSize = size + 'px';
      }
    },
    // 如果浏览器不支持addEventListener，则中止
    resizeEvt(){
      if (document.addEventListener) {
        var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
        window.addEventListener(resizeEvt, this.calculate_size, false);
        document.addEventListener('DOMContentLoaded', this.calculate_size, false);
        this.calculate_size();
      }
    }
  }
};
</script>

<style>
@import './assets/css/reset.css';
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.Router {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  overflow: hidden;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
}
.turn-on-enter {
  transform: translate3d(100%, 0, 0);
}
.turn-on-leave-to {
  transform: translate3d(-100%, 0, 0);
}
.turn-on-enter-active,
.turn-on-leave-active {
  transition: transform 0.4s ease;
}
.turn-off-enter {
  transform: translate3d(-100%, 0, 0);
}
.turn-off-leave-to {
  transform: translate3d(100%, 0, 0);
}
.turn-off-enter-active,
.turn-off-leave-active {
  transition: transform 0.4s ease;
}
.turn-off-leave-active {
  z-index: 2;
}
</style>

