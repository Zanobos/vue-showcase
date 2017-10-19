<template>
  <div>
    <h1>{{ msg }}</h1>
    <indicatori-portafoglio/>
    <profilatura-cliente/>
  </div>
</template>

<script>
import IndicatoriPortafoglio from "@/components/IndicatoriPortafoglio.vue";
import ProfilaturaCliente from "@/components/ProfilaturaCliente.vue";

export default {
  name: 'HomePage',
  components: {
    IndicatoriPortafoglio,
    ProfilaturaCliente
  },
  data () {
    return {
      msg: 'Questa è l\'home page'
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
