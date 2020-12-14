// import Vue from 'vue'
// import Vuex from 'vuex'

Vue.use(Vuex)

// const a = {
//   namespaced:true,
//   state: {
//     name: 'why'
//   },
//   mutations:{
//     test(){
//       console.log(666);
//     }
//   }
// }
export default new Vuex.Store({
  strict: true,
  state: {
    name:'666',
    searchBase:true,
    category: false,
  },
  mutations: {
    test(){
      console.log(666);
    },
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
    // a
  }
})
