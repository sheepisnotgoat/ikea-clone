/* eslint-disable */

import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    products: [],
    sortBy: "Sort",
    filters: [],
  },
  getters: {
    getProductById: (state) => (pid) => {
      return state.products.find((item) => item.productId === pid);
    },
  },
  mutations: {
    SET_PRODUCTS(state, payload) {
      state.products = payload.productData;
    },
  },
  actions: {
    async fetchProducts() {
      let jsonData = await axios("http://localhost:3000/product-data");

      store.commit({
        type: "SET_PRODUCTS",
        productData: jsonData.data,
      });
    },
  },
});

export default store;
