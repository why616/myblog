import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    searchBase:true,
    category: false,
  },
  mutations: {
    changeShowContent(state, nextState){
      console.log("修改为",nextState);
      state.searchBase = nextState;
    },
    changeCategory(state, newCategory){
      console.log("分类修改为",newCategory);
      state.category = newCategory;
    }
  },
  actions: {
  },
  modules: {
  }
})
