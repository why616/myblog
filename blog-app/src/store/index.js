import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    searchBase:false
  },
  mutations: {
    changeShowContent($state, nextState){
      console.log("修改为",nextState);
      $state.searchBase = nextState;
    }
  },
  actions: {
  },
  modules: {
  }
})
