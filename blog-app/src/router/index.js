// import Vue from 'vue'
// import VueRouter from 'vue-router'
const Home = ()=> import ('@/views/Home.vue');
const ArticleContent = ()=> import ('@/components/ArticleContent.vue');
// import Sort from '@/views/Sort.vue';
const Main = ()=> import  ('@/views/Main.vue')
// import Html from '@/views/sort/Html.vue'
const Sort = ()=> import  ('@/views/sort/Sort.vue')
const Editer = ()=> import  ('@/views/Editer.vue')
const Category = ()=> import  ('@/views/Category.vue')
Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    // name: 'Home',
    component: Home,
    children:[
      {
        path:'',
        name:'Main',
        component: Main
      }
    ]
  },
  //category
  {
    path: '/sort/:category',
    name: 'Sort',
    component: Sort,
    children:[
      {
        path:'',
        name:'Category',
        component: Category
      },
      {
        path:':id',
        name:'ArticleContent',
        component: ArticleContent
        
      }
    ]
  },
  {
    path:'/sort',
    redirect:'/sort/html'
  },
  {
    path: '/aboutme',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Editer/:id',
    name: 'updateArticle',
    component: Editer,
    props:true
  },
  {
    path: '/Editer',
    name: 'Editer',
    component: Editer,
    props:true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
})

export default router
