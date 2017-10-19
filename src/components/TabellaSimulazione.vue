<template>
    <div>
        <!-- Main table element -->
        <b-table bordered hover show-empty
                :items="items"
                :fields="fields"
                :filter="filter"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
        >
            <template slot="acquista" slot-scope="row">
                <b-form-input v-model="row.item.acquista"></b-form-input>
            </template>

            <template slot="vendi" slot-scope="row">
                <b-form-input v-model="row.item.vendi"></b-form-input>
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
        ctvIniziale: '13259.14',
        acquista: '',
        vendi: '',
        ctvFinale: ''
    },
    {   codiceProdotto: 'NL123999',
        descrizione: 'CED ATTIVA PIU',
        rischio: '4.5',
        ctvIniziale: '20091.4',
        acquista: '',
        vendi: '',
        ctvFinale: ''
    }
];

export default {
  name: "TabellaSimulazione",
  data() {
      return {
        items: items,
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
          return Number(item.ctvIniziale) + Number(item.acquista) - Number(item.vendi);
      }
  }
}
</script>
