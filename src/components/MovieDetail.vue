<template>
  <div
    class="vuexplosive-modal"
    :class="active ? 'block' : 'hidden'"
    @keydown.esc="active = false"
    :aria-hidden="modalToggle"
    tabindex="-1"
    role="dialog"
    v-if="movie"
  >
    <transition name="scale">
      <div
        class="
          h-auto
          fixed
          top-1/2
          left-1/2
          w-2/3
          max-w-full
          bg-gray-100
          p-5
          rounded-xl
          transform
          -translate-y-1/2 -translate-x-1/2
        "
        :style="{ boxShadow: '#6B7280 0px 0px 15px -5px', zIndex: 99999 }"
        v-if="active"
      >
        <div class="vuexplosive-modal-inner">
          <div class="mb-5 flex justify-between">
            <div class="w-96">
              <img
                class="
                  cursor-pointer
                  h-96
                  w-full
                  drop-shadow-sm
                  backdrop-brightness-95
                  rounded-xl
                "
                :src="
                  imgBaseURL +
                  size +
                  '/' +
                  (movie.poster_path ? movie.poster_path : movie.backdrop_path)
                "
              />
            </div>
            <div class="px-4 w-full">
              <div class="text-2xl font-bold pb-1">
                {{ movie.title }}
              </div>
              <div>
                <p class="pb-4">{{ movie.overview }}</p>
                <table class="movie-info">
                  <tr>
                    <td>
                      <span class="text-gray-900 font-semibold">Genres</span>
                    </td>
                    <td class="text-blue-700">
                      <span
                        class="pr-3"
                        v-for="genre in movie.genres"
                        :key="genre.id"
                        >{{ genre.name }}</span
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="text-gray-900 font-semibold"
                        >Release date</span
                      >
                    </td>
                    <td>
                      <span>{{ movie.release_date }}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="text-gray-900 font-semibold">Status</span>
                    </td>
                    <td>
                      <span>{{ movie.status }}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="text-gray-900 font-semibold"
                        >Popularity</span
                      >
                    </td>
                    <td>
                      <span>{{ movie.popularity }}</span>
                    </td>
                  </tr>
                  <tr v-if="movie.spoken_languages">
                    <td>
                      <span class="text-gray-900 font-semibold"
                        >Spoken languages</span
                      >
                    </td>
                    <td>
                      <span
                        class="pr-3"
                        v-for="languag in movie.spoken_languages"
                        :key="languag.english_name"
                        >{{ languag.english_name }}</span
                      >
                    </td>
                  </tr>

                  <tr v-if="movie.production_companies">
                    <td>
                      <span class="text-gray-900 font-semibold"
                        >Production Companies</span
                      >
                    </td>
                    <td class="text-blue-700">
                      <span
                        class="pr-3"
                        v-for="company in movie.production_companies"
                        :key="company.id"
                        >{{ company.name }}</span
                      >
                    </td>
                  </tr>
                  <tr v-if="movie.homepage">
                    <td>
                      <span class="text-gray-900 font-semibold">Home page</span>
                    </td>
                    <td>
                      <span
                        ><a
                          class="text-blue-700"
                          target="_blank"
                          :href="movie.homepage"
                          >{{ movie.homepage }}</a
                        ></span
                      >
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div>
              <button @click="modalToggle" arial-label="close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>


<script>
/* eslint-disable */
import { image } from "@/core/config/ImageConfig";
export default {
  name: "MovieDetail",
  props: {
    visible: {
      default: false,
    },
    movie: Object,
    closeModal: Function,
  },
  data: function () {
    return {
      active: false,
      imgBaseURL: image.baseURL,
      size: image.size,
    };
  },

  methods: {
    modalToggle() {
      this.closeModal(!this.active);
      this.active = !this.active;
    },
  },
  watch: {
    visible(oldVal, newVal) {
      this.active = this.visible;
    },
  },
};
</script>


<style scoped>
table.movie-info td {
  padding-bottom: 10px;
}
.vuexplosive-modal {
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.8);
  text-align: left;
}

.scale-enter-active {
  animation: bounce-in 0.3s;
}
.scale-leave-active {
  animation: bounce-in 0.3s reverse;
}
@keyframes bounce-in {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>
