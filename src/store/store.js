/* eslint-disable */

import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    products: [],
    priceFilterChecks: {
      check1: false,
      check2: false,
    },
    filteredProducts: [],
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
      state.products = payload.productData;
      console.log(state.products);
    },
    SET_CHECK(state, payload) {
      console.log("set check", payload.storeFilters);
      if (payload.storeFilters.length > 0) {
        for (let check of payload.storeFilters) {
          console.log(check);
          switch (check) {
            case "pf1": {
              state.priceFilterChecks.check1 = true;
              break;
            }

            case "pf2": {
              state.priceFilterChecks.check2 = true;
              break;
            }

            default: {
              state.priceFilterChecks.check1 = false;
              state.priceFilterChecks.check2 = false;
            }
          }
        }
      } else {
        console.log("defaulting");
        state.priceFilterChecks.check1 = false;
        state.priceFilterChecks.check2 = false;
      }
    },
    SET_FILTERED_PRODUCT(state, payload) {
      if (payload.filter.length > 0) {
        state.filteredProducts = payload.filter.reduce((acc, cnf) => {
          acc = state.products.filter((item) => {
            if (item.productPrice > cnf.low && item.productPrice < cnf.high) {
              return 1;
            }
          });
        });
      } else {
        state.filteredProducts = state.products;
      }
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
    recordCheck({ commit }, recordFilters) {
      commit("SET_CHECK", { storeFilters: recordFilters });
    },
    filterProducts({ commit }, filterConfigs) {
      commit("SET_FILTERED_PRODUCT", { filter: filterConfigs });
    },
  },
});

export default store;
