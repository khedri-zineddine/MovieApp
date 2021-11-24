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
          >
            <i
              class="
                absolute
                cursor-pointer
                fa fa-search
                text-gray-700
                top-4
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
                h-12
                w-full
                px-12
                rounded-full
                focus:outline-none
                hover:cursor-pointer
              "
              name=""
              placeholder="Search movie"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "SearchBar",
  setup() {},
};
</script>
