<template>
    <div>
        <el-menu default-active="2">
            <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3"
                          disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>

    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getInfo() {}
  },
  computed: {},
  mounted() {
    this.getInfo();
  },
  components: {}
};
</script>

<style>
</style>
