<template>
    <div id="analisi"> 
        <doughnut-chart :data="donutAnalisiPatrimonio" class="donut" type="ring"></doughnut-chart>
    </div>
</template>

<script>
import DoughnutChart from "@/components/charts/DoughnutChart"

export default {
    name: 'DonutAnalisiPatrimonio',
    components: {
        DoughnutChart
    },
    props: ['donutAnalisiPatrimonio']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.donut {
  font-weight: normal;
  margin: 30px;
  border-radius: 10px;
  
}
</style>
