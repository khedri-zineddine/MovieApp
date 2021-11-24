import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { Actions, Mutations } from '@/store/enums/MovieEnums'
import ApiService from '@/core/services/ApiService'

@Module
export default class MovieModule extends VuexModule {
    popularMovies = {} as any
    topMovies = {} as any
    get getPopularMovies(): any {
        return this.popularMovies['results']
    }
    get getTopMovies(): any {
        return this.topMovies['results']
    }
    @Mutation
    [Mutations.GET_POPULAR_MOVIES_MUTATION](movies: any) {
        this.popularMovies = movies
    }
    @Mutation
    [Mutations.GET_TOP_MOVIES_MUTATION](movies: any) {
        this.topMovies = movies
    }
    @Action
    [Actions.GET_POPULAR_MOVIES_ACTION]() {
        return new Promise<void>((resolve, reject) => {
            ApiService.get("movie/popular", "language=en-US&page=1")
                .then(({ data }) => {
                    this.context.commit(Mutations.GET_POPULAR_MOVIES_MUTATION, data)
                    resolve();
                })
                .catch(({ response }) => {
                    reject();

                })
        })
    }
    @Action
    [Actions.GET_TOP_MOVIES_ACTION]() {
        return new Promise<void>((resolve, reject) => {
            ApiService.get("movie/top_rated", "language=en-US&page=1")
                .then(({ data }) => {
                    this.context.commit(Mutations.GET_TOP_MOVIES_MUTATION, data)
                    resolve();
                })
                .catch(({ response }) => {
                    reject();

                })
        })
    }


}
