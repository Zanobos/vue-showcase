import Vue from 'vue'
import Router from 'vue-router'
import PatrimonioAnalisi from '@/components/PatrimonioAnalisi'
import SimulazioneManuale from '@/components/SimulazioneManuale'
import HomePage from '@/components/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/homepage',
      name: 'Home Page',
      component: HomePage
    },
    {
      path: '/simulazionemanuale',
      name: 'Simulazione Manuale',
      component: SimulazioneManuale
    },
    {
      path: '/analisi',
      name: 'Analisi Patrimonio',
      component: PatrimonioAnalisi
    },
    {
      path: '*',
      redirect: '/homepage'
    }
  ]
})