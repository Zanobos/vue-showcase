<template>
    <div>
        <h1>{{ msg }}</h1>
        <tabella-simulazione 
                :items="posizioniRiserva" 
                :title="titleRiserva">         
        </tabella-simulazione>

        <tabella-simulazione 
                :items="posizioniInvestimento" 
                :title="titleInvestimento">         
        </tabella-simulazione>
    </div>
</template>

<script>
import TabellaSimulazione from '@/components/TabellaSimulazione.vue'

const posizioniRiserva = [
    {   codiceProdotto: '-',
        descrizione: 'CONTO CORRENTE',
        rischio: '-',
        ctvIniziale: 25000.45,
        acquista: null,
        vendi: null,
        ctvFinale: null
    },
    {   codiceProdotto: 'IT6892341',
        descrizione: 'BTP 12/56 M-ITA',
        rischio: '2.5',
        ctvIniziale: 4003.23,
        acquista: null,
        vendi: null,
        ctvFinale: null
    }
];

const posizioniInvestimento = [
    {   codiceProdotto: 'IT3248822',
        descrizione: 'ENEL',
        rischio: '9.12',
        ctvIniziale: 13259.14,
        acquista: null,
        vendi: null,
        ctvFinale: null
    },
    {   codiceProdotto: 'NL123999',
        descrizione: 'CED ATTIVA PIU',
        rischio: '4.5',
        ctvIniziale: 20091.62,
        acquista: null,
        vendi: null,
        ctvFinale: null
    },
    {   codiceProdotto: 'XYZ234922',
        descrizione: 'ISP PROSPETTIVA',
        rischio: '1.2',
        ctvIniziale: 150091.4,
        acquista: null,
        vendi: null,
        ctvFinale: null
    }
];

export default {
    name: 'SimulazioneManuale',
    components: {
        TabellaSimulazione
    },
    data () {
        return {
            posizioniRiserva: posizioniRiserva,
            posizioniInvestimento: posizioniInvestimento,
            titleInvestimento: "INVESTIMENTO",
            titleRiserva: "Riserva",
            msg: 'Questa è la simulazione manuale'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
    font-weight: normal;
}
</style>
                                                                                                                                                          