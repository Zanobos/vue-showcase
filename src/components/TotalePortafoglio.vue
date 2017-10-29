<template>
<div>

    <accordion-tabella-analisi
         :items="posizioniMonetario"
         :title="titleM">
     </accordion-tabella-analisi>

    <accordion-tabella-analisi
         :items="posizioniObligazionario"
         :title="titleO">
     </accordion-tabella-analisi>

     <accordion-tabella-analisi
         :items="posizioniAzionario"
         :title="titleAzionario">
     </accordion-tabella-analisi>

     <accordion-tabella-analisi
         :items="posizioniAltro"
         :title="titleAltro">
     </accordion-tabella-analisi>
    

</div>
</template>


<script>
import AccordionTabellaAnalisi from '@/components/AccordionTabellaAnalisi.vue'

const posizioniObligazionario = [
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

const posizioniAzionario = [
    {
        descrizione: 'ITALIA',
        controvalore: 55201.63,
        percentuale: 26.57
    },
    {
        descrizione: 'NORD AMERICA',
        controvalore: 5000.0,
        percentuale: 5.0
    },
    {
        descrizione: 'EUROPA',
        controvalore: 30000.0,
        percentuale: 30.0
    },
    {
        descrizione: 'GIAPPONE',
        controvalore: 809.63,
        percentuale: 0.39
    },
    {
        descrizione: 'PACIFICO EX GIAPPONE',
        controvalore: 173.42,
        percentuale: 0.08
    },
    {
        descrizione: 'EMERGENTI',
        controvalore: 23.37,
        percentuale: 0.1
    }

];

const posizioniAltro = [
    {
        descrizione: 'CERTIFICATES',
        controvalore: 45000.0,
        percentuale: 45.0
    }
];

const posizioniMonetario = [
    {
        descrizione: 'LIQUIDITA',
        percentuale: 14.7,
        percentuale: 17.0
    },
];

export default {
     name: 'TotalePortafoglio',
    components: {
        AccordionTabellaAnalisi
    },
    data () {
        return {
            posizioniMonetario: posizioniMonetario,
            titleM: 'Monetario',
            posizioniObligazionario: posizioniObligazionario,
            titleO:'Obbligazionario',
            posizioniAzionario: posizioniAzionario,
            titleAzionario: 'Azionario',
            posizioniAltro: posizioniAltro,
            titleAltro:'Altro'
        }
    },

}
</script>

<style>

</style>
