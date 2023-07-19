<template>
  <div>
    <div class="user-top">
      <div class="top-img"><img :src="backgroundUrl" alt=""><router-link :to="{name:'Message'}"><i class="el-icon-setting"></i></router-link></div>
      <div class="top-main">
        <img :src="avatarUrl" alt="">
        <h3>{{nickname}}</h3>
      </div>
    </div>
    <div class="user-bottom">
      <section class="nav">
        <div>主页</div>
        <div>动态</div>
        <div>播客</div>
      </section>
      <div class="create-songs">
        <h3 class="title">创建的歌单</h3>
        <div class="myList" v-for="item in myList" :key="item.name">
            <img :src="`${item.coverImgUrl}`" alt="" />
            <router-link class="a"
            :to="{
              name: 'PlayListDetail',
              query: {
                id: item.id,
              },
            }"
          >
            <div class="right">
              <div class="name">{{ item.name }}</div>
              <div class="detail">
                {{ item.trackCount }}首,播放{{ item.playCount }}次
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="collect-songs">
        <h3 class="title">收藏的歌单</h3>
        <div class="myList" v-for="item in otherList" :key="item.name">
          <img :src="`${item.coverImgUrl}`" alt="" />
          <router-link class="a"
            :to="{
              name: 'PlayListDetail',
              query: {
                id: item.id,
              },
            }"
          >
            <div class="right">
              <div class="name">{{ item.name }}</div>
              <div class="detail">
                {{ item.trackCount }}首,播放{{ item.playCount }}次
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getData } from "../api";
import { getPlayList } from "../api/user/index";
export default {
  data() {
    return {
      myList: [],
      otherList: [],
      nickname:'',
      avatarUrl:'',
      backgroundUrl:''
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      getData().then((data) => {
        console.log("data", data);
        let {profile}=data.data;
        this.nickname= profile.nickname;
        this.avatarUrl=profile.avatarUrl;
        this.backgroundUrl=profile.backgroundUrl
      });
      let userid=localStorage.getItem("userid");
      getPlayList(userid).then((data) => {
        let { playlist } = data.data;
        let nickname=localStorage.getItem("nickname");
        playlist.filter((item) => {
          if (item.creator.nickname ===nickname) {
            this.myList.push(item);
          } else {
            this.otherList.push(item);
          }
        });
      });
    },
  },
};
</script>
<style lang="less" scoped>
.user-top {
  background-color:  rgb(246,246,246);
  height: 60vh;
  // padding: 10px;
  .top-img {
    height: 50vh;
    width: 100%;
    background-color: rgb(152, 152, 190);
    position: relative;
    img{
      height: 100%;
      width: 100%;
    }
    i{
     position: absolute;
     font-size:0.3rem;
     right:10px;
    }
  }
  .top-main {
    height: 20vh;
    background-color: rgb(255,255,255);
    border-radius: 20px;
    width: 80%;
    margin:0 auto;
    text-align: center;
    opacity: 0.5;
    position: relative;
    bottom: 10%;
    img{
      width: 16%;
      position: relative;
      bottom:20px;
      border-radius: 50%;
    }
  }
}
.user-bottom {
  background-color: rgb(246,246,246);
  .nav {
    // background-color: pink;
    height: 3vh;
    display: flex;
    justify-content: space-around;
    div {
      // border: 1px solid red;
      font-size: 0.2rem;
      display: flex;
      align-items: center;
    }
  }
  .create-songs,
  .collect-songs {
    // margin-top: 10px;
    background-color: rgb(255,255,255);
    margin: 2px 10px;
    border-radius: 10px;
    padding: 2px 15px;
    .title {
      font-size: 0.16rem;
      color: #2e3030;
    }
    .myList {
      border-bottom: 1px solid #e4e4e4;
      display: flex;
      align-items: center;
      height: 0.6rem;
     
      img {
        width: 16%;
        border-radius: 10px;
      }
      .a{
        width: 100%;
      }
      .right {
        height: 100%;
        width: 80%;
        margin-left: 3%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .name {
          font-size: 0.16rem;
        }
        .detail {
          font-size: 0.14rem;
          color: #757575;
        }
      }
    }
  }
}
</style>
