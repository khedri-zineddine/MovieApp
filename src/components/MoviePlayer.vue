<template>
  <div class="relative w-11/12">
    <div
      class="max-w-full rounded-xl overflow-hidden shadow-lg"
      :style="{ height: '500px' }"
    >
      <img
        class="
          w-full
          h-full
          transform
          filter
          drop-shadow-sm
          hover:scale-110
          transition-transform
          duration-700
          backdrop-brightness-95
        "
        :src="
          imgBaseURL +
          size +
          '/' +
          (movieData && movieData.backdrop_path
            ? movieData.backdrop_path
            : movieData.poster_path)
        "
        alt="Sunset in
    the mountains"
      />
    </div>
    <div
      class="absolute bottom-40 cursor-pointer opacity-50"
      :style="{ left: '37.5rem' }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-44 w-44"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#E5E7EB"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
    <div class="px-6 py-4 w-full absolute max-w-xl bottom-5">
      <div
        class="flex font-bold text-xl mb-2 text-gray-100 divide-y opacity-80"
      >
        {{ movieData.title }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { image } from "@/core/config/ImageConfig";
export default {
  name: "MoviePlayer",
  props: {
    movieData: {},
  },
  data() {
    return {
      imgBaseURL: image.baseURL,
      size: image.size[0],
    };
  },
};
</script>
