<template>
  <div class="home-view">
    <HeaderComponent />
    <div class="custom-actions">
      <ProductSort v-on:selectSort="sortProducts" />
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
import ProductSort from "../components/ProductSort.vue";

export default {
  name: "HomeView",
  components: {
    HeaderComponent,
    ItemCard,
    ProductSort,
  },

  computed: {
    ...mapState(["products"]),
  },
  methods: {
    // onProductClick(pid) {
    //   this.$router.push({ name: "product", params: { pid } });
    // },
    sortProducts(sortType) {
      console.log(sortType);
      if (sortType === "Price: Low to High") {
        this.products.sort((item1, item2) =>
          item1.productPrice > item2.productPrice
            ? -1
            : item1.productPrice < item2.productPrice
            ? 1
            : 0
        );
      }
      if (sortType === "Price: Hight to Low") {
        this.products.sort((item1, item2) =>
          item1.productPrice > item2.productPrice
            ? 1
            : item1.productPrice < item2.productPrice
            ? -1
            : 0
        );
      }
      if (sortType === "Customer rating") {
        this.products.sort((item1, item2) =>
          item1.Rating > item2.Rating ? -1 : item1.Rating < item2.Rating ? 1 : 0
        );
      }
    },
  },
};
</script>

<style scoped>
a {
  margin: 2rem;
}
.custom-actions {
  width: 100%;
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
