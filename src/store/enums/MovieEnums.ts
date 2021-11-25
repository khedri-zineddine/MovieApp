enum Actions {
  // action types
  GET_POPULAR_MOVIES_ACTION = 'getPopularMoviesAction',
  GET_TOP_MOVIES_ACTION = 'getTopMoviesAction',
  GET_MOVIE_DETAIL_ACTION = "getMoiveDetailAction",
  SEARCH_MOVIE_ACTION = 'searchMovieAction'
}

enum Mutations {
  // mutation types
  GET_MOVIES_MUTATION = 'getMoviesMutation',
  GET_MOVIE_DETAIL_MUTATION = "getMoiveDetailMutation",
  SEARCH_MOVIE_MUTATION = 'searchMovieMutation'

}

export { Actions, Mutations }
