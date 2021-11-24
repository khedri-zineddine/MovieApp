<template>
  <a
    :class="this.isActive ? 'text-pink-700 bg-gray-200' : 'text-gray-900'"
    class="
      px-4
      py-2
      mt-2
      text-sm
      font-semibold
      bg-transparent
      rounded-lg
      dark-mode:bg-transparent
      dark-mode:hover:bg-gray-600
      dark-mode:focus:bg-gray-600
      dark-mode:focus:text-white
      dark-mode:hover:text-white
      dark-mode:text-gray-200
      hover:text-pink-700
      focus:text-pink-700
      hover:bg-gray-200
      focus:bg-gray-200 focus:outline-none focus:shadow-outline
      flex
      items-center
    "
  >
    <slot name="icon" :style="{ color: 'red' }"></slot>
    <span class="h-5 w-11/12 flex mx-5">{{ content }}</span></a
  >
</template>
<script lang="ts">
export default {
  name: "SideItem",
  props: {
    content: String,
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      active: false,
    };
  },
};
</script>
