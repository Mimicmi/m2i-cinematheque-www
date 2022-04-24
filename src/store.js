import { createStore } from "vuex";
import axios from "axios";
import router from "./router";

export default createStore({
  namespace: true,
  state: {
    onAime: [],
    films: [],
    detailsFilm: [],
    acteurs: [],
    detailsActeur: [],
    loggedIn: null,
  },
  actions: {
    loadOnAime({ commit }) {
      axios
        .get(this.$apiURL + "films/on-aime")
        .then((res) => {
          commit("setOnAime", res.data);
          console.log(this.state.onAime);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },
    loadFilms({ commit }) {
      axios
        .get(this.$apiURL + "films")
        .then((res) => {
          commit("setFilms", res.data);
          console.log(this.state.films);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },
    loadDetailsFilm({ commit }) {
      axios
        .get(
          this.$apiURL +
            "films/details/" +
            router.currentRoute._value.params.details
        )
        .then((res) => {
          commit("setDetailsFilm", res.data);
          console.log(this.state.detailsFilm);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },
    loadActeurs({ commit }) {
      axios
        .get(this.$apiURL + "acteurs")
        .then((res) => {
          commit("setActeurs", res.data);
          console.log(this.state.acteurs);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },
    loadDetailsActeur({ commit }) {
      axios
        .get(
          this.$apiURL +
            "acteurs/details/" +
            router.currentRoute._value.params.details
        )
        .then((res) => {
          commit("setDetailsActeur", res.data);
          console.log(this.state.detailsActeur);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },
    login({ commit }) {
      if (localStorage.getItem("jwt") !== null) commit("loginSuccess");
      else commit("loginFailure");
    },
  },
  mutations: {
    setOnAime(state, onAime) {
      state.onAime = onAime;
    },
    setFilms(state, films) {
      state.films = films;
    },
    setDetailsFilm(state, detailsFilm) {
      state.detailsFilm = detailsFilm;
    },
    setActeurs(state, acteurs) {
      state.acteurs = acteurs;
    },
    setDetailsActeur(state, detailsActeur) {
      state.detailsActeur = detailsActeur;
    },
    loginSuccess(state) {
      state.loggedIn = true;
    },
    loginFailure(state) {
      state.loggedIn = false;
    },
  },
});
