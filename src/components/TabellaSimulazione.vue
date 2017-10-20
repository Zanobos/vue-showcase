<template>
    <div>
        <!-- title -->
        <h2>{{title}}</h2>
        <!-- Main table element -->
        <b-table bordered hover show-empty
                :items="items"
                :fields="fields"
                :filter="filter"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
        >
            <!-- Modifying input cells-->
            <template slot="acquista" slot-scope="row">
                <b-form-input v-model="row.item.acquista"></b-form-input>
            </template>

            <template slot="vendi" slot-scope="row">
                <b-form-input v-model="row.item.vendi"></b-form-input>
            </template>

            <!-- Waiting to resolve issue for bottom-row-->
            <template slot="top-row" slot-scope="data">
                <td v-for="field in data.fields" v-bind:key="field.label">
                <strong>{{showBottomField(field)}}</strong>
                </td>             
            </template>
        </b-table>

        <p>
            Sort By: {{ sortBy || 'n/a' }}, Direction: {{ sortDesc ? 'descending' : 'ascending' }}
        </p>
    </div>
</b-table>


</template>

<script>
const items = [
    {   codiceProdotto: 'IT3248822',
        descrizione: 'ENEL',
        rischio: '9.12',
        ctvIniziale: 13259.14,
        acquista: null,
        vendi: null,
        ctvFinale: null
    },
    {   codiceProdotto: 'NL123999',
        descrizione: 'CED ATTIVA PIU',
        rischio: '4.5',
        ctvIniziale: 20091.62,
        acquista: null,
        vendi: null,
        ctvFinale: null
    },
    {   codiceProdotto: 'XYZ234922',
        descrizione: 'ISP PROSPETTIVA',
        rischio: '1.2',
        ctvIniziale: 150091.4,
        acquista: null,
        vendi: null,
        ctvFinale: null
    }
];

export default {
  name: "TabellaSimulazione",
  data() {
      return {
        items: items,
        title: '',
        fields: {
            codiceProdotto:   { label: 'Codice Prodotto', sortable: true },
            descrizione:      { label: 'Descrizione', sortable: true },
            rischio:          { label: 'Rischio', sortable: true},
            ctvIniziale:      { label: 'CTV Iniziale', sortable: true },
            acquista:         { label: 'Acquista' },
            vendi:            { label: 'Vendi' },
            ctvFinale:        { label: 'CTV Finale', formatter: 'calcolaCtvFinale'}
        },
        sortBy: null,
        sortDesc: false,
        filter: null
        //https://bootstrap-vue.js.org/docs/components/table per vedere altri metodi utili, anche come lanciare un alert
    }
  },
  methods: {
        calcolaCtvFinale(value,key,item) {
            item.ctvFinale = (item.ctvIniziale + (Number(item.acquista) || 0) - (Number(item.vendi) || 0 ));
            return item.ctvFinale.toFixed(2);
        },
        showBottomField(item) {
            if(item.key == "codiceProdotto")
            {
                return "TOTALE"
            }
            else if(item.key == "ctvIniziale")
            {
                return this.totaleCtvIniziale.toFixed(2);
            }
            else if(item.key == "ctvFinale")
            {
                return this.totaleCtvFinale.toFixed(2);
            }
            return "";
        }
  },
  computed: {
    totaleCtvIniziale: function() {
        return this.items.reduce(function(sum, item){
            return sum + item.ctvIniziale
        },0);
    },
    totaleCtvFinale: function() {
        return this.items.reduce(function(sum, item){
                return (sum + (item.ctvFinale || 0)); 
        },0);
    }
  }
}
</script>

<style scoped>
h2 {
  font-weight: normal;
}
thead{
    background: #f3f3f3;
}
</style>
