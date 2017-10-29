import Vue from 'vue'
import Router from 'vue-router'
import PatrimonioAnalisi from '@/components/pages/PatrimonioAnalisi'
import Simulazione from '@/components/pages/Simulazione'
import HomePage from '@/components/pages/HomePage'

import PercorsoManuale from '@/components/PercorsoManuale'
import PercorsoGuidato from '@/components/PercorsoGuidato'
import TotalePortafoglio from '@/components/TotalePortafoglio'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/homepage',
            name: 'Home Page',
            component: HomePage
        },
        {
            path: '/simulazione',
            name: 'Simulazione',
            component: Simulazione,
            children: [
                {   
                    path: 'manuale',
                    name: 'Percorso Manuale',
                    component: PercorsoManuale
                },
                {
                    path: 'guidato',
                    name: 'Percorso Guidato',
                    component: PercorsoGuidato
                }
            ]
        },
        {
            path: '/analisi',
            name: 'Analisi Patrimonio',
            component: PatrimonioAnalisi,
            children: [
                {   
                    path: 'totalePortafoglio',
                    name: 'TOTALE PORTAFOGLIO',
                    component: TotalePortafoglio,
                    children: [
                        {
                            path: 'assetClass',
                            name: 'ASSET CLASS',
                            /*component: PatrimonioAnalisi*/
                        },
                        {
                            path: 'valuta',
                            name: 'VALUTA',
                            /*component: PatrimonioAnalisi*/
                        }
                    ]
                },
                {
                    path: 'assetClassAzionario',
                    name: 'ASSET CLASS AZIONARIO',
                    /*component: PatrimonioAnalisi*/
                },
                {
                    path: 'obbligazioni',
                    name: 'OBBLIGAZIONI',
                    /*component: PatrimonioAnalisi*/
                },
                {
                    path: 'certificates',
                    name: 'CERTIFICATES',
                    /*component: PatrimonioAnalisi*/
                },
                {
                    path: 'livelloProtezione',
                    name: 'LIVELLO DI PROTEZIONE',
                    /*component: PatrimonioAnalisi*/
                }

            ]

        },
        {
            path: '*',
            redirect: '/homepage'
        }
    ],
    
        
})
