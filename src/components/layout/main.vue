<template>
    <div class='app-main'>
        <layoutHeader></layoutHeader>
        <div id="app-wrapper">
            <router-view>
                <layoutMain></layoutMain>
            </router-view>
        </div>
    </div>
</template>

<script>
import { layoutMain, layoutHeader } from "./components";
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
  components: {
    layoutMain,
    layoutHeader
  }
};
</script>

<style >
</style >
