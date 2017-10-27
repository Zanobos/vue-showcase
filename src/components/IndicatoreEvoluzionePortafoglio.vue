<template>
    <div id="evoluzione">
        <h3>Indicatore Evoluzione Portafoglio</h3>
        <line-chart :data="evoluzionePortafoglio"></line-chart>
    </div>
</template>

<script>
import LineChart from "@/components/charts/LineChart"

export default {
    name: 'IndicatoreEvoluzionePortafoglio',
    components: {
        LineChart
    },
    props: ['evoluzionePortafoglio']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
