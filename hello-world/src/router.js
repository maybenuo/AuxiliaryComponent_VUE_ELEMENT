import Vue from 'vue'
import Router from 'vue-router'

import helloWorld from '@/components/HelloWorld.vue'
import inlineForm from '@/views/formModules/inlineForm.vue'
import blockStyle from '@/views/styleModules/block.vue'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/helloWorld'
    },
    {
      path: '/helloWorld',
      name: 'helloWorld',
      component: helloWorld
    },
    {
      path: '/inlineForm',
      name: 'inlineForm',
      component: inlineForm
    },
    {
      path: '/blockStyle',
      name: 'blockStyle',
      component: blockStyle
    }
  ]
})

export default router
