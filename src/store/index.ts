import { createStore, createLogger } from 'vuex'
import { config } from 'vuex-module-decorators'
import MovieModule from '@/store/modules/MovieModule'

config.rawError = true
const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : []

const store = createStore({
  modules: {
    MovieModule
  },
  strict: debug,
  plugins: plugins
})
export default store
