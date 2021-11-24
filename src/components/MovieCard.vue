<template>
  <div class="relative mx-2 my-2">
    <div class="max-w-xs h-96 rounded-xl overflow-hidden shadow-lg">
      <img
        class="
          cursor-pointer
          w-full
          h-full
          transform
          filter
          drop-shadow-sm
          hover:scale-125
          transition-transform
          duration-500
          backdrop-brightness-95
        "
        :src="imgBaseURL + size + '/' + (movieData && movieData.backdrop_path)"
        alt="Sunset in
    the mountains"
      />
    </div>
    <div class="px-6 py-4 w-full absolute max-w-sm bottom-0">
      <div class="flex font-bold text-xl mb-2 text-gray-100 divide-y">
        {{ movieData.title }}
      </div>
      <p class="flex">
        <span
          v-for="genre in movieData.genre_ids"
          :key="genre"
          class="inline-block text-sm font-semibold text-gray-300"
          >{{ genre }}/</span
        >
      </p>
      <div class="flex space-x-3">
        <button
          @click="watchMovie(this.index, this.type)"
          class="
            flex-auto
            bg-pink-700
            hover:bg-transparent
            border border-transparent
            hover:border-pink-700
            text-gray-200
            font-bold
            py-2
            px-3
            rounded
          "
        >
          Watch
        </button>
        <button
          @click="movieDetail(movieData.id)"
          class="
            flex-auto
            bg-transparent
            hover:bg-pink-700
            text-gray-200
            font-semibold
            hover:text-gray-200
            py-2
            px-3
            border border-pink-700
            hover:border-transparent
            rounded
          "
        >
          Details
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { image } from "@/core/config/ImageConfig";
export default {
  name: "MovieCard",
  props: {
    watchMovie: Function,
    movieDetail: Function,
    movieData: {},
    index: Number,
    type: String,
  },
  data() {
    return {
      imgBaseURL: image.baseURL,
      size: image.size[0],
    };
  },
  updated() {
    //console.log(movieData);
  },
};
</script>
