<template>
  <div class='app-header'>
    <el-menu :default-active="activeIndex"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect">
      <el-menu-item index="1"
                    @click="$router.push('/admin')">admin才能看</el-menu-item>
      <el-menu-item index="2"
                    @click="$router.push('/editor')">editor才能看</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    getInfo() {},
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {},
  mounted() {
    this.getInfo();
  },
  components: {}
};
</script>

<style>
</style >
