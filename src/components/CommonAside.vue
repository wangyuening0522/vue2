<template>
  <div class="home">
    <transition-group appear name="aside">
      <i
        class="el-icon-s-fold"
        @click="show"
        v-show="!isShow"
        :style="{ fontSize: '20px' }"
        key="1"
      ></i>
      <div class="outside" key="2" v-show="isShow">
        <div class="aside">
          <div class="title"><router-link class="a" :to="{name:'User'}"><img :src="avatarUrl" alt="" />{{ nickname }}</router-link></div>
          <div class="heijiao">续费黑胶vip</div>
          <div class="aside1">
            <ul>
              <li>我的消息</li>
              <li>云贝中心</li>
              <li>创作者中心</li>
            </ul>
          </div>
          <div class="aside2">
            <ul>
              <li>趣测</li>
              <li>云村有票</li>
              <li>多多西西口袋</li>
              <li>商城</li>
              <li>Beat专区</li>
              <li>口袋彩铃</li>
              <li>游戏专区</li>
            </ul>
          </div>
        </div>
        <div @click="isShow = !isShow" class="shenyu"></div>
      </div>
    </transition-group>
  </div>
</template>
<script>
// import {useAsideStore} from "../store"
export default {
  data() {
    return {
      isShow: false,
      nickname: "",
      avatarUrl: "",
    };
  },
  mounted() {
    this.getTitle();
  },
  // props:['isShow'],
  methods: {
    /* getState(){
    const asideStore=useAsideStore();
    console.log(asideStore.isShow);
    return asideStore.isShow;
   },
   handleChangeState(){
    const asideStore=useAsideStore();
    asideStore.changeState();
     return asideStore.isShow;
   } */
    show() {
      this.isShow = !this.isShow;
      console.log("show", this.isShow);
    },
    getTitle() {
      this.nickname = localStorage.getItem("nickname");
      this.avatarUrl = localStorage.getItem("avatarUrl");
    },
  },
};
</script>
<style scoped lang="less">
.aside {
  background-color: rgb(246, 246, 246);
  width: 80vw;
  height: 100vh;
  padding: 10px;
  font-size: 20px;
  .title {
    img {
      width: 16%;
      border-radius: 50%;
      margin-right: 10px;
    }
    .a{
      display: flex;
    align-items: center;
    }
   
  }
  div {
    margin-bottom: 20px;
    padding: 15px;
    box-sizing: border-box;
    border-radius: 30px;
  }
  .heijiao {
    height: 100px;
    width: 100%;
    background-color: rgb(155, 140, 113);
  }
  .aside1,
  .aside2 {
    background-color: rgb(255, 255, 255);
    li {
      line-height: 30px;
      height: 30px;
      border-bottom: 1px solid rgb(149, 146, 146);
      font-size: 18px;
    }
  }
}
/* 进入的起点、离开的终点 */
.aside-enter,
.aside-leave-to {
  transform: translateX(-100%);
}
.aside-enter-active,
.aside-leave-active {
  transition: 0.5s linear;
}
/* 进入的终点、离开的起点 */
.aside-enter-to,
.aside-leave {
  transform: translateX(0);
}
.outside {
  display: flex;
  .shenyu {
    background-color: gray;
    height: 100vh;
    width: 20vw;
    opacity: 0.5;
  }
}
</style>
