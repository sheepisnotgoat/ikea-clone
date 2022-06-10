import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    products: [
      {
        productId: "pid101",
        productName: "Product1",
        productPrice: "Price1",
        Rating: "Stars",
      },
      {
        productId: "pid102",
        productName: "Product2",
        productPrice: "Price2",
        Rating: "Stars",
      },
      {
        productId: "pid103",
        productName: "Product3",
        productPrice: "Price3",
        Rating: "Stars",
      },
      {
        productId: "pid104",
        productName: "Product4",
        productPrice: "Price4",
        Rating: "Stars",
      },
      {
        productId: "pid105",
        productName: "Product5",
        productPrice: "Price5",
        Rating: "Stars",
      },
      {
        productId: "pid106",
        productName: "Product6",
        productPrice: "Price6",
        Rating: "Stars",
      },
      {
        productId: "pid107",
        productName: "Product7",
        productPrice: "Price7",
        Rating: "Stars",
      },
    ],
  },
});

export default store;
