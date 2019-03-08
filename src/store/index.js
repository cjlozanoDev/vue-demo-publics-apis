import Vue from 'vue'
import Vuex from 'vuex'
import marvel from './modules/marvel'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    marvel
  },
  strict: debug
})

export default store
