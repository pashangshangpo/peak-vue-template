import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {
    change(state, data) {
      for (let key of Object.keys(data)) {
        state[key] = data[key]
      }
    },
  },
  getters: {},
  actions: {},
})
