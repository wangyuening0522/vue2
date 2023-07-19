<template>
  <div>
    <h2>我的资料</h2>
    <div class="m1">
      <div>
        <span>头像</span><span><img :src="avatarUrl" alt="" /></span>
      </div>
      <div type="text" @click="dialogFormVisible = true">
        <span>昵称</span><span>{{ nickname }}</span>
      </div>
      <div>
        <span>性别</span><span>{{ gender === 1 ? "男" : "女" }}</span>
      </div>
      <div><span>二维码</span></div>
    </div>
    <div class="m2">
      <div>生日 <span></span>{{ birthday }}</div>
      <div>
        地区 <span>{{ city }}</span>
      </div>
      <div>大学 <span>重庆邮电大学</span></div>
      <div>音乐标签</div>
      <div>
        简介 <span>{{ signature }}</span>
      </div>
    </div>
    <div class="m3">
      <div>个人主页隐私设置</div>
      <div>主页模块顺序设置</div>
    </div>
    <div class="m4">
      <div>账号和绑定设置</div>
    </div>
    <button @click="handleClick">点我编辑个人信息</button>
  </div>
</template>
<script>
import { getData } from "../api";
import { Update } from "../api/message/index";
export default {
  data() {
    return {
      nickname: "",
      signature: "",
      birthday: "",
      avatarUrl: "",
      city: "",
      gender: null,
      dialogFormVisible: false,
    };
  },
  mounted() {
    this.getMessage();
  },
  methods: {
    getMessage() {
      getData().then((data) => {
        console.log("data", data);
        let { profile } = data.data;
        this.nickname = profile.nickname;
        this.signature = profile.signature;
        this.avatarUrl = profile.avatarUrl;
        //修改生日为标准形式
        const timestamp = profile.birthday;
        const date = new Date(timestamp);
        const year = date.getFullYear(); // 2004
        const month = date.getMonth() + 1; // 6 (注意月份从0开始计数，需要加1)
        const day = date.getDate(); // 4
        const formattedDate = `${year}-${month}-${day}`;
        console.log(formattedDate); // "2004-6-4"
        this.birthday = formattedDate;
        // this.city = profile.city;
        this.city = "山西省 阳泉市";
        this.gender = profile.gender;
        console.log(this.nickname);
      });
    },
    /*  update() {
      Update().then((data) => {
        console.log("update", data);
      });
    }, */
    handleClick() {
      this.$router.push({ path: "/edit" });
    },
  },
};
</script>
<style lang="less" scoped>
.m1,
.m2,
.m3,
.m4 {
  margin-top: 10px;
  background-color: rgb(220, 220, 220);
  div {
    padding: 5px 10px;
    border-bottom: 1px solid #e4e4e4;
    font-size: 0.18rem;
  }
  img {
    width: 16%;
    border-radius: 50%;
    display: block;
    margin-left: 85%;
  }
}
.m1,
.m2 {
  div {
    display: flex;
    justify-content: space-between;
  }
}
button {
  margin-left: 35%;
  height: 40px;
  margin-top: 10%;
}
</style>
