<template>
  <div class="product-view">
    <HeaderComponent />
    <div class="product-container">
      <div class="product-image-container"></div>
      <div class="product-details">
        <p>{{ this.product.productName }}</p>
        <p>{{ this.product.productPrice }}</p>
        <p>{{ this.product.Rating }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
export default {
  name: "ProductView",
  components: {
    HeaderComponent,
  },
  data() {
    return {
      product: { type: Object },
      prodId: this.$route.params.pid,
    };
  },
  methods: {
    getProduct() {
      this.product = this.$store.getters.getProductById(this.prodId);
    },
  },
  mounted() {
    this.getProduct();
    console.log(this.product);
  },
};
</script>

<style>
.product-container {
  margin-top: 10px;
  border: 1px solid black;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
}

.product-image-container {
  border: 1px solid black;
  width: 500px;
  height: 250px;
  margin-bottom: 10px;
}
.product-details {
  border: 1px solid black;
  width: 98%;
  height: 200px;
}
</style>
