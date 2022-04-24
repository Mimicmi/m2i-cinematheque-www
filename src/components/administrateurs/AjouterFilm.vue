<template>
  <form class="space-y-8 divide-y divide-gray-200">
    <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
      <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Formulaire d'ajout d'un film
          </h3>
        </div>
        <div class="space-y-6 sm:space-y-5">
          <div
            class="
              sm:grid
              sm:grid-cols-3
              sm:gap-4
              sm:items-start
              sm:border-t
              sm:border-gray-200
              sm:pt-5
            "
          >
            <label
              for="first-name"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Titre
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input
                v-model="titre"
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                class="
                  max-w-lg
                  block
                  w-full
                  shadow-sm
                  focus:ring-indigo-500 focus:border-indigo-500
                  sm:max-w-xs sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
          </div>

          <div
            class="
              sm:grid
              sm:grid-cols-3
              sm:gap-4
              sm:items-start
              sm:border-t
              sm:border-gray-200
              sm:pt-5
            "
          >
            <label
              for="last-name"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Synopsis
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input
                v-model="synopsis"
                type="text"
                name="last-name"
                id="last-name"
                autocomplete="family-name"
                class="
                  max-w-lg
                  block
                  w-full
                  shadow-sm
                  focus:ring-indigo-500 focus:border-indigo-500
                  sm:max-w-xs sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
          </div>

          <div
            class="
              sm:grid
              sm:grid-cols-3
              sm:gap-4
              sm:items-start
              sm:border-t
              sm:border-gray-200
              sm:pt-5
            "
          >
            <label
              for="email"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Date de sortie
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input
                v-model="date_de_sortie"
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                class="
                  block
                  max-w-lg
                  w-full
                  shadow-sm
                  focus:ring-indigo-500 focus:border-indigo-500
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
          </div>

          <div
            class="
              sm:grid
              sm:grid-cols-3
              sm:gap-4
              sm:items-start
              sm:border-t
              sm:border-gray-200
              sm:pt-5
            "
          >
            <label
              for="country"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Durée
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input
                v-model="duree"
                id="country"
                name="country"
                autocomplete="country-name"
                class="
                  max-w-lg
                  block
                  focus:ring-indigo-500 focus:border-indigo-500
                  w-full
                  shadow-sm
                  sm:max-w-xs sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
          </div>

          <div
            class="
              sm:grid
              sm:grid-cols-3
              sm:gap-4
              sm:items-start
              sm:border-t
              sm:border-gray-200
              sm:pt-5
            "
          >
            <label
              for="street-address"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Affiche
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input
                v-model="affiche"
                type="text"
                name="street-address"
                id="street-address"
                autocomplete="street-address"
                class="
                  block
                  max-w-lg
                  w-full
                  shadow-sm
                  focus:ring-indigo-500 focus:border-indigo-500
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
          </div>

          <div
            class="
              sm:grid
              sm:grid-cols-3
              sm:gap-4
              sm:items-start
              sm:border-t
              sm:border-gray-200
              sm:pt-5
            "
          >
            <label
              for="city"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Vidéo
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input
                v-model="video_film"
                type="text"
                name="city"
                id="city"
                autocomplete="address-level2"
                class="
                  max-w-lg
                  block
                  w-full
                  shadow-sm
                  focus:ring-indigo-500 focus:border-indigo-500
                  sm:max-w-xs sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
          </div>

          <div
            class="
              sm:grid
              sm:grid-cols-3
              sm:gap-4
              sm:items-start
              sm:border-t
              sm:border-gray-200
              sm:pt-5
            "
          >
            <label
              for="region"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              A la une
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input
                v-model="a_la_une"
                type="text"
                name="region"
                id="region"
                autocomplete="address-level1"
                class="
                  max-w-lg
                  block
                  w-full
                  shadow-sm
                  focus:ring-indigo-500 focus:border-indigo-500
                  sm:max-w-xs sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-5">
      <div class="flex justify-end">
        <router-link
          to="/administrateurs/films"
          class="
            bg-white
            py-2
            px-4
            border border-gray-300
            rounded-md
            shadow-sm
            text-sm
            font-medium
            text-gray-700
            hover:bg-gray-50
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-indigo-500
          "
        >
          Cancel
        </router-link>
        <button
          @click.prevent="submitForm()"
          class="
            ml-3
            inline-flex
            justify-center
            py-2
            px-4
            border border-transparent
            shadow-sm
            text-sm
            font-medium
            rounded-md
            text-white
            bg-gray-600
            hover:bg-gray-700
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-gray-500
          "
        >
          Save
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      titre: "",
      synopsis: "",
      date_de_sortie: "",
      duree: "",
      affiche: "",
      video_film: "",
      a_la_une: null,
    };
  },
  methods: {
    submitForm() {
      this.$axios
        .post(this.$apiURL + "films", {
          titre: this.titre,
          synopsis: this.synopsis,
          date_de_sortie: this.date_de_sortie,
          duree: this.duree,
          affiche: this.affiche,
          video_film: this.video_film,
          a_la_une: this.a_la_une,
        })
        .then((res) => {
          console.log(res.data);
          this.$router.push("/administrateurs/films")
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },
  },
};
</script>