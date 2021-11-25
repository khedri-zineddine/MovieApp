<template>
  <div class="px-2 flex">
    <div
      class="
        max-w-md
        rounded-lg
        border-solid border-gray-500
        overflow-hidden
        w-96
      "
    >
      <div class="md:flex">
        <div class="w-full p-3">
          <div
            class="relative rounded-full border-gray-400 border-2 border-solid"
            @click="handleSearch($event)"
          >
            <i
              class="
                absolute
                cursor-pointer
                fa fa-search
                text-gray-700
                top-3
                left-4
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
            </i>
            <input
              type="text"
              class="
                bg-white
                h-10
                w-full
                px-12
                rounded-full
                focus:outline-none
                hover:cursor-pointer
              "
              name="search"
              placeholder="Search movie"
              @change="onValueChange"
              @keyup.enter="handleSearch($event)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "SearchBar",
  props: {
    onSearch: Function,
  },
  data: function () {
    return {
      value: "",
    };
  },
  methods: {
    onValueChange(event: any) {
      const { name, value } = event.target;
      this.value = value;
    },
    handleSearch(event: any) {
      if (this.onSearch) this.onSearch(this.value);
    },
  },
});
</script>
