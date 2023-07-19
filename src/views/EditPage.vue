<template>
  <div>
    <h1>编辑用户信息</h1>
    <el-form :model="form" title="修改昵称" >
      <el-form :model="form">
        <el-form-item label="新名字" :label-width="formLabelWidth">
          <el-input
            v-model="form.nickname"
            size="medium"
            placeholder="请填写姓名"
            autocomplete="off"
            class="input"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-select v-model="form.gender" placeholder="请选择性别">
            <el-option label="男" value="0"></el-option>
            <el-option label="女" value="1"></el-option>
          </el-select>
        </el-form-item>
       <!--  <el-form-item label="生日" :label-width="formLabelWidth">
          <el-date-picker
            v-model="form.birthday"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item> -->
      </el-form>
      <div class="footer">
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确定</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
<script>
import { Update } from "../api/message/index";
export default {
  name: "EditPage",
  data() {
    return {
      form: {
        nickname: "",
        gender: '',
        birthday:"1525918298004",
        signature: "测试签名",
        city: "440300",
        province: "440000",
      },
      formLabelWidth: "20%",
    };
  },
  methods: {
    onSubmit() {
      Update(this.form).then((data) => {
        console.log(data);
        // this.$modal.msgSuccess("提交成功");
        this.$router.push({ path: "/message" });
      });
    },
  },
};
</script>
<style lang="less" scoped>
.dialog-footer {
  display: flex;
}
/deep/ .el-input--medium .el-input__inner {
  width: 80%;
}
.footer {
  display: flex;
  justify-content: space-around;
}
h1 {
  margin-bottom: 20%;
  margin-left: 5%;
}
</style>
