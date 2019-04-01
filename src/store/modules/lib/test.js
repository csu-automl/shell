import axios from 'axios'

const BACKEND = axios.create({
  baseURL: 'http://localhost:3000'
})

export default {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    'tests-loaded': (state, tests) => {
      state.list = tests
    }
  },
  actions: {
    async loadTests ({ rootState, commit }) {
      const { data } = await BACKEND.get('api/v1/test')
      commit('tests-loaded', data)
      return data
    }
  }
}
