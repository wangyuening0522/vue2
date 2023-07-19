<template>
  <div>
    <!-- <h1>这是登录页面</h1>
    <button @click="submit">点我登录</button> -->
    <!-- <el-card v-loading="looogin" class="el_add_card" shadow="hover">
      element-ui卡片
      <img style="width: 128px; height: 128px" :src="urrl" alt="" />
      <button @click="login">获取二维码</button>
      <p style="line-height: 100px; font-size: 16px">
        <img
          style="width: 100px; height: 100px; border-radius: 50%"
          :src="headImg"
          alt=""
        />
        <span>{{ usNName }}</span>
      </p>
    </el-card> -->
    <div class="bbox">
      <div class="top">
        <div class="topp">
          登录
          <i class="el-icon-close"></i>
        </div>
      </div>
      <div class="mid">
        <div class="left">
          <img
            src="
         https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/9643571155/525c/faac/2dc6/fe695c03c7c358ddaa4651736b26a55f.png"
            alt=""
          />
        </div>
        <div class="right">
          <div class="rightt">扫码登陆</div>
          <img :src="qrimgs" alt="" style="width: 200px; height: 200px" />
          <div class="rightb">
            使用&nbsp;<a
              href="https://music.163.com/#/download"
              style="color: skyblue"
              >网易云app</a
            >
            扫码登录
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Cookie from "js-cookie";
// import { getCookie, getUserDetail } from "../api";
import axios from "axios";
import { getKey, getCode, getCheck} from "../api/Login/index";
export default {
  name: "LoginPage",
  data() {
    return {
      key: "", //key
      qrurl: "",
      qrimgs: "", //二维码图片
      qrCheckData: {}, //状态
      isLogin: false, //是否登录
    };
  },
  mounted() {
    this.login();
  },
  methods: {
    /*  submit() {
      getCookie().then((data) => {
        console.log(data);
        Cookie.set("token", data.data.cookie);
        // let token = data.data.cookie;
        localStorage.setItem("cookie", JSON.stringify(data.data.cookie));
        getUserDetail().then((data2) => {
          console.log("登陆后", data2);
        });
      });
    }, */
    login() {
      let date = new Date();
      getKey(date.getTime())
        .then((res) => {
          //获取二维码key
          console.log("res", res);
          console.log(res.data.data.unikey);
          // this.urrl=res.data.data.qrurl
          this.key = res.data.data.unikey;
          let date = new Date();
          getCode(this.key, date.getTime(), {
            qrimg: true,
          })
            .then((res) => {
              //获取二维码图片
              console.log("res2", res);
              console.log(res.data.data);
              this.qrurl = res.data.data.qrurl;
              this.qrimgs = res.data.data.qrimg;
              this.qrCheck();
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    qrCheck() {
      getCheck({
        key: this.key,
        timerstamp: new Date().getTime(), //传入参数时间戳
        withCredentials: true,
      }).then((res) => {
        // console.log(2222);
        console.log("check", res);
        this.qrCheckData = res.data;
        localStorage.setItem("cookie", res.data.cookie);
        this.isLogin = true;
      });
    },
    //获取登录之后的状态
    getStatus() {
      axios
        .get(
          `https://netease-cloud-music-api-beta-lyart.vercel.app/login/status?cookie=${localStorage.getItem(
            "cookie"
          )}`,
          {}
        )
        .then((res) => {
          localStorage.getItem("cookie");
          // console.log(res.data.data.account.id,res.data.data.account.status);
          // console.log(res.data.data.profile.avatarUrl,res.data.data.profile.nickname);
          // localStorage.setItem("cookie", res.data.cookie);
          localStorage.setItem("isLogin", res.data.data.account.status);
          localStorage.setItem("userid", res.data.data.account.id);
          localStorage.setItem("avatarUrl", res.data.data.profile.avatarUrl);
          localStorage.setItem("nickname", res.data.data.profile.nickname);
          console.log(666);
          // console.log( localStorage.getItem('isLogin'));
          // console.log(localStorage.getItem("nickname"));
        });
    },
    //获取用户信息 , 歌单，收藏，mv, dj 数量
    //   getUinfo() {
    //     let getUinfo = axios.get('https://netease-cloud-music-api-beta-lyart.vercel.app/user/detail?uid=32953014', {

    //     }).then(res=>{
    //       console.log('0000000');
    //       console.log(res);
    //     // console.log(res.data.data.code);
    //             })
    // },
    // },
  },
  watch: {
    isLogin: function () {
      let times = setInterval(async () => {
        this.qrCheck();
        let code = this.qrCheckData.code;
        // 判断返回值中的code
        if (code === 801) {  
        } else if (code === 802) {
        } else if (code === 803) {
          console.log('成功了');
          localStorage.setItem("user", true);
          this.$router.push("/");
          //用户登录成功后清除定时器
          clearInterval(times);
          //获取登录之后的uid和用户详情以及登录状态
          this.getStatus();
          // this.getUinfo()
        }
      }, 5000);
    },
  },
};
</script>
