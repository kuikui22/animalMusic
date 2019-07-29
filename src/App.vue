<template>
  <div id="app" class="h-100">
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  name: 'app',
  components: {}
}
</script>

<style lang="less">
  @import url('~_assets/style/my_style.less');

  .router-fade-enter-active {
	  	transition-property: all;
      transition-duration: .18s;
      transition-delay: 0s;
      transition-timing-function: ease;
  }
  .router-fade-leave-active {
    transition-property: all;
    transition-duration: .18s;
    transition-delay: 0s;
    transition-timing-function: cubic-bezier(.92,.01,.8,.9);
  }
  .router-fade-enter {
    transform: translate(100%, 0);
    opacity: 0;
  }
  .router-fade-leave-to {
    transform: translate(-100%, 0);
    opacity: 0;
  }
</style>
