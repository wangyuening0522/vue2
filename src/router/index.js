import UserPage from "../views/UserPage.vue";
import CommonAsideVue from "@/components/CommonAside.vue";
import PlayListDetail from '../views/PlayListDetail.vue';
import LoginPage from '../views/LoginPage.vue'
import MessagePage from '../views/MessagePage.vue'
import EditPage from '../views/EditPage.vue'
import Vue from "vue";
import VueRouter from "vue-router";
import PlayControl from "../views/PlayControl.vue";
Vue.use(VueRouter);
const routes = [
  //登录页面
  {
    name: "LoginPage",
    path: "/login",
    component: LoginPage,
  },
  //主路由
  {
    name: "home",
    path: "/",
    component: CommonAsideVue,
    // redirect: "/home",
  },
  {
    //个人详情页
    path: "/user",
    name: "User",
    component: UserPage,
  },
  //歌单详情页
  {
    path: '/play-list-detail',
    name: 'PlayListDetail',
    component: PlayListDetail,
  },
  //歌词
  {
    path: '/song/:coverImgUrl',
    name: 'Song',
    component: PlayControl,
  },
  //登录
  {
    path:'/login',
    name:'LoginPage',
    component:LoginPage,
  },{
    path:'/message',
    name:'Message',
    component:MessagePage
  },
  {
    path:'/edit',
    name:'Edit',
    component:EditPage,
  }

];
const router = new VueRouter({
  routes: routes,
});
export default router;
