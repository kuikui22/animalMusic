<template>
    <transition-group id="carousel" ref="carousel" tag="div" class="contain-slider" :style="carouselStyle" name="slider">
          <img :src="getNowImg" :key="currentImg" />
          <div class="carousel_nav" key="carousel_nav">
            <span v-for="(num, value) in carouselImages" :class="[{active: (value === currentImg)}]"></span>
          </div>
    </transition-group>
</template>

<script type="text/javascript" src="./index.js"></script>

<style lang="less" scoped>
  @import url('~_assets/style/mixin.less');
  @import url('./index.less');
</style>