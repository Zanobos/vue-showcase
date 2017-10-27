<template>
    <div>
        <indicatore-evoluzione-portafoglio :evoluzionePortafoglio="evoluzionePortafoglio" class="mt-3"/>
        <profilatura-cliente :cliente="cliente" class="mt-3"/>
    </div>
</template>

<script>
import IndicatoreEvoluzionePortafoglio from "@/components/IndicatoreEvoluzionePortafoglio.vue";
import ProfilaturaCliente from "@/components/ProfilaturaCliente.vue";

const cliente= {
    anagrafica: "Mario Rossi e Simone Verdi",
    nsg: "38659947224",
    livelloEsperienza: 'ESPERIENZA MEDIO BASSA',
    spesa: 1500,
    riserva: 15000,
    lungoPeriodo: 20000,
    rischio: 'moderato',
    dataScadenza: '11.05.2016',
    cointestatari: [
        {
            nsg: '11129994555',
            anagrafica: 'Mario Rossi',
            cf: 'RSSMRA85B01L378W'
        },
        {
            nsg: '66660035555',
            anagrafica: 'Simone Verdi',
            cf: 'VRDSMN78C12L378W'
        }
    ]
};

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
            cliente: cliente,
            evoluzionePortafoglio: evoluzionePortafoglio
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
