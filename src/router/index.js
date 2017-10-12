import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PatrimonioAnalisi from '@/components/PatrimonioAnalisi'
import HomePage from '@/components/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/analisi',
      name: 'Analisi Patrimonio',
      component: PatrimonioAnalisi
    },
    {
      path: '/homepage',
      name: 'Home Page',
      component: HomePage
    },
    {
      path: '*',
      redirect: '/hello'
    }
  ]
})
