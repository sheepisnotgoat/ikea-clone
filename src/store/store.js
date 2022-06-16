import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    products: [],
  },
  getters: {
    getProductById: (state) => (pid) => {
      return state.products.find((item) => item.productId === pid);
    },
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload.productData;
    },
  },
  actions: {
    async FETCH_PRODUCT_DATA() {
      let jsonData = await axios("http://localhost:3000/product-data");

      store.commit({
        type: "setProducts",
        productData: jsonData.data,
      });
    },
  },
});

export default store;
