<template>
    <div>

        <el-container>
            <el-aside width="200px">
                <h5>当前角色：{{role}}</h5>
                {{demo}}
                <el-button @click="$router.push('/login')"
                           type="primary">退出登录</el-button>
                <el-menu background-color="#545c64"
                         text-color="#fff"
                         active-text-color="#ffd04b">
                    <el-menu-item @click="$router.push('/admin')"
                                  index='1'>admin权限页</el-menu-item>
                    <el-menu-item @click="$router.push('/editor')"
                                  index='2'>editor权限页</el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>

    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      role: ""
    };
  },
  methods: {
    getInfo() {
      let t = this.$cookie.get("Token");

      this.$http
        .post("http://localhost:3000/user/getInfo", { token: t })
        .then(res => {
          this.role = res.data.role;
        });
    }
  },
  computed: {
    ...mapState({
      demo: state => state.a
    })
  },
  created() {
    this.getInfo();
    //   alert(11)
  }
};
</script>
