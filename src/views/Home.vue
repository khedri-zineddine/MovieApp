<template>
  <div>
    <movie-detail
      :visible="showMovieDetail"
      :closeModal="closeModal"
      :movie="movieIdDetail > -1 && this.getMovieDetail(movieIdDetail)"
    />
    <div class="flex">
      <side-bar />
      <div class="w-full">
        <div>
          <search-bar :onSearch="this.searchMovie" />
          <movie-player
            v-if="getMovies && getMovies.length > 0"
            :movieData="getMovies[playingMovie]"
          />
        </div>
        <div>
          <div class="pt-5">
            <movie-tab
              :tabName="movieTabs"
              class="mt-6"
              :onTabChange="this.onTabChange"
              :currentTab="this.currentTab > -1 && movieTabs[this.currentTab]"
            >
              <template v-slot:content>
                <div id="popular-movie" class="flex flex-wrap py-5">
                  <movie-card
                    v-for="(movie, index) in getMovies"
                    :index="index"
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
        <div class="pb-5">
          <vue-pagination
            :pages="this.getTotalPage"
            :currentPage="this.currentPage"
            @pageChanged="onPageChange"
          />
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
import MovieDetail from "@/components/MovieDetail.vue";
import VuePagination from "@/components/VuePagination.vue";
import { useStore, mapGetters } from "vuex";
import { Actions } from "@/store/enums/MovieEnums";
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  components: {
    MovieCard,
    SideBar,
    SearchBar,
    MoviePlayer,
    MovieDetail,
    MovieTab,
    VuePagination,
  },
  name: "Home",
  props: {
    category: {
      type: String,
      default: "popular",
    },
  },
  computed: {
    ...mapGetters(["getMovies", "getMovieDetail", "getTotalPage"]),
  },
  watch: {
    "$route.query.page"(newPage, oldPage) {
      this.currentPage = newPage ? parseInt(newPage) : 1;
      this.onPageChange(this.currentPage);
    },
    "$route.query.category"(category, from) {
      const tab = this.movieCategory.indexOf(String(category));
      this.currentTab = tab;
      if (tab == -1) this.currentTab = 0;
      else if (this.movieCategory[tab] == "search") this.currentTab = -1;
      if (typeof this.currentPage == "number")
        this.updatePage(this.currentPage);
    },
    "$route.query.query"(query, from) {
      if (query && query != "") {
        this.queryData = query;
        if (typeof this.currentPage == "number")
          this.updatePage(this.currentPage);
      }
    },
    "$route.query.detail"(detail, from) {
      if (!detail) this.showMovieDetail = false;
      else this.movieDetail(detail);
    },
  },
  methods: {
    updateRoute(obj: any) {
      this.$router.replace({
        name: "Home",
        query: obj,
      });
    },
    watchMoive(index: number) {
      this.playingMovie = index;
    },
    movieDetail(id: number) {
      const queries = { ...this.$route.query, detail: id };
      this.$router.push({ name: "Home", query: queries });
      this.showMovieDetail = true;
      const tmp = this.getMovieDetail(id);
      this.movieIdDetail = id;
      if (!tmp) this.store.dispatch(Actions.GET_MOVIE_DETAIL_ACTION, id);
    },
    closeModal() {
      let queries = { ...this.$route.query };
      delete queries.detail;
      this.$router.replace({ name: "Home", query: queries });
      this.showMovieDetail = false;
    },

    onTabChange(index: number) {
      this.store.dispatch(this.actions[index], 1);
      this.playingMovie = 0;
      this.currentPage = 1;
      this.currentTab = index;
      this.updateRoute({ page: 1, category: this.movieCategory[index] });
    },
    searchMovie(query: string) {
      if (query && query != "") {
        this.store.dispatch(Actions.SEARCH_MOVIE_ACTION, {
          query: query,
          page: 1,
        });
        this.updateRoute({ page: 1, category: "search", query: query });
        this.queryData = query;
        this.currentTab = -1;
        this.currentPage = 1;
      }
    },
    onPageChange(page: number) {
      this.playingMovie = 0;
      this.currentPage = page;
      this.updatePage(page);
    },
    updatePage(page: number) {
      let queries = {};
      if (this.currentTab == -1 && this.queryData != "") {
        queries = { page: page, query: this.queryData, category: "search" };
        this.store.dispatch(Actions.SEARCH_MOVIE_ACTION, queries);
      } else {
        console.log("search here");
        queries = { page: page, category: this.movieCategory[this.currentTab] };
        this.store.dispatch(this.actions[this.currentTab], page);
      }
      this.updateRoute(queries);
    },
  },
  data() {
    return {
      store: useStore(),
      items: [1, 2, 3],
      playingMovie: 0,
      showMovieDetail: false,
      movieIdDetail: -1,
      movieTabs: ["Popular Movies", "Top Rated Movies"],
      movieCategory: ["popular", "toprated", "search"],
      currentTab: 0,
      currentPage: this.$route.query.page ? this.$route.query.page : 1,
      queryData: "",
      actions: [
        Actions.GET_POPULAR_MOVIES_ACTION,
        Actions.GET_TOP_MOVIES_ACTION,
      ],
    };
  },
  created() {
    const category = this.$route.query.category;
    if (category) {
      this.currentTab = this.movieCategory.indexOf(String(category));
      if (this.currentTab == -1) this.currentTab = 0;
    }
  },
  mounted() {
    if (this.movieCategory[this.currentTab] == "search") {
      const data = this.$route.query.query ? this.$route.query.query : "";
      this.store.dispatch(Actions.SEARCH_MOVIE_ACTION, {
        query: data,
        page: this.currentPage,
      });
      this.queryData = String(data);
      this.currentTab = -1;
    } else this.store.dispatch(this.actions[this.currentTab], this.currentPage);
  },
});
</script>
