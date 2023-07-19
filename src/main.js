import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { createPinia, PiniaVuePlugin } from "pinia";
import router from "./router";
import loading from "./assets/loading.jpg";
import Cookie from "js-cookie";
Vue.use(PiniaVuePlugin);
const pinia = createPinia();
Vue.config.productionTip = false;
Vue.use(ElementUI);
// 注册一个全局自定义指令 `v-lazy`用于图片懒加载
// 在后台创建一个图片元素用于加载图片，当图片完全加载后，再去显示图片
Vue.directive("lazy", (el, binding) => {
  const backImg = document.createElement("img");
  if (el.getAttribute("lazy") === "loaded") {
    return;
  }
  el.setAttribute("lazy", "loading");
  el.src = loading;
  backImg.onload = () => {
    el.setAttribute("lazy", "loaded");
    el.src = binding.value;
  };
  backImg.src = binding.value;
});
// Vue.use(tag);
//添加全局前置导航守卫
router.beforeEach((to, from, next) => {
  console.log("to", to); //path:/login
  console.log("from", from); //path:/
  //判断token是否存在
  const token = Cookie.get("token");
  //token不存在并且不是在登陆页面,注意此时to是当前页面(login)(本身login页面)
  if (!token && to.name !== "LoginPage") {
    next({ name: "LoginPage" });
  }
  //token存在，用户存在，跳转首页(不能反复登录)
  else if (token && to.name === "LoginPage") {
    next({ name: "home" });
  } else {
    next();
  }
});
new Vue({
  pinia,
  router,
  render: (h) => h(App),
}).$mount("#app");
