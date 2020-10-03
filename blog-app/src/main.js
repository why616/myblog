import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
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
import './assets/css/reset.css';

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
Vue.component('font-awesome-icon',FontAwesomeIcon);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
