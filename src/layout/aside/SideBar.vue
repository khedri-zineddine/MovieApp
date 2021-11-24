<template>
  <div class="w-3/12 flex">
    <div class="md:flex flex-col md:flex-row md:min-h-screen w-5/6">
      <div
        class="
          flex flex-col
          w-full
          md:w-64
          text-gray-700
          bg-white
          dark-mode:text-gray-200 dark-mode:bg-gray-800
          flex-shrink-0
        "
        x-data="{ open: false }"
      >
        <div
          class="
            flex-shrink-0
            px-8
            py-4
            flex flex-row
            items-center
            justify-between
          "
        >
          <a
            href="#"
            class="
              text-lg
              font-semibold
              tracking-widest
              text-gray-900
              uppercase
              rounded-lg
              dark-mode:text-white
              focus:outline-none focus:shadow-outline
            "
            >Movie Task</a
          >
          <button
            class="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
            @click="open = !open"
          >
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
              <path
                x-show="!open"
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
              <path
                x-show="open"
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <nav
          :class="{ block: open, hidden: !open }"
          class="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto"
        >
          <router-link to="/">
            <side-item content="Home" :isActive="this.currentRoute === '/'">
              <template v-slot:icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                  />
                </svg>
              </template>
            </side-item>
          </router-link>
          <router-link to="/watchlist">
            <side-item
              content="Watchlist"
              :isActive="this.currentRoute === '/watchlist'"
            >
              <template v-slot:icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                  />
                </svg>
              </template>
            </side-item>
          </router-link>
          <router-link to="/comingsoon">
            <side-item
              content="Coming soon"
              :isActive="this.currentRoute === '/comingsoon'"
            >
              <template v-slot:icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </template>
            </side-item>
          </router-link>
        </nav>
      </div>
    </div>
    <div class="w-px h-auto bg-gray-300"></div>
  </div>
</template>
<script lang="ts">
import SideItem from "@/components/sidebar/SideItem.vue";
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
  name: "SideBar",
  components: { SideItem },
  watch: {
    $route(to, from) {
      this.currentRoute = to.path;
    },
  },
  data() {
    return {
      currentRoute: "/",
      route: useRoute(),
    };
  },
});
</script>
