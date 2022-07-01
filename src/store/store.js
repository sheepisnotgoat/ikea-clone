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
    getFilteredProucts: (state) => {
      const filteredArray = state.filters.reduce((acc, curr) => {
        acc.push(
          ...state.products.filter((prod) => {
            const lower = curr.lower ? prod[curr.unit] > curr.lower : true;
            const upper = curr.upper ? prod[curr.unit] < curr.upper : true;
            return lower && upper;
          })
        );
        return acc;
      }, []);
      console.log(filteredArray);

      // let filteredArray = [];
      // let priceFiltered = state.products;
      // let priceFilteredrange1 = [];
      // let priceFilteredrange2 = [];
      // for (let priceFilter of state.filter.priceRange) {
      //   if (priceFilter === "range1") {
      //     priceFilteredrange1 = priceFiltered.filter(
      //       (item) => item.productPrice >= 100 && item.productPrice <= 999
      //     );
      //   }
      //   if (priceFilter === "range2") {
      //     priceFilteredrange2 = priceFiltered.filter(
      //       (item) => item.productPrice >= 999 && item.productPrice <= 2000
      //     );
      //   }
      // }
      // if (state.filter.priceRange.length == 0) {
      //   priceFiltered = state.products;
      // } else {
      //   priceFiltered = priceFilteredrange1.concat(priceFilteredrange2);
      // }
      // // console.log(state.filter.priceRange, state.filter.rating);
      // if (
      //   state.filter.priceRange.length == 0 &&
      //   state.filter.rating === "default"
      // ) {
      //   priceFiltered = state.products;
      // }
      // filteredArray = priceFiltered;
      // if (state.filter.rating == true) {
      //   // console.log("Rating filter");
      //   filteredArray = priceFiltered.filter((item) => item.Rating > 4);
      // }
      // // console.log(state.filter);
      // // console.log(filteredArray);
      // // console.log(state.sortBy);
      // let result = [];
      // switch (state.sortBy) {
      //   case "pl2h":
      //     result = filteredArray.sort(
      //       (item1, item2) =>
      //         Number(item1.productPrice) - Number(item2.productPrice)
      //     );
      //     // console.log("inside pl2h");
      //     // console.log(result);
      //     return result;
      //   case "ph2l":
      //     result = filteredArray.sort(
      //       (item1, item2) =>
      //         Number(item2.productPrice) - Number(item1.productPrice)
      //     );
      //     // console.log("inside ph2l");
      //     // console.log(result);
      //     return result;
      //   case "cr":
      //     result = filteredArray.sort(
      //       (item1, item2) => Number(item2.Rating) - Number(item1.Rating)
      //     );
      //     // console.log("inside cr");
      //     // console.log(result);
      //     return result;
      //   default:
      //     // console.log(filteredArray);
      //     return filteredArray;
      // }
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
