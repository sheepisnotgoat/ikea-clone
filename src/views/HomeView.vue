<template>
  <div class="home-view">
    <HeaderComponent />
    <div class="product-listing">
      <router-link
        v-for="(item, index) in this.products"
        :key="index"
        :to="`product/${item.productId}`"
      >
        <ItemCard :product="item" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HeaderComponent from "../components/HeaderComponent.vue";
import ItemCard from "../components/ItemCard.vue";

export default {
  name: "HomeView",
  components: {
    HeaderComponent,
    ItemCard,
  },

  computed: {
    ...mapState(["products"]),
  },
  methods: {
    // onProductClick(pid) {
    //   this.$router.push({ name: "product", params: { pid } });
    // },
  },
};
</script>

<style scoped>
.product-listing {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
a {
  text-decoration: none;
}
</style>
