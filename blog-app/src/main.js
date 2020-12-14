import './assets/css/reset.css';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios';
//element-ui
import { Input, MessageBox, Message, Pagination  } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Input);
Vue.use(Pagination);
// Vue.use(MessageBox);
// Vue.use(Message);

Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;

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
  faCommentAlt,
  faAngleLeft,
  faAngleRight,
  faList,
  faCog,
  faEye,
  faClock
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
  faCommentAlt,
  faAngleLeft,
  faAngleRight,
  faList,
  faCog,
  faEye,
  faClock
  );

import Panel from "@/components/Panel.vue";
// import ArticleContent from "@/components/ArticleContent.vue";
import PanelViewArea from "@/components/PanelViewArea.vue";
import Right from '@/components/Right.vue';

// import VMdEditor from '@kangc/v-md-editor';
// import '@kangc/v-md-editor/lib/style/base-editor.css';
// import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
// VMdEditor.use(githubTheme);
// Vue.use(VMdEditor);


//Editer
import VMdEditor from '@kangc/v-md-editor/lib/codemirror-editor';
import '@kangc/v-md-editor/lib/style/codemirror-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';

// codemirror 编辑器的相关资源
import Codemirror from 'codemirror';
// mode
import 'codemirror/mode/markdown/markdown';
// placeholder
import 'codemirror/addon/display/placeholder';
// active-line
import 'codemirror/addon/selection/active-line';
// scrollbar
import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/addon/scroll/simplescrollbars.css';
// style
import 'codemirror/lib/codemirror.css';

VMdEditor.Codemirror = Codemirror;

VMdEditor.use(githubTheme);

Vue.use(VMdEditor);

import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';

//Preview
VMdPreview.use(githubTheme);
Vue.use(VMdPreview);


Vue.component('panel',Panel);
// Vue.component('article-content',ArticleContent);
Vue.component('panel-view-area',PanelViewArea);
Vue.component('right',Right);

Vue.component('font-awesome-icon',FontAwesomeIcon);
// axios.defaults.baseURL = "http://192.168.137.1:8888";
axios.defaults.baseURL = "http://127.0.0.1:8888"
Vue.prototype.$axios = axios;


Vue.config.productionTip = false

console.log("设置cache");
Vue.prototype.$cache = {};

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