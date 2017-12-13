<template>
    <div>
        <indicatore-evoluzione-portafoglio :evoluzionePortafoglio="evoluzionePortafoglio" class="mt-3"/>
        <profilatura-cliente :cliente="patrimonioSelezionato" class="mt-3"/>
    </div>
</template>

<script>
import IndicatoreEvoluzionePortafoglio from "@/components/IndicatoreEvoluzionePortafoglio.vue";
import ProfilaturaCliente from "@/components/ProfilaturaCliente.vue";

const evoluzionePortafoglio= {
    //Data to be represented on x-axis
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], 
    datasets: [
        {
            label: 'Evoluzione Portafoglio',
            backgroundColor: '#f3f3f3',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            //Data to be represented on y-axis
            data: [14000, 13020, 15030, 16050, 17790, 18110, 17920, 16440, 18950, 19270, 20190, 21100]
        }
    ]
};

export default {
    name: 'HomePage',
    components: {
        IndicatoreEvoluzionePortafoglio,
        ProfilaturaCliente
    },
    data () {
        return {
            evoluzionePortafoglio: evoluzionePortafoglio
        }
    },
    computed: {
        patrimonioSelezionato: function() {
            return this.$store.getters.patrimonioSelezionato;
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
