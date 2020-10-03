import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home/Home.vue';
import Content from '@/components/Home/components/Content.vue';
import Sort from '@/components/Home/Sort.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'',
        name:'Content',
        component: Content
      }
    ]
  },
  {
    path: '/sort',
    name: 'Sort',
    component: Sort,
    children:[
      {
        path:'',
        name:'Content',
        component: Content
      }
    ]
  },
  {
    path: '/aboutme',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
