<template>
  <div id="app" class="h-100">
    <router-view></router-view>
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
</style>
