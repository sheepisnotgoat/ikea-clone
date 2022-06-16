import Vue from "vue";
import VueRouter from "vue-router";
import App from "./views/App.vue";
import routes from "./routes/routes.js";
import store from "./store/store";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: "history",
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
