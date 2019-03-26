import Vue from 'vue'
import Router from 'vue-router'

import helloWorld from '@/components/HelloWorld.vue'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/helloWorld'
    },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: home
    // },
    {
      path: '/helloWorld',
      name: 'helloWorld',
      component: helloWorld
    }
  ]
})

export default router
