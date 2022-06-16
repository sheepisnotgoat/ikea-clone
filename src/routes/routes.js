import HomeView from "../views/HomeView.vue";
import ProductView from "../views/ProductView.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: HomeView,
  },
  {
    name: "product",
    path: "/product/:pid",
    component: ProductView,
  },
];

export default routes;
