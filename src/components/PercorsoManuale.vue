<template>
    <div>
        <tabella-simulazione 
            v-for="gruppo in patrimonioSelezionato.posizioniSimulazioneManuale" 
            :key="gruppo.codice"
            :items="gruppo.posizioni" 
            :title="gruppo.titolo">  
        </tabella-simulazione>

        <div class="mb-4" ><strong>Totale Patrimonio {{totalePatrimonioSelezionatoSimulato}} </strong> </div>
    </div>
</template>

<script>
import TabellaSimulazione from '@/components/TabellaSimulazione.vue'
import currency from "@/components/filters/currency"

export default {
    name: 'PercorsoManuale',
    components: {
        TabellaSimulazione
    },
    computed: {
        patrimonioSelezionato: function() {
            return this.$store.getters.patrimonioSelezionato;
        },
        totalePatrimonioSelezionatoSimulato: function() {
            return currency(this.$store.getters.totalePatrimonioSelezionatoSimulato);
        }
    }
}
</script>

                                                                                                                                                          