import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { Actions, Mutations } from '@/store/enums/MovieEnums'
import ApiService from '@/core/services/ApiService'

@Module
class MovieModule extends VuexModule {
    movies = {} as any
    movieDetail = [] as any
    get getTotalPage(): any {
        return this.movies["total_pages"]
    }
    get getMovies(): any {
        return this.movies['results']
    }
    get getMovieDetail(): any {
        return (id: number) => {
            const tmp = this.movieDetail.filter((item: any) => item.id == id)
            if (tmp.length > 0) return tmp[0]
            return null
        }
    }
    @Mutation
    [Mutations.GET_MOVIES_MUTATION](movies: any) {
        this.movies = movies
        this.movieDetail = []
    }
    @Mutation
    [Mutations.GET_MOVIE_DETAIL_MUTATION](movie: any) {
        this.movieDetail.push(movie)
    }
    @Action
    [Actions.GET_POPULAR_MOVIES_ACTION](page: number = 1) {
        return new Promise<void>((resolve, reject) => {
            ApiService.get("movie/popular", "language=en-US&page=" + page)
                .then(({ data }) => {
                    this.context.commit(Mutations.GET_MOVIES_MUTATION, data)
                    resolve();
                })
                .catch(({ response }) => {
                    reject();

                })
        })
    }
    @Action
    [Actions.GET_TOP_MOVIES_ACTION](page: number = 1) {
        return new Promise<void>((resolve, reject) => {
            ApiService.get("movie/top_rated", "language=en-US&page=" + page)
                .then(({ data }) => {
                    this.context.commit(Mutations.GET_MOVIES_MUTATION, data)
                    resolve();
                })
                .catch(({ response }) => {
                    reject();

                })
        })
    }
    @Action
    [Actions.GET_MOVIE_DETAIL_ACTION](id: number) {
        return new Promise<void>((resolve, reject) => {
            ApiService.get('movie/' + id, "language=en-US")
                .then(({ data }) => {
                    this.context.commit(Mutations.GET_MOVIE_DETAIL_MUTATION, data)
                    resolve();
                })
                .catch(({ response }) => {
                    reject();

                })
        })
    }
    @Action
    [Actions.SEARCH_MOVIE_ACTION](obj: { query: string, page: number }) {
        return new Promise<void>((resolve, reject) => {
            ApiService.get('search/movie', "language=en-US&query=" + obj.query + "&page=" + obj.page)
                .then(({ data }) => {
                    this.context.commit(Mutations.GET_MOVIES_MUTATION, data)
                    resolve();
                })
                .catch(({ response }) => {
                    reject();

                })
        })
    }


}
export default MovieModule
