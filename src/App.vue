<template>
  <nav-bar :key="$route.path"></nav-bar>
  <router-view></router-view>
</template>

<script>
import NavBar from "./components/communs/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>