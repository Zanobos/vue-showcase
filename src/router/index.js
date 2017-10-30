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
            label: 'Home Page',
            component: HomePage
        },
        {
            path: '/simulazione',
            label: 'Simulazione',
            component: Simulazione,
            children: [
                {   
                    path: 'manuale',
                    name: 'Percorso Manuale',
                    label: 'Percorso Manuale',
                    component: PercorsoManuale
                },
                {
                    path: 'guidato',
                    name: 'Percorso Guidato',
                    label: 'Percorso Guidato',
                    component: WIP
                },
                {   
                    path: '',
                    redirect: 'manuale'
                },
            ]
        },
        {
            path: '/analisi',
            label: 'Analisi Patrimonio',
            component: PatrimonioAnalisi,
            children: [
                {   
                    path: 'totalePortafoglio',
                    name: 'TOTALE PORTAFOGLIO',
                    label: 'TOTALE PORTAFOGLIO',
                    component: TotalePortafoglio,
                    children: [
                        {
                            path: 'assetClass',
                            name: 'ASSET CLASS',
                            label: 'ASSET CLASS',
                            component: WIP
                        },
                        {
                            path: 'valuta',
                            name: 'VALUTA',
                            label: 'VALUTA',
                            component: WIP
                        }
                    ]
                },
                {
                    path: 'assetClassAzionario',
                    name: 'ASSET CLASS AZIONARIO',
                    label: 'ASSET CLASS AZIONARIO',
                    component: WIP
                },
                {
                    path: 'obbligazioni',
                    name: 'OBBLIGAZIONI',
                    label: 'OBBLIGAZIONI',
                    component: WIP
                },
                {
                    path: 'certificates',
                    name: 'CERTIFICATES',
                    label: 'CERTIFICATES',
                    component: WIP
                },
                {
                    path: 'livelloProtezione',
                    name: 'LIVELLO DI PROTEZIONE',
                    label: 'LIVELLO DI PROTEZIONE',
                    component: WIP
                },
                {
                    path: '',
                    redirect: 'totalePortafoglio'
                }

            ]

        },
        {
            path: '*',
            redirect: '/homepage'
        }
    ],
    
        
})
