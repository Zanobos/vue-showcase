<template>
  <div id="indicatori-portafoglio">
    <h3>Indicatori Portafoglio Cliente</h3>
    <line-chart :data="datacollection"></line-chart>
  </div>
</template>

<script>
import LineChart from "@/components/charts/LineChart"

export default {
  name: 'IndicatoriPortafoglio',
  components: {
    LineChart
  },
  data() {
    return {
      datacollection: {
        //Data to be represented on x-axis
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], 
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f3f3f3',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            //Data to be represented on y-axis
            data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
          }
        ]
      }
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
