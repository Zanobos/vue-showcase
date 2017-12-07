<template>
    <div>
        <!-- title -->
        <h2>{{title}}</h2>
        <!-- Main table element -->
        <b-table hover show-empty
                :items="items"
                :fields="fields"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
        >
            <!-- Modifying input cells-->
            <template slot="acquista" slot-scope="row">
                <b-form-input v-model="row.item.acquista" class="table-input"></b-form-input>
            </template>

            <template slot="vendi" slot-scope="row">
                <b-form-input v-model="row.item.vendi" class="table-input"></b-form-input>
            </template>

            <!-- Waiting to resolve issue for bottom-row-->
            <template slot="bottom-row" slot-scope="data">
                <td v-for="field in data.fields" v-bind:key="field.label">
                <strong>{{showBottomField(field)}}</strong>
                </td>             
            </template>
        </b-table>

        <p>
            Sort By: {{ sortBy || 'n/a' }}, Direction: {{ sortDesc ? 'descending' : 'ascending' }}
        </p>
    </div>

</template>

<script>
import currency from "@/components/filters/currency"

export default {
    name: "TabellaSimulazione",
    props: ['items', 'title'],
    data() {
        return {
            fields: {
                codiceProdotto:   { label: 'Codice Prodotto', sortable: true, thClass:'table-header', class:['text-left', 'ws-nowrap', 'table-border'] },
                descrizione:      { label: 'Descrizione', sortable: true, thClass:'table-header',  class:['text-left', 'ws-nowrap', 'table-border']},
                rischio:          { label: 'Rischio', sortable: true, thClass:'table-header', class: ['table-border']},
                ctvIniziale:      { label: 'CTV Iniziale', sortable: true, formatter: 'formatCtv', thClass:'table-header', tdClass:['text-right'], class: ['ws-nowrap','table-border']},
                acquista:         { label: 'Acquista', thClass:'table-header', class: ['table-border'] },
                vendi:            { label: 'Vendi', thClass:'table-header', class: ['table-border'] },
                ctvFinale:        { label: 'CTV Finale', formatter: 'calcolaCtvFinale', thClass:'table-header', tdClass:['text-right'], class: ['ws-nowrap','table-border']}
            },
            sortBy: null,
            sortDesc: false
            //https://bootstrap-vue.js.org/docs/components/table per vedere altri metodi utili, anche come lanciare un alert
        }
    },
    methods: {
        formatCtv(value, key, item) {
            return currency(value);
        },
        calcolaCtvFinale(value,key,item) {
            item.ctvFinale = (item.ctvIniziale + (Number(item.acquista) || 0) - (Number(item.vendi) || 0 ));
            return currency(item.ctvFinale);
        },
        showBottomField(item) {
            if(item.key == "codiceProdotto")
            {
                return "TOTALE"
            }
            else if(item.key == "ctvIniziale")
            {
                return currency(this.totaleCtvIniziale);
            }
            else if(item.key == "ctvFinale")
            {
                return currency(this.totaleCtvFinale);
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

<style>
.table-header {
    background: #f3f3f3;
}
.table-input {
    border-radius: 0;
}
.table-border {
    border: 1px solid #ccc;
}
.ws-nowrap {
    white-space: nowrap;
}
</style>
