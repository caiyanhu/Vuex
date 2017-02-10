import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

// initial state
const state = {
  count: 0
}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
export default store
