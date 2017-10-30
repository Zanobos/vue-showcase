import Vue from 'vue'
import Router from 'vue-router'
import PatrimonioAnalisi from '@/components/pages/PatrimonioAnalisi'
import Simulazione from '@/components/pages/Simulazione'
import HomePage from '@/components/pages/HomePage'

import PercorsoManuale from '@/components/PercorsoManuale'
import WIP from '@/components/WIP'
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
                    component: WIP
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
                            component: WIP
                        },
                        {
                            path: 'valuta',
                            name: 'VALUTA',
                            component: WIP
                        }
                    ]
                },
                {
                    path: 'assetClassAzionario',
                    name: 'ASSET CLASS AZIONARIO',
                    component: WIP
                },
                {
                    path: 'obbligazioni',
                    name: 'OBBLIGAZIONI',
                    component: WIP
                },
                {
                    path: 'certificates',
                    name: 'CERTIFICATES',
                    component: WIP
                },
                {
                    path: 'livelloProtezione',
                    name: 'LIVELLO DI PROTEZIONE',
                    component: WIP
                }

            ]

        },
        {
            path: '*',
            redirect: '/homepage'
        }
    ],
    
        
})
