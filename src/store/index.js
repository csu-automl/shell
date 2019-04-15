import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

import * as modules from './modules'

Vue.use(Vuex)

export default () => {
  const store = new Vuex.Store({
    modules,
    plugins: [
      createPersistedState({
        paths: [
          'account.principal'
        ]
      })
    ]
  })

  return store
}
