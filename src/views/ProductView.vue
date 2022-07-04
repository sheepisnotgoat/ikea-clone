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
          <div class="main-font product-description">
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
      <div class="details-right-col">
        <div class="product-info">
          <span class="product-name hind-font">{{ product.productName }}</span>
          <span
            >Rs.
            <span class="product-price">{{ product.productPrice }}</span></span
          >
          <br />
          <span class="ssp-font"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span
          >
          <br />
          <br />
          <span class="product-rating"
            >{{ product.Rating }}
            <span class="material-symbols-outlined star-icon"> star</span></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import { mapGetters } from "vuex";
export default {
  name: "ProductView",
  components: {
    HeaderComponent,
  },
  data() {
    return {
      // product: { type: Object },
      prodId: this.$route.params.pid,
    };
  },
  methods: {
    // getProduct() {
    //   console.log(this.prodId);
    //   this.product = this.$store.getters.getProductById(this.prodId);
    // },
  },
  computed: {
    ...mapGetters(["getProductById"]),
    product() {
      return this.$store.getters.getProductById(this.prodId);
    },
  },
  // mounted() {
  //   console.log("pview mounted");
  //   this.getProduct();
  //   console.log(this.product);
  // },
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
  padding-top: 5rem;
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
.ssp-font {
  font-family: "Source Sans Pro", "sans-serif";
}
.hind-font {
  font-family: "Hind", "sans-serif";
}

.product-description {
  margin: 2rem;
}
.product-name {
  font-size: 1.5rem;
  margin: 1rem 6rem 1rem 0;
}
.product-price {
  font-size: 1.5rem;
}

.star-icon {
  /* margin-top: 1rem; */

  font-size: 0.9rem;
}
.product-info {
  padding: 1rem;
  margin-top: 3.2rem;
}
.product-rating {
  font-size: 1.3rem;
}
</style>
