<template>
  <div class="item-card">
    <div class="item-image-container"></div>
    <div class="item-details-container">
      <p>{{ this.product.productName }}</p>
      <p>{{ this.product.productPrice }}</p>
      <p>{{ this.product.Rating }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemCard",
  props: {
    product: {
      required: true,
      type: Object,
    },
  },
  computed: {},
  data() {
    return {};
  },
};
</script>

<style>
p {
  margin: 0;
}
.item-card {
  border: 1px solid black;
  width: 250px;
  height: 300px;
  margin: 20px;
  color: black;
  text-decoration: none;
}
.item-image-container {
  border: 1px solid black;
  width: 250px;
  height: 200px;
}
.item-details-container {
  border: 1px solid black;
  width: 230px;
  height: 78px;
  padding: 10px;
}
</style>
