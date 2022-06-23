<template>
  <div class="item-card">
    <div class="item-image-container">
      <img :src="product.displayImg" alt="" />
    </div>
    <div class="item-details-container">
      <p class="product-name">{{ product.productName }}</p>
      <p>
        <span class="currency-unit">Rs. </span>
        <span class="price-value">{{ product.productPrice }}</span>
      </p>
      <p>
        <span class="rating-value">{{ product.Rating }}</span>
        <span class="material-symbols-outlined star-icon"> star</span>
      </p>
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
  /* border: 1px solid black; */

  margin: 2rem;
  color: black;
  text-decoration: none;
}
.product-name {
  font-family: "Source Sans Pro";
  text-transform: uppercase;
  font-weight: 600;
}
.item-card:hover .product-name {
  text-decoration: underline;
  font-family: "Source Sans Pro";
  font-weight: 600;
}
.item-image-container {
  /* border: 1px solid black; */
  width: 14rem;
}
.item-details-container {
  /* border: 1px solid black; */
  padding: 10px;
}
.currency-unit {
  font-size: 0.8rem;
  font-weight: bold;
}
.price-value {
  margin-top: 0.5rem;
  font-size: 1.3rem;
}
.rating-value {
  font-size: 1rem;
}
.star-icon {
  /* margin-top: 1rem; */

  font-size: 0.9rem;
}
</style>
