<template>
  <div class="home-view">
    <HeaderComponent />
    <div class="product-listing">
      <ItemCard v-for="(item, index) in items" :key="index" :product="item" />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import ItemCard from "../components/ItemCard.vue";

export default {
  name: "HomeView",
  components: {
    HeaderComponent,
    ItemCard,
  },
  data() {
    return {
      items: this.$store.state.products,
    };
  },
};
</script>

<style>
.product-listing {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
