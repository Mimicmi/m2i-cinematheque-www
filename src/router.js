import { createRouter, createWebHistory } from "vue-router";
import AccueilPage from "./components/pages/AccueilPage.vue";
import FilmsPage from "./components/pages/FilmsPage.vue";
import ActeursPage from "./components/pages/ActeursPage.vue";
import DetailsFilm from "./components/pages/DetailsFilm.vue";
import DetailsActeur from "./components/pages/DetailsActeur.vue";
import LoginPage from "./components/users/LoginPage.vue";
import GestionFilm from "./components/administrateurs/GestionFilm.vue";
import AjouterFilm from "./components/administrateurs/AjouterFilm.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/",
    name: "accueil",
    component: AccueilPage,
  },
  {
    path: "/films",
    name: "films",
    component: FilmsPage,
  },
  {
    path: "/films/:details",
    name: "films/details",
    component: DetailsFilm,
  },
  {
    path: "/acteurs",
    name: "acteurs",
    component: ActeursPage,
  },
  {
    path: "/acteurs/:details",
    name: "acteurs/details",
    component: DetailsActeur,
  },
  {
    path: "/administrateurs/films",
    name: "administrateurs/films",
    component: GestionFilm,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("jwt") !== "Authorized") {
        next("login");
      } else {
        next();
      }
    },
  },
  {
    path: "/administrateurs/films/ajouter",
    name: "administrateurs/films/ajouter",
    component: AjouterFilm,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("jwt") !== "Authorized") {
        next("login");
      } else {
        next();
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
