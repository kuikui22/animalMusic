<template>
    <div class="video">
        <nav-menu></nav-menu>
        <div class="video-contain">
            <div class="video-menu">
                <a class="active">
                    推薦<span></span>
                </a>
                <a>
                    Look直播<span></span>
                </a>
                <a>現場<span></span>
                </a>
                <a>MV<span></span>
                </a>
                <a>舞蹈<span></span>
                </a>
                <a>萌寵<span></span>
                </a>
                <a>
                    定制寶寶MV<span></span>
                </a>
                <a>
                    翻唱<span></span>
                </a>
                <a>
                    廣場<span></span>
                </a>
                <a>
                    ACG音樂<span></span>
                </a>
                <a>
                    生活<span></span>
                </a>
                <a>
                    最佳飯制<span></span>
                </a>
            </div>
            <div class="video-block" v-for="(item, index) in videoList" :class="{'video-block_border': index < (videoList.length-1)}">                
                <div class="title">
                    <img :src="item.img" />
                    <p>{{ item.content }}</p>
                </div>
                <div class="content">
                    <span>
                        <img :src="item.authorImg" />
                        {{ item.author }}
                    </span>
                    <div class="icon_group">
                        <span><font-awesome-icon icon="thumbs-up" />{{ item.great }}</span>
                        <span><font-awesome-icon icon="comment-dots" />{{ item.comment }}</span>
                        <span><font-awesome-icon icon="ellipsis-v" /></span>
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