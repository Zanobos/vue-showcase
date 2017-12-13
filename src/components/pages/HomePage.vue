<template>
    <div>
        <indicatore-evoluzione-portafoglio :evoluzionePortafoglio="patrimonioSelezionato.evoluzionePortafoglio" class="mt-3"/>
        <profilatura-cliente :cliente="patrimonioSelezionato" class="mt-3"/>
    </div>
</template>

<script>
import IndicatoreEvoluzionePortafoglio from "@/components/IndicatoreEvoluzionePortafoglio.vue";
import ProfilaturaCliente from "@/components/ProfilaturaCliente.vue";

export default {
    name: 'HomePage',
    components: {
        IndicatoreEvoluzionePortafoglio,
        ProfilaturaCliente
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
