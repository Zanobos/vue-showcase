<template>
  <div id="indicatori-portafoglio">
    <h3>Indicatori Portafoglio Cliente</h3>
    <line-chart></line-chart>
  </div>
</template>

<script>
import LineChart from "@/components/charts/LineChart"

export default {
  name: 'IndicatoriPortafoglio',
  components: {
    LineChart
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
