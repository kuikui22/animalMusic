<template>
    <div class="friends">
        <nav-menu></nav-menu>
        <div class="friends-contain">
            <div class="friends-block" v-for="(item, index) in friendsActionList" :key="item.ID" :class="{'friends-block_border': index < (friendsActionList.length-1)}">
                <div class="title media">
                    <img :src="item.friends.friendImg" class="align-self-center" />
                    <div class="media-body">
                        <span class="name">{{ item.friends.friendName }}</span>
                        {{ item.article.action }}:
                        <small>{{ item.friends.fans }}</small>
                        <span class="attention">+ 關注</span>
                    </div>
                </div>
                <div class="content">
                    {{ item.article.content }}
                    <img :src="item.article.img" class="align-self-center" />
                </div>
                <div class="music" v-if="item.musicList.music_name">
                    <div class="media">
                        <img :src="item.friends.friendImg" class="align-self-center" />
                        <div class="media-body">
                            {{ item.musicList.music_name }}
                            <small>{{ item.friends.fans }}</small>
                        </div>
                    </div>
                </div>
                <div class="bottom_info">
                    <div>
                        <font-awesome-icon icon="retweet" /> {{ item.article.plays }}
                    </div>
                    <div>
                        <font-awesome-icon icon="comment-dots" /> {{ item.article.comments }}
                    </div>
                    <div>
                        <font-awesome-icon icon="thumbs-up" /> {{ item.article.great }}
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