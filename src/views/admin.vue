<template>
  <div class=''>
    <layoutPage :route='route'></layoutPage>
    admin才能看！
  </div>
</template>

<script>
import { layoutPage } from "@/components/layout";
export default {
  data() {
    return {
      route: [
        {
          title: "导航1",
          path: "/admin1"
        },
        {
          title: "导航2",
          path: "/admin2"
        },
      ]
    };
  },
  methods: {
    getInfo() {}
  },
  computed: {},
  mounted() {
    this.getInfo();
  },
  components: { layoutPage }
};
</script>

<style >
</style >
