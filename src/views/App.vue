<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.$store.dispatch("FETCH_PRODUCT_DATA");
  },
};
</script>

<style></style>
