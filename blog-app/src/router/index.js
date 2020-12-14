import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue';
import ArticleContent from '@/components/ArticleContent.vue';
// import Sort from '@/views/Sort.vue';
import Main from '@/views/Main.vue'
// import Html from '@/views/sort/Html.vue'
import Sort from '@/views/sort/Sort.vue'
import Editer from '@/views/Editer.vue'
import Category from '@/views/Category.vue'
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
  // //css
  // {
  //   path: '/css',
  //   name: 'Css',
  //   component: Sort,
  //   children:[
  //     // {
  //     //   path:'',
  //     //   name:'cssCategory',
  //     //   component:category
  //     // },
  //     {
  //       path:':id',
  //       name:'cssArticleContent',
  //       component: ArticleContent
  //     }
  //   ]
  // },
  // //js
  // {
  //   path: '/js',
  //   name: 'Js',
  //   component: Sort,
  //   children:[
  //     {
  //       path:':id',
  //       name:'jsArticleContent',
  //       component: ArticleContent
  //     }
  //   ]
  // },
  // //vue
  // {
  //   path: '/vue',
  //   name: 'Vue',
  //   component: Sort,
  //   children:[
  //     {
  //       path:':id',
  //       name:'vueArticleContent',
  //       component: ArticleContent
  //     }
  //   ]
  // },
  // //node
  // {
  //   path: '/node',
  //   name: 'Node',
  //   component: Sort,
  //   children:[
  //     {
  //       path:':id',
  //       name:'nodeArticleContent',
  //       component: ArticleContent
  //     }
  //   ]
  // },
  // //面试题
  // {
  //   path: '/interview',
  //   name: 'Interview',
  //   component: Sort,
  //   children:[
  //     {
  //       path:':id',
  //       name:'interviewArticleContent',
  //       component: ArticleContent
  //     }
  //   ]
  // },
  // //算法
  // {
  //   path: '/algorithm',
  //   name: 'algorithm',
  //   component: Sort,
  //   children:[
  //     {
  //       path:':id',
  //       name:'algorithmArticleContent',
  //       component: ArticleContent
  //     }
  //   ]
  // },
  // //前端工程化/\/webproject$/,
  // {
  //   path: '/webproject',
  //   name: 'webproject',
  //   component: Sort,
  //   children:[
  //     {
  //       path:':id',
  //       name:'webprojecthmArticleContent',
  //       component: ArticleContent
  //     }
  //   ]
  // },
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
