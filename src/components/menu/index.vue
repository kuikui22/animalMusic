<template>
  <div class="menu">

    <nav class="navbar navbar-expand-sm navbar-light bg-white fixed-top">
      <button class="menu-nav_btn" type="button" @click="clickMenu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <ul id="menu_main" class="nav justify-content-center">
        <li class="nav-item">
          <router-link v-for="item in mainMenu" :to="item.link" active-class="active">
            {{item.name}}
          </router-link>
        </li>
      </ul>
      <button class="menu-nav_btn px-2" type="button">
        <font-awesome-icon icon="search" />
      </button>
    </nav>

    <transition name="fade"> 
        <div class="mask" @click.stop="clickMenu" v-show="isShowMenu"></div>
    </transition> 

    <transition name="slide">       
        <div class="menu-nav_list bg-white" v-show="isShowMenu">
            <div class="nav_list-contain">
              <div class="menu-nav_list_top">
                  top show.
              </div>
              <div class="nav_list-nav">
                <span>
                  <a href="#">
                    <font-awesome-icon icon="envelope" />
                    <p>我的消息</p>
                  </a>
                </span>
                <span>
                  <a href="#">
                    <font-awesome-icon icon="user" />
                    <p>我的好友</p>
                  </a>
                </span>
                <span>
                  <a href="#">
                    <font-awesome-icon icon="tshirt" />
                    <p>個性換裝</p>
                  </a>
                </span>
                <span>
                  <a href="#">
                    <font-awesome-icon icon="microphone-alt" />
                    <p>聽歌識曲</p>
                  </a>
                </span>
              </div>
              <div class="nav_list-block">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <a href="#"><font-awesome-icon icon="crown" />演出</a>
                  </li>
                  <li class="nav-item">
                    <a href="#"><font-awesome-icon icon="shopping-cart" />商城</a>
                  </li>
                  <li class="nav-item">
                    <a href="#"><font-awesome-icon icon="map-marker-alt" />附近的人</a>
                  </li>
                  <li class="nav-item">
                    <a href="#"><font-awesome-icon icon="bell" />口袋鈴聲</a>
                  </li>
                  <li class="nav-item">
                    <a href="#"><font-awesome-icon icon="file-alt" />我的訂單</a>
                  </li>
                </ul>
              </div>
              <div class="nav_list-block">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a href="#"><font-awesome-icon icon="clock" />定時停止播放</a>
                  </li>
                  <li class="nav-item">
                    <a href="#"><font-awesome-icon icon="chess-board" />掃一掃</a>
                  </li>
                  <li class="nav-item">
                    <a href="#"><font-awesome-icon icon="business-time" />音樂鬧鐘</a>
                  </li>
                  <li class="nav-item">
                    <a href="#"><font-awesome-icon icon="headphones" />在線聽歌免流量</a>
                  </li>
                  <li class="nav-item">
                    <a href="#"><font-awesome-icon icon="robot" />遊戲推薦</a>
                  </li>
                  <li class="nav-item">
                    <a href="#"><font-awesome-icon icon="money-bill-wave" />優惠券</a>
                  </li>
                  <li class="nav-item">
                    <a href="#"><font-awesome-icon icon="microphone" />我要直播</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="nav_list-btm">
              <span>
                <a href="#">
                  <font-awesome-icon icon="moon" />
                  夜間模式
                </a>
              </span>
              <span>
                <a href="#">
                  <font-awesome-icon icon="cog" />
                  設置
                </a>
              </span>
              <span>
                <a href="#">
                  <font-awesome-icon icon="power-off" />
                  退出
                </a>
              </span>
            </div>
        </div>
    </transition>
    
  </div>
</template>

<script type="text/javascript" src="./index.js"></script>

<style lang="less" scoped>
  @import url('~_assets/style/mixin.less');
  @import url('./index.less');
</style>
