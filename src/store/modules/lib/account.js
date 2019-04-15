import { AUTH, BACKEND, withAuthorization } from 'src/remotes'

export const PRINCIPAL_SWITCH = 'account/switch'
export const ACCOUNT_RESET_STATE = 'reset'

const INITIAL_STATE = {
  principal: null
}

export default {
  namespaced: true,
  state: { ...INITIAL_STATE },
  mutations: {
    [PRINCIPAL_SWITCH]: (state, principal) => {
      state.principal = principal
    },
    [ACCOUNT_RESET_STATE]: state => {
      Object.assign(state, { ...INITIAL_STATE })
    }
  },
  actions: {
    async me ({ state, commit }, principal) {
      const user = principal || state.principal
      const { data } = await BACKEND.get('api/v1/me', withAuthorization(user.token))
      await commit(PRINCIPAL_SWITCH, data)
      return state.principal
    },
    async signup (context, { email, password, name }) {
      const baseURL = window.__APP_CONFIG__.baseURL || window.location.origin
      await AUTH.post('api/v1/security/signup', {
        name,
        email,
        password,
        baseURL
      })
    },
    async forgot (context, { email }) {
      const baseURL = window.__APP_CONFIG__.baseURL || window.location.origin
      await AUTH.post('api/v1/security/forgot', {
        email,
        baseURL
      })
    },
    async login ({ dispatch }, { email, password }) {
      const r = await AUTH.post('api/v1/security/login', {
        email,
        password
      })
      const { data } = r
      const principal = await dispatch('me', data)
      return principal
    },
    async passwd (context, { check, password }) {
      await AUTH.post('api/v1/security/passwd', {
        check,
        password
      })
    },
    async confirm ({ dispatch }, { check }) {
      const { data } = await AUTH.get(`api/v1/security/confirm/${check}`)
      const principal = await dispatch('me', data)
      return principal
    },
    async recover ({ dispatch }, { check }) {
      const { data } = await AUTH.get(`api/v1/security/recover/${check}`)
      await dispatch('me', data)
      return data
    },
    async logout ({ state, dispatch }) {
      await AUTH.post('api/v1/security/logout', null, {
        headers: {
          Authorization: `Bearer ${state.principal.token}`
        }
      })
      await dispatch('dispose')
    },
    async dispose ({ commit }) {
      commit(PRINCIPAL_SWITCH, null)
    }
  }
}
