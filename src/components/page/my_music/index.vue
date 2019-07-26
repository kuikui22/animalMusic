<template>
    <div class="my_music">
        <nav-menu></nav-menu>
        <div class="my_music-contain">
          <div class="my_music-menu">
            <a v-for="item in myMusicMenu">
              <span>
                <font-awesome-icon :icon="item.iconName" />
              </span>
              <p>{{ item.name }}</p>
            </a>
            <a>
              <span>
                <font-awesome-icon icon="bars" />
              </span>
              <p>編輯</p>
            </a>
          </div>
          <div class="music-menu-mid">
            <ul>
              <li>
                <a><font-awesome-icon icon="music" />本地音樂(0)</a>
              </li>
              <li>
                <a><font-awesome-icon icon="play-circle" />最近播放(1)</a>
              </li>
              <li>
                <a><font-awesome-icon icon="cloud-download-alt" />下載管理(1)</a>
              </li>
              <li>
                <a><font-awesome-icon icon="robot" />我的電台(1)</a>
              </li>
              <li>
                <a><font-awesome-icon icon="star" />我的收藏(專輯/歌手/視頻/Mlog)</a>
              </li>
            </ul>
          </div>
          <div>
            創建的歌單
          </div>
          <div>
            推薦歌單
          </div>
        </div>
    </div>
</template>

<script type="text/javascript" src="./index.js"></script>

<style lang="less" scoped>
  @import url('~_assets/style/mixin.less');
  @import url('./index.less');
</style>
