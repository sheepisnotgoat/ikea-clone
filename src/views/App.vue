<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    console.log("app mounted");
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style></style>
