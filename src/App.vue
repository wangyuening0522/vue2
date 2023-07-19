<template>
  <div id="app">
    <!-- <hello-world /> -->
    <!-- <LoginPage/> -->
    <MainContent />
    <!-- <CommonAside/> -->
  </div>
</template>

<script>
import MainContent from "./views/MainContent";
// import CommonAside from './components/CommonAside.vue';
import LoginPage from "./views/LoginPage";
export default {
  name: "App",
  components: {
    // CommonAside
    MainContent,
    LoginPage,
  },
};
</script>

<style lang="less">
body,
img,
p,
ul,
a {
  margin: 0;
  padding: 0;
}
a {
  color: #000;
  text-decoration: none;
}
ul {
  list-style: none;
}

</style>
