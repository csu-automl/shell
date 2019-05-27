import Vue from 'vue'
import Router from 'vue-router'
import components from '@/components'
import pages from '@/pages'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: components.HelloWorld
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: pages.SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: pages.SignUp
    },
    {
      path: '/email-sent',
      name: 'EmailSent',
      component: pages.EmailSent
    },
    {
      path: '/confirm/:token',
      name: 'Confirm',
      component: pages.Confirm
    },
    {
      path: '/private',
      name: 'Private',
      component: pages.Private,
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          redirect: 'tests'
        },
        {
          path: 'tests',
          name: 'Tests',
          component: pages.Tests
        }
      ]
    }
    // {
    //   path: '*',
    //   component: pages.NotFound
    // }
  ]
})
