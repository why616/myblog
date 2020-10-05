import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue';
import ArticalContent from '@/components/ArticalContent.vue';
// import Sort from '@/views/Sort.vue';
import Main from '@/views/Main.vue'
import Html from '@/views/sort/Html.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'',
        name:'Main',
        component: Main
      }
    ]
  },
  //html
  {
    path: '/html',
    name: 'Html',
    component: Html,
    children:[
      {
        path:':id',
        name:'ArticalContent',
        component: ArticalContent
      }
    ]
  },
  // //css
  // {
  //   path: '/css',
  //   name: 'Css',
  //   component: Css,
  //   children:[
  //     {
  //       path:':id',
  //       name:'Content',
  //       component: Content
  //     }
  //   ]
  // },
  // //js
  // {
  //   path: '/js',
  //   name: 'Js',
  //   component: Js,
  //   children:[
  //     {
  //       path:':id',
  //       name:'Content',
  //       component: Content
  //     }
  //   ]
  // },
  // //vue
  // {
  //   path: '/vue',
  //   name: 'Vue',
  //   component: Vue,
  //   children:[
  //     {
  //       path:':id',
  //       name:'Content',
  //       component: Content
  //     }
  //   ]
  // },
  // //node
  // {
  //   path: '/node',
  //   name: 'Node',
  //   component: Node,
  //   children:[
  //     {
  //       path:':id',
  //       name:'Content',
  //       component: Content
  //     }
  //   ]
  // },
  // //面试题
  // {
  //   path: '/interview',
  //   name: 'Interview',
  //   component: Interview,
  //   children:[
  //     {
  //       path:':id',
  //       name:'Content',
  //       component: Content
  //     }
  //   ]
  // },
  // //分类
  // {
  //   path: '/sort',
  //   name: 'Sort',
  //   component: Sort
  // },
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
