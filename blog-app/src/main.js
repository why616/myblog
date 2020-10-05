import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css';
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
import ArticalContent from "@/components/ArticalContent.vue";
import PanelViewArea from "@/components/PanelViewArea.vue";
import Right from '@/components/Right.vue';

Vue.component('panel',Panel);
Vue.component('artical-content',ArticalContent);
Vue.component('panel-view-area',PanelViewArea);
Vue.component('right',Right);

Vue.component('font-awesome-icon',FontAwesomeIcon);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
