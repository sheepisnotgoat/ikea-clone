<template>
  <div class="product-view-page">
    <HeaderComponent />
    <div class="product-details-wrapper">
      <div class="details-left-col">
        <div class="product-images">
          <div class="img-wrapper">
            <img
              src="https://www.ikea.com/in/en/images/products/tromma-wall-clock-white__0836082_pe778497_s5.jpg"
              alt="demo-image"
            />
          </div>
          <div class="img-wrapper">
            <img
              src="https://www.ikea.com/in/en/images/products/tromma-wall-clock-white__0836082_pe778497_s5.jpg"
              alt="demo-image"
            />
          </div>
          <div class="img-wrapper">
            <img
              src="https://www.ikea.com/in/en/images/products/tromma-wall-clock-white__0836082_pe778497_s5.jpg"
              alt="demo-image"
            />
          </div>
          <div class="img-wrapper">
            <img
              src="https://www.ikea.com/in/en/images/products/tromma-wall-clock-white__0836082_pe778497_s5.jpg"
              alt="demo-image"
            />
          </div>
          <div class="product-description-vis product-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              tellus mauris, eleifend id nisi vitae, congue fermentum sem. Donec
              enim nibh, gravida et semper id, fringilla sit amet augue. Duis
              laoreet vulputate urna, ac auctor erat consectetur sed. Nunc
              pulvinar sit amet odio non pretium. Sed feugiat tempus enim, sit
              amet vulputate velit vulputate vitae. Sed non dignissim nisi.
              Pellentesque malesuada orci sit amet nisi porta tristique.
            </p>
          </div>
        </div>
      </div>
      <div class="details-right-col solid-black-border"></div>
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

<style scoped>
.solid-black-border {
  border: 1px solid black;
}
.product-details-wrapper {
  display: flex;
  width: 98vw;
  margin: auto;
}
.details-left-col {
  width: 60vw;
  box-sizing: border-box;
}
.details-right-col {
  width: 40vw;
  height: 90vh;
  position: sticky;
  top: 2rem;
  box-sizing: border-box;
}
.img-wrapper {
  width: 17rem;
  margin: 1rem;
}
.img-wrapper:hover {
  cursor: pointer;
}
.product-images {
  display: flex;
  flex-flow: wrap;
  padding: 2rem;
  justify-content: center;
}
.product-description-vis {
  font-family: "Source Sans Pro", "sans-serif";
}

.product-description {
  margin: 2rem;
}
</style>
