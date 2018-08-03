<template>
    <div style="width:400px;margin:0 auto;">
        <el-form :label-position="labelPosition"
                 label-width="80px"
                 :model="form">
            <el-form-item label="账号">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-button type="primary"
                       @click="login">登录</el-button>
            <div>账号密码默认1</div>
        </el-form>
    </div>
</template>
<script>
export default {
  data() {
    return {
      labelPosition: "right",
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      let { username, password } = this.form;
      this.$http
        .post("http://localhost:3000/user/login", { username, password })
        .then(res => {
          res.data.status == 1 ? this.success(res) : this.fail(res);
        });
    },
    success(res) {
      this.$message({
        message: "登录成功！",
        type: "success"
      });
      this.$cookie.set("Token", res.data.token); //登录成功后将token存储在cookie之中
      this.$router.push('home')
    },
    fail() {
      this.$message({
        message: "账号或密码错误！",
        type: "warning"
      });
    }
  },
  created() {

    //   alert(11)
  }
};
</script>
