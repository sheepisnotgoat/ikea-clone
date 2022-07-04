/* eslint-disable */

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
      console.log("getProductbyID");
      console.log(state.products);
      return state.products.find((item) => item.productId === pid);
    },
  },
  mutations: {
    SET_PRODUCTS(state, payload) {
      console.log("set product");
      state.products = payload.productData;
      console.log(state.products);
    },
  },
  actions: {
    async fetchProducts() {
      console.log("fetching");
      let jsonData = await axios("http://localhost:3000/product-data");

      store.commit({
        type: "SET_PRODUCTS",
        productData: jsonData.data,
      });
      console.log("action commit");
    },
  },
});

export default store;
