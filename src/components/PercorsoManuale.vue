<template>
    <div>
        <tabella-simulazione 
            v-for="gruppo in input.gruppi" 
            :key="gruppo.codice"
            :items="gruppo.posizioni" 
            :title="gruppo.titolo">  
        </tabella-simulazione>

        <div><strong>Totale Patrimonio </strong>{{totalePatrimonio}}</div>
    </div>
</template>

<script>
import TabellaSimulazione from '@/components/TabellaSimulazione.vue'

const input = {
    gruppi: [
        {
            codice: 'SPESA',
            titolo: 'Spesa',
            posizioni: [
                {   
                    codiceProdotto: '-',
                    descrizione: 'CONTO CORRENTE',
                    rischio: '-',
                    ctvIniziale: 3000.0,
                    acquista: null,
                    vendi: null,
                    ctvFinale: null
                }
            ]
        },
        {
            codice: 'OBI10',
            titolo: 'Riserva',
            posizioni: [
                {   
                    codiceProdotto: '-',
                    descrizione: 'CONTO CORRENTE',
                    rischio: '-',
                    ctvIniziale: 25000.45,
                    acquista: null,
                    vendi: null,
                    ctvFinale: null
                },
                {   
                    codiceProdotto: 'IT6892341',
                    descrizione: 'BTP 12/56 M-ITA',
                    rischio: '2.5',
                    ctvIniziale: 4003.23,
                    acquista: null,
                    vendi: null,
                    ctvFinale: null
                }
            ]
        },
        {
            codice: 'OBI20',
            titolo: 'Investimento',
            posizioni: [
                {   
                    codiceProdotto: 'IT3248822',
                    descrizione: 'ENEL',
                    rischio: '9.12',
                    ctvIniziale: 13259.14,
                    acquista: null,
                    vendi: null,
                    ctvFinale: null
                },
                {  
                    codiceProdotto: 'NL123999',
                    descrizione: 'CED ATTIVA PIU',
                    rischio: '4.5',
                    ctvIniziale: 20091.62,
                    acquista: null,
                    vendi: null,
                    ctvFinale: null
                },
                {   
                    codiceProdotto: 'XYZ234922',
                    descrizione: 'ISP PROSPETTIVA',
                    rischio: '1.2',
                    ctvIniziale: 150091.4,
                    acquista: null,
                    vendi: null,
                    ctvFinale: null
                }
            ]
        }
    ]
}

export default {
    name: 'PercorsoManuale',
    components: {
        TabellaSimulazione
    },
    data () {
        return {
            input: input,
            totalePatrimonio: 0
        }
    }
}
</script>

                                                                                                                                                          