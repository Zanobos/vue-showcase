<template>
    <div>
        <h1>{{ msg }}</h1>
        <indicatori-portafoglio/>
        <profilatura-cliente :cliente="cliente"/>
    </div>
</template>

<script>
import IndicatoriPortafoglio from "@/components/IndicatoriPortafoglio.vue";
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

export default {
    name: 'HomePage',
    components: {
        IndicatoriPortafoglio,
        ProfilaturaCliente
    },
    data () {
        return {
            msg: 'Questa è l\'home page',
            cliente: cliente
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
