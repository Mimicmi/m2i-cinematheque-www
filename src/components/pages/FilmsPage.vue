<template>
  <div>
    <br />
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-xl font-semibold text-gray-900">Sommaire des films</h1>
        </div>
      </div>
      <div class="mt-8 flex flex-col">
        <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"
          >
            <div
              class="
                overflow-hidden
                shadow
                ring-1 ring-black ring-opacity-5
                md:rounded-lg
              "
            >
              <table class="min-w-full divide-y divide-gray-300">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="
                        py-3.5
                        pl-4
                        pr-3
                        text-left text-sm
                        font-semibold
                        text-gray-900
                        sm:pl-6
                      "
                    >
                      Titre
                    </th>
                    <th
                      scope="col"
                      class="
                        px-3
                        py-3.5
                        text-left text-sm
                        font-semibold
                        text-gray-900
                      "
                    >
                      Synopsis
                    </th>
                    <th
                      scope="col"
                      class="
                        px-3
                        py-3.5
                        text-left text-sm
                        font-semibold
                        text-gray-900
                      "
                    >
                      Date de sortie
                    </th>
                    <th
                      scope="col"
                      class="
                        px-3
                        py-3.5
                        text-left text-sm
                        font-semibold
                        text-gray-900
                      "
                    >
                      Durée
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  <tr v-for="f in films" :key="f.id_film">
                    <td
                      class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6"
                    >
                      <router-link class="flex items-center"
                          :to="{
                            name: 'films/details',
                            params: { details: f.id_film },
                          }"
                        >
                          <div class="h-10 w-10 flex-shrink-0">
                            <img
                              class="h-10 w-10 rounded-full"
                              :src="f.affiche"
                              alt=""
                            />
                          </div>
                          <div class="ml-4">
                            <div class="font-medium text-gray-900">
                              {{ f.titre }}
                            </div>
                          </div>
                      </router-link>
                    </td>
                    <td class="px-3 py-4 text-sm text-gray-500">
                      <div class="text-gray-900">{{ f.synopsis }}</div>
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      <span
                        class="
                          inline-flex
                          rounded-full
                          bg-green-100
                          px-2
                          text-xs
                          font-semibold
                          leading-5
                          text-green-800
                        "
                        >{{ f.date_de_sortie }}</span
                      >
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      {{ f.duree }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("loadFilms");
  },
  computed: {
    films() {
      return this.$store.state.films ?? "";
    },
  },
};
</script>