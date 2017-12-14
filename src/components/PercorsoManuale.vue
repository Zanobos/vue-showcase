<template>
    <div>
        <tabella-simulazione 
            v-for="gruppo in patrimonioSelezionato.posizioniSimulazioneManuale" 
            :key="gruppo.codice"
            :items="gruppo.posizioni" 
            :title="gruppo.titolo">  
        </tabella-simulazione>

        <div><strong>Totale Patrimonio </strong>{{totalePatrimonio}}</div>
    </div>
</template>

<script>
import TabellaSimulazione from '@/components/TabellaSimulazione.vue'

export default {
    name: 'PercorsoManuale',
    components: {
        TabellaSimulazione
    },
    computed: {
        patrimonioSelezionato: function() {
            return this.$store.getters.patrimonioSelezionato;
        },
        totalePatrimonio: function() {
            return 0;
        }
    }
}
</script>

                                                                                                                                                          