<template>
  <div class="product-view">
    <p>{{ `${this.product.productId}` }}</p>
    <p>{{ `${this.product.productName}` }}</p>
    <p>{{ `${this.product.productPrice}` }}</p>
    <p>{{ `${this.product.Rating}` }}</p>
  </div>
</template>

<script>
export default {
  name: "ProductView",
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

<style></style>
