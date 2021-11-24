<template>
  <div>
    <vuexplosive-modal :visible="showMovieDetail" :closeModal="closeModal" />
    <div class="flex">
      <side-bar />
      <div class="w-full">
        <div>
          <search-bar />
          <movie-player
            v-if="getPopularMovies && getPopularMovies.length > 0"
            :movieData="getplayingMovie[playingMovie]"
          />
        </div>
        <div>
          <div class="py-5">
            <movie-tab
              :tabName="moiveTabs"
              class="my-6"
              :onTabChange="this.onTabChange"
            >
              <template v-slot:content>
                <div id="popular-movie" class="flex flex-wrap py-5">
                  <movie-card
                    v-for="(movie, index) in this.typeMovie == 'popular'
                      ? getPopularMovies
                      : getTopMovies"
                    :index="index"
                    :type="this.typeMovie"
                    :key="movie.id"
                    :movieData="movie"
                    :watchMovie="this.watchMoive"
                    :movieDetail="this.movieDetail"
                  />
                </div>
              </template>
            </movie-tab>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import MovieCard from "@/components/MovieCard.vue";
import MoviePlayer from "@/components/MoviePlayer.vue";
import SideBar from "@/layout/aside/SideBar.vue";
import SearchBar from "@/components/SearchBar.vue";
import MovieTab from "@/components/MovieTab.vue";
import VuexplosiveModal from "@/components/MovieDetail.vue";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/MovieEnums";
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  components: {
    MovieCard,
    SideBar,
    SearchBar,
    MoviePlayer,
    VuexplosiveModal,
    MovieTab,
  },
  name: "Home",
  computed: {
    getPopularMovies() {
      const store = useStore();
      return store.getters.getPopularMovies;
    },
    getTopMovies() {
      const store = useStore();
      return store.getters.getTopMovies;
    },
    getplayingMovie() {
      const store = useStore();
      if (this.typeMovie == "popular") return store.getters.getPopularMovies;
      return store.getters.getTopMovies;
    },
  },
  methods: {
    watchMoive(index: number, type: string) {
      this.typeMovie = type;
      this.playingMovie = index;
    },
    movieDetail(id: number) {
      this.showMovieDetail = true;
    },
    closeModal() {
      this.showMovieDetail = false;
    },
    onTabChange(index: number) {
      this.store.dispatch(this.actions[index]);
      this.typeMovie = this.moiveTabs[index].name;
      this.playingMovie = 2;
    },
  },
  data() {
    return {
      store: useStore(),
      items: [1, 2, 3],
      playingMovie: 2,
      typeMovie: "popular",
      showMovieDetail: false,
      moiveTabs: [
        { title: "Popular Movies", name: "popular" },
        { title: "Top Rated Movies", name: "top" },
      ],
      actions: [
        Actions.GET_POPULAR_MOVIES_ACTION,
        Actions.GET_TOP_MOVIES_ACTION,
      ],
    };
  },
  mounted() {
    this.store.dispatch(Actions.GET_POPULAR_MOVIES_ACTION);
  },
});
</script>
