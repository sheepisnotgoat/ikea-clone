<template>
  <div class="item-card">
    <div class="item-image-container"></div>
    <div class="item-details-container">
      <span>{{ this.product.productName }}</span>
      <span>{{ this.product.productPrice }}</span>
      <span>{{ this.product.Rating }}</span>
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
.item-card {
  border: 1px solid black;
  width: 250px;
  height: 300px;
  margin: 20px;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
}
</style>
