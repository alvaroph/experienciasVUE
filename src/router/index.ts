import { createRouter, createWebHistory } from "vue-router";
import BuscadorView from "../views/BuscadorView.vue";
import PeliculasView  from "../views/PeliculasView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "buscador",
      component: BuscadorView,
    },
    {
      path: "/mispelis",
      name: "mispelis",
      component: PeliculasView
    },
  ],
});

export default router;
