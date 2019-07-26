<template>
  <div class="discovery">
    <nav-menu></nav-menu>
    <div id="discovery_contain" class="discovery-contain">
      <transition-group id="carousel" ref="carousel" tag="div" class="contain-slider" :style="carouselStyle" name="slider">
          <img :src="getNowImg" :key="currentImg" />
          <div class="carousel_nav" key="carousel_nav">
            <span v-for="(num, value) in carouselImages" :class="[{active: (value === currentImg)}]"></span>
          </div>
      </transition-group>
      <div class="contain-menu">
        <div>
          <a href="#">
            <span class="rounded-circle">
              <font-awesome-icon icon="calendar-alt" />
            </span>
            <p>每日推薦</p>
          </a>
        </div>
        <div>
          <a href="#">
            <span class="rounded-circle">
              <font-awesome-icon icon="clipboard-list" />
            </span>
            <p>歌單</p>
          </a>
        </div>
        <div>
          <a href="#">
            <span class="rounded-circle">
              <font-awesome-icon icon="chart-bar" />
            </span>
            <p>排行榜</p>
          </a>
        </div>
        <div>
          <a href="#">
            <span class="rounded-circle">
              <font-awesome-icon icon="headset" />
            </span>
            <p>電台</p>
          </a>
        </div>
        <div>
          <a href="#">
            <span class="rounded-circle">
              <font-awesome-icon icon="fingerprint" />
            </span>            
            <p>直播</p>
          </a>
        </div>
      </div>
      <div>
        <div class="contain-block">
          <div>
            <h5>推薦歌單</h5>
            <small>歌單廣場</small>
          </div>
          <div class="row">
            <a v-for="item in songList" class="col-4">
              <div class="position-relative">
                <img class="rounded img-fluid w-100" :src="item.img" />
                <span class="block-mask">
                  <font-awesome-icon icon="play" />
                  {{ item.playTimes }}
                </span>
              </div>
              <p>{{ item.title }}</p>
            </a>
          </div>
        </div>
        <div class="contain-block">
          <div>
            <h5>新碟</h5>
            <small>更多新碟</small>
          </div>
          <div class="row">
            <a v-for="item in newCD" class="col-4">
              <div>
                <img class="rounded img-fluid w-100" :src="item.img" />
              </div>
              <p class="mb-0">{{ item.title }}</p>
              <p class="block_font">{{ item.author }}</p>
            </a>
          </div>
        </div>
        <div class="contain-block_1">
          <div id="cloud_tit" class="block-title" :class="{sticky: cloudSticky}">
            <h5>雲村精選(js sticky)</h5>
            <small><font-awesome-icon icon="undo" />獲取新內容</small>
          </div>
          <div class="row p-1">
            <div class="block_s block_font col-12" v-for="(item, key) in newsList" :class="[{'border-b': key < (newsList.length-1)}]">
              <p>{{ item.title }}</p>
              <div class="block-content" :class="[{bg_gray: (item.img)},{'p-1': (!item.img)}]">
                <img :src="item.img" />
                {{ item.content }}
                <div class="p-2">
                  <font-awesome-icon icon="headphones-alt" v-if="!item.img"/>
                  {{ item.s_title }}
                </div>
              </div>
              <span class="block-great"><font-awesome-icon icon="thumbs-up" />{{ item.great }}</span>
              <span class="block-comment"><font-awesome-icon icon="comment-dots" />{{ item.comment }}</span>
              <span class="block-menu"><font-awesome-icon icon="ellipsis-v" /></span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script type="text/javascript" src="./index.js"></script>

<style lang="less" scoped>
  @import url('~_assets/style/mixin.less');
  @import url('./index.less');
</style>
