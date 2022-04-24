<template>
  <div>
    <div class="relative slide">
      <div
        class="
          carousel-indicators
          absolute
          bottom-0
          flex
          bg-yellow-100
          h-24
          w-full
          justify-center
          items-center
        "
      >
        <ol class="z-50 flex w-4/12 justify-center">
          <li
            v-for="(img, i) in images"
            :key="i"
            class="md:w-4 md:h-4 bg-gray-300 rounded-full cursor-pointer mx-2"
          ></li>
        </ol>
      </div>
      <div class="carousel-inner relative overflow-hidden w-full">
        <div
          v-for="(img, i) in images"
          :id="`slide-${i}`"
          :key="i"
          :class="`${active === i ? 'active' : 'left-full'}`"
          class="
            carousel-item
            inset-0
            relative
            w-full
            transform
            transition-all
            duration-500
            ease-in-out
          "
        >
          <img class="block w-full" :src="img" alt="First slide" />
        </div>
      </div>
    </div>
    <br />
    <div class="relative">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t border-gray-300"></div>
      </div>
      <div class="relative flex justify-center">
        <span class="px-3 bg-white text-lg font-medium text-gray-900">
          Cette semaine on aime
        </span>
      </div>
    </div>
    <br />
    <div>
      <div
        id="aime-film"
        v-for="films in onAime"
        :key="films.id_film"
        class="flex shrink-0"
      >
        <img :src="films.affiche" />
        <div class="grid grid-col-2">
          <div class="text-xl font-bold">{{ films.titre }}</div>
          <div class="italic">{{ films.synopsis }}</div>
          <div>lorem ipsum</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        require("../../assets/movies/0188782.jpg"),
        require("../../assets/movies/0593361.jpg"),
        require("../../assets/movies/0765165.jpg"),
        require("../../assets/movies/0876005.jpg"),
        require("../../assets/movies/4003801.jpg"),
        require("../../assets/movies/5024052.jpg"),
        require("../../assets/movies/5466391.jpg"),
      ],
      active: 0,
    };
  },
  methods: {
    carouselTimer() {
      let i = 0;
      setInterval(() => {
        if (i > this.images.length - 1) {
          i = 0;
        }
        this.active = i;
        i++;
      }, 3000);
    },
  },
  mounted() {
    this.carouselTimer();
    this.$store.dispatch("loadOnAime");
  },
  computed: {
    onAime() {
      return this.$store.state.onAime ?? "";
    },
  },
};
</script>

<style scoped>
.left-full {
  left: -100%;
}

.carousel-item {
  float: left;
  position: relative;
  display: block;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
}

.carousel-item.active {
  left: 0;
}
/* 
#aime-film {
  display: flex;
  flex-shrink: 0;
} */
</style>