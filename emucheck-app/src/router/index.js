import Vue from 'vue'  //引入vue
import VueRouter from 'vue-router'  //引入vue-router
import index from '../views/index'  //引入首页的文件

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    redirect: {
      name: 'homeView'
    },
    meta: {
      title: 'Metawars'
    },
    component: index,
    children: [
      {
        path: '/homeView',
        name: 'homeView',
        meta: {
          title: 'Metawars'
        },
        component: resolve => require(['../views/home/home'], resolve)
      },
      {
        path: '/synthesisView',
        name: 'synthesisView',
        meta: {
          title: 'Metawars'
        },
        component: resolve => require(['../views/synthesis/index'], resolve)
      },
      {
        path: '/combatView',
        name: 'combatView',
        meta: {
          title: 'Metawars'
        },
        component: resolve => require(['../views/combat/index'], resolve)
      },
      {
        path: '/rankingView',
        name: 'rankingView',
        meta: {
          title: 'Metawars'
        },
        component: resolve => require(['../views/ranking/index'], resolve)
      },
      {
        path: '/collectionView',
        name: 'collectionView',
        meta: {
          title: 'Metawars'
        },
        component: resolve => require(['../views/collection/index'], resolve)
      },
      {
        path: '/collectionDetails',
        name: 'collectionDetails',
        meta: {
          title: 'Metawars'
        },
        component: resolve => require(['../views/collection/collectionDetails/index'], resolve)
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router


// export default new vueRouter({
//   routes: [
//     {
//       path: '/',
//       name: 'index',
//       component: index,
//       meta: {
//         title: 'Metawars'
//       }
//     },
//     {
//       path: '/collect',
//       name: 'collect',
//       component: collect,
//       meta: {title: 'Metawars'}
//     }
//   ]
// })
