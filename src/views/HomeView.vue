<template>
  <div class="home-view">
    <HeaderComponent />

    <div class="custom-actions">
      <PriceFilterButton />
    </div>
    <div class="product-listing">
      <router-link
        v-for="(item, index) in products"
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
import PriceFilterButton from "../components/PriceFilterButton.vue";

export default {
  name: "HomeView",
  components: {
    HeaderComponent,
    ItemCard,
    PriceFilterButton,
  },

  computed: {
    ...mapState(["products", "filteredProducts"]),
  },
  mounted() {
    console.log("home mounted");
  },
};
</script>

<style scoped>
a {
  margin: 2rem;
}

.custom-actions {
  width: 100%;
  padding: 0 6.5rem;
  margin-top: 1rem;
  display: flex;
  position: relative;
}
.home-view {
  display: flex;
  flex-direction: column;
}
.product-listing {
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  max-width: 90vw;
}
a {
  text-decoration: none;
}
</style>
