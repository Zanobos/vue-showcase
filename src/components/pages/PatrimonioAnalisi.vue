<template>
    <div>
        <h1>{{ msg }}</h1>
        <tabella-analisi
            :items="posizioni">
        </tabella-analisi>

    </div>
</template>

<script>
import TabellaAnalisi from '@/components/TabellaAnalisi.vue'

const posizioni = [
    {
        descrizione: 'GOVERNATIVO ITALIA',
        controvalore: 45000.0,
        percentuale: 45.0
    },
    {
        descrizione: 'CORPORATE INVESTMENT GRADE',
        controvalore: 5000.0,
        percentuale: 5.0
    },
    {
        descrizione: 'CORPORATE HIGH YIELD',
        controvalore: 30000.0,
        percentuale: 30.0
    },
    {
        descrizione: 'GOVERNATIVO USA',
        controvalore: 20000.0,
        percentuale: 20.0
    }

];
export default {
    name: 'PatrimonioAnalisi',
    components: {
        TabellaAnalisi
    },
    data () {
        return {
            msg: 'Questa è la pagina di analisi patrimonio',
            posizioni: posizioni
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
