<template>
  <div>
    <h1>{{ msg }}</h1>
    <tabella-simulazione></tabella-simulazione>
  </div>
</template>

<script>
import TabellaSimulazione from '@/components/TabellaSimulazione.vue'

export default {
  name: 'SimulazioneManuale',
  components: {
    TabellaSimulazione
  },
  data () {
    return {
      msg: 'Questa è la simulazione manuale'
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
