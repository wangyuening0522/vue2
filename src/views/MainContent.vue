<template>
<!-- 
  1.默认false，点击父组件图标true，图标v-if
  2.点击其余div，false
 -->
  <div>
    <!-- <i
      class="el-icon-s-fold"
      @click="handleChangeState"
      :style="{ fontSize: '20px' }"
    ></i>
    <CommonAside :isShow="this.isShow2"/> -->
    <router-view></router-view>
  </div>
</template>
<script>
// import CommonAside from "../components/CommonAside.vue";
// import { storeToRefs } from "pinia";
// import {useAsideStore} from "../store"
export default {
  name:"MainContent",
  data() {
    return {
    //  isShow2:false,
    };
  },
  components: {
    // CommonAside,
  },
  methods:{
  /*  handleChangeState(){
    const asideStore=useAsideStore();
    console.log("asideStore",asideStore);
    //响应式处理
    // const {isShow} =storeToRefs(asideStore);
    asideStore.changeState();
     return asideStore.isShow;
     this.isShow2=!this.isShow2;
   } */

  }
};
</script>
<style></style>
