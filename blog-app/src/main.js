import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFeatherAlt,
  faDragon,
  faEdit,
  faChair,
  faHome,
  faQuestionCircle,
  faCube,
  faPaw,
  faBullseye,
  faCandyCane,
  faCannabis,
  faCommentAlt
          } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


library.add(
  faFeatherAlt,
  faDragon,
  faEdit,
  faChair,
  faHome,
  faQuestionCircle,
  faCube,
  faPaw,
  faBullseye,
  faCandyCane,
  faCannabis,
  faCommentAlt
  );
import Panel from "@/components/Panel.vue";
// import ArticleContent from "@/components/ArticleContent.vue";
import PanelViewArea from "@/components/PanelViewArea.vue";
import Right from '@/components/Right.vue';

Vue.component('panel',Panel);
// Vue.component('article-content',ArticleContent);
Vue.component('panel-view-area',PanelViewArea);
Vue.component('right',Right);

Vue.component('font-awesome-icon',FontAwesomeIcon);
axios.defaults.baseURL = "http://127.0.0.1:8888";
Vue.prototype.$axios = axios;


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//刷新前保存vuex/刷新后读取刷新前vuex
if (sessionStorage.getItem('store')) {
  store.replaceState(
    Object.assign({},
      store.state,
      JSON.parse(sessionStorage.getItem('store'))
    )
  )
  sessionStorage.removeItem('store')
}

// 监听，在页面刷新时将vuex里的信息保存到sessionStorage里
window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('store', JSON.stringify(store.state))
})