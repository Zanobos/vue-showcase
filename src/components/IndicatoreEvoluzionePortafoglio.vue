<template>
    <div id="evoluzione">
        <h3>Indicatore Evoluzione Portafoglio</h3>
        <line-chart :chart-data="evoluzionePortafoglioData"></line-chart>
    </div>
</template>

<script>
import LineChart from "@/components/charts/LineChart"

export default {
    name: 'IndicatoreEvoluzionePortafoglio',
    components: {
        LineChart
    },
    props: ['evoluzionePortafoglio'],
    computed: {
        evoluzionePortafoglioData: function() {
            //praticamente per far si' che il grafico sia reactive, sono costretto a fare manualmente (tramite set e assign) una deep copy
            //dei dati, perche altrimenti si vede che qualche puntatore va a sovrascrivere i vecchi dati
            const data = Object.assign({});
            this.$set(data,"labels",this.evoluzionePortafoglio.labels);
            this.$set(data,"datasets", this.evoluzionePortafoglio.datasets.map(a => Object.assign({}, a)));
            console.log(data)
            return data;
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
