<template>
    <div class=''>
        <el-container>
            <el-aside width="200px">
                <el-menu>
                    <el-menu-item v-for="(item,index) in route "
                                  :key="index"
                                  @click="jump(item)"
                                  :index="index.toString()">
                        <i class="el-icon-menu"></i>
                        <span slot="title">{{item.title}}</span>
                    </el-menu-item>

                </el-menu>
            </el-aside>

            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
  props: {
    route: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    getInfo() {
      alert(1);
    },
    jump(path) {
      console.log(path);

      this.$router.push(path);
    }
  },
  computed: {},
  mounted() {},
  components: {}
};
</script>

<style>
</style >
