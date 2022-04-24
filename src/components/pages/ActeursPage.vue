<template>
  <div>
    <br />
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-xl font-semibold text-gray-900">Sommaire des acteurs</h1>
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
                      Prénom
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
                      Nom
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
                      Biographie
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
                      Date & Lieu de naissance
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  <tr v-for="a in acteurs" :key="a.id_acteur">
                    <td
                      class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6"
                    >
                      <router-link
                        class="flex items-center"
                        :to="{
                          name: 'acteurs/details',
                          params: { details: a.id_acteur },
                        }"
                      >
                        <div class="h-10 w-10 flex-shrink-0">
                          <img
                            class="h-10 w-10 rounded-full"
                            :src="a.photo"
                            alt=""
                          />
                        </div>
                        <div class="ml-4">
                          <div class="font-medium text-gray-900">
                            {{ a.prenom }}
                          </div>
                        </div>
                      </router-link>
                    </td>
                    <td class="px-3 py-4 text-sm text-gray-500">
                      <div class="text-gray-900">{{ a.nom }}</div>
                    </td>
                    <td class="px-3 py-4 text-sm text-gray-500">
                      {{ a.biographie }}
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      {{ a.naissance }} {{ a.lieu_naissance }}
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
    this.$store.dispatch("loadActeurs");
  },
  computed: {
    acteurs() {
      return this.$store.state.acteurs ?? "";
    },
  },
};
</script>