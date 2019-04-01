import Vue from 'vue'
import Router from 'vue-router'
import components from '@/components'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: components.HelloWorld
    },
    {
      path: '/tests',
      name: 'Tests',
      component: components.Tests
    }
  ]
})
