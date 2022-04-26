<template>
  <div class="min-h-full">
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img
                class="h-16 w-16"
                src="../../assets/logo.png"
                alt="Workflow"
              />
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <div
                  class="text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                  aria-current="page"
                >
                  - LA CINEMATHEQUE -
                </div>
                <router-link
                  to="/"
                  class="
                    text-gray-300
                    hover:bg-gray-700 hover:text-white
                    px-3
                    py-2
                    rounded-md
                    text-sm
                    font-medium
                  "
                  >Accueil</router-link
                >

                <router-link
                  to="/films"
                  class="
                    text-gray-300
                    hover:bg-gray-700 hover:text-white
                    px-3
                    py-2
                    rounded-md
                    text-sm
                    font-medium
                  "
                  >Films</router-link
                >

                <router-link
                  to="/acteurs"
                  class="
                    text-gray-300
                    hover:bg-gray-700 hover:text-white
                    px-3
                    py-2
                    rounded-md
                    text-sm
                    font-medium
                  "
                  >Acteurs</router-link
                >
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <search-bar></search-bar>
              <div class="ml-3 relative">
                <div>
                  <button
                    type="button"
                    @click.prevent="switchState"
                    class="
                      max-w-xs
                      bg-gray-800
                      rounded-full
                      flex
                      items-center
                      text-sm
                      focus:outline-none
                      focus:ring-2
                      focus:ring-offset-2
                      focus:ring-offset-gray-800
                      focus:ring-white
                    "
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span class="sr-only">Open user menu</span>
                    <img                
                      v-if="checkToken === false"
                      class="h-8 w-8 rounded-full"
                      src="../../assets/logo.png"
                      alt=""
                    />
                    <div
                      v-else
                      class="
                        text-gray-300
                        hover:text-white
                        block
                        px-3
                        py-2
                        rounded-md
                        text-base
                        font-medium
                      "
                    >
                      Odile Rhino
                    </div>
                  </button>
                </div>
                <div
                  id="connection"
                  v-show="activeMenu"
                  class="
                    origin-top-right
                    absolute
                    right-0
                    mt-2
                    w-48
                    rounded-md
                    shadow-lg
                    py-1
                    bg-white
                    ring-1 ring-black ring-opacity-5
                    focus:outline-none
                  "
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabindex="-1"
                >
                  <router-link
                    v-if="checkToken === false"
                    to="/login"
                    class="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-1"
                    >Se connecter</router-link
                  >
                  <router-link
                    v-if="checkToken === true"
                    to="/administrateurs/films"
                    class="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-2"
                    >Gestion des films</router-link
                  >
                  <a
                    v-if="checkToken === true"
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-2"
                    >Se déconnecter</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <button
              type="button"
              class="
                bg-gray-800
                inline-flex
                items-center
                justify-center
                p-2
                rounded-md
                text-gray-400
                hover:text-white hover:bg-gray-700
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-offset-gray-800
                focus:ring-white
              "
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                class="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="md:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <router-link
            to="/"
            class="
              text-gray-300
              hover:bg-gray-700 hover:text-white
              block
              px-3
              py-2
              rounded-md
              text-base
              font-medium
            "
            aria-current="page"
            >Accueil</router-link
          >

          <router-link
            to="/films"
            class="
              text-gray-300
              hover:bg-gray-700 hover:text-white
              block
              px-3
              py-2
              rounded-md
              text-base
              font-medium
            "
            >Films</router-link
          >

          <router-link
            to="/acteurs"
            class="
              text-gray-300
              hover:bg-gray-700 hover:text-white
              block
              px-3
              py-2
              rounded-md
              text-base
              font-medium
            "
            >Acteurs</router-link
          >
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700">
          <div class="mt-3 px-2 space-y-1">
            <router-link
              to="login"
              class="
                block
                px-3
                py-2
                rounded-md
                text-base
                font-medium
                text-gray-400
                hover:text-white hover:bg-gray-700
              "
              >Se connecter</router-link
            >
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";

export default {
  components: {
    SearchBar,
  },
  data() {
    return {
      activeMenu: false,
      token: null,
    };
  },
  methods: {
    switchState() {
      this.activeMenu = !this.activeMenu;
    },
    accepted() {
      this.token = true;
    },
    rejected() {
      this.token = false;
    },
  },
  watch: {
    tokenState() {
      if (localStorage.getItem("jwt")) {
        this.accepted();
      } else {
        this.rejected();
      }
    },
  },
  computed: {
    checkToken() {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
#connection {
  z-index: 999;
}
</style>