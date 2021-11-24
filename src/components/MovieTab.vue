<template>
  <div>
    <div>
      <div class="flex">
        <div
          class="py-2 px-5 mr-2 rounded-full bg-gray-200 cursor-pointer"
          v-for="(item, index) in this.tabName"
          :key="index"
          @click="onTabChange(index)"
        >
          <h1 class="font-bold text-xl w-max">{{ item.title }}</h1>
        </div>
      </div>
    </div>
    <div>
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "MovieTab",
  props: {
    onTabChange: Function,
    tabName: {
      default: [],
    },
  },
});
</script>
