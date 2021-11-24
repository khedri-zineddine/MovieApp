<template>
  <svg viewBox="0 0 24 24" class="icon" :class="getSize" :fill="getColor">
    <path :d="path" />
  </svg>
</template>

<script>
import icons from "@/core/data/icons";

export default {
  name: "AppIcon",
  props: {
    name: String,
    size: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: null,
    },
  },
  computed: {
    path() {
      return icons[this.name]["data"];
    },
    getSize() {
      return icons[this.name][size ? size : "size"];
    },
    getColor() {
      return icons[this.name][color ? color : "color"];
    },
  },
};
</script>