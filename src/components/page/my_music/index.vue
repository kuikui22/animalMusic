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
                <a>
                  <font-awesome-icon icon="music" />
                  <span>
                    本地音樂
                    <small>(0)</small>
                  </span>
                </a>
              </li>
              <li> 
                <a>
                  <font-awesome-icon icon="play-circle" />
                  <span>
                    最近播放
                    <small>(1)</small>
                  </span>
                </a>
              </li>
              <li>
                <a>
                  <font-awesome-icon icon="cloud-download-alt" />
                  <span>下載管理
                    <small>(1)</small>
                  </span>
                </a>
              </li>
              <li>
                <a>
                  <font-awesome-icon icon="robot" />
                  <span>我的電台
                    <small>(1)</small>
                  </span>
                </a>
              </li>
              <li>
                <a>
                  <font-awesome-icon icon="star" />
                  <span>
                    我的收藏
                    <small>(專輯 / 歌手 / 視頻 / Mlog)</small>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div class="music-create">
            <div class="title">
              <a class="angle_flag" @click="changeListShow"><font-awesome-icon icon="angle-down" :class="{rotate_flag: !showList}" /></a>
              <h5>創建的歌單</h5>
              <small>(1)</small>
              <div class="title-btn_group">
                <span><font-awesome-icon icon="plus" /></span>
                <span><font-awesome-icon icon="ellipsis-v" /></span>
              </div>
            </div>
            <transition name="slide_down">
              <div class="create_list" v-show="showList">
                <div class="create_media">
                  <div class="media_img"><font-awesome-icon icon="heart" /></div>
                  <div class="media_body">
                    <h5 class="mt-0">我喜歡的音樂</h5>
                    <p>0首</p>
                    <span><font-awesome-icon icon="heartbeat" />心動模式</span>
                  </div>
                </div>  
              </div>
            </transition> 
            <div class="create_cut"><font-awesome-icon icon="hand-peace" />&nbsp;截圖導入歌單</div>
          </div>

          <div class="music-recommend">
            <div class="title">
              <span class="icon_span"><font-awesome-icon icon="heart" /></span>
              <h5>推薦歌單</h5>
              <span class="close">&#10006;</span>
            </div>
            <div class="row">
              <div v-for="item in recommendList" class="col-4">
                <img :src="item.img"/>
                <p>{{ item.title }}</p>
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
