<template>
    <div>
        <!-- Main table element -->
        <b-table hover show-empty
                :items="items"
                :fields="fields"
        >
            <!-- Waiting to resolve issue for bottom-row-->
            <template slot="top-row" slot-scope="data">
                <td v-for="field in data.fields" v-bind:key="field.label">
                <strong>{{showBottomField(field)}}</strong>
                </td>             
            </template>
        </b-table>
    </div>
</b-table>


</template>

<script>
import currency from "@/components/filters/currency"
import percentage from '@/components/filters/percentage'

export default {
    name: "TabellaSimulazione",
    props: ['items', 'title'],
    data() {
        return {
            fields: {
                descrizione:    { label: 'Descrizione', thClass:'table-header',  class:['text-left', 'ws-nowrap', 'table-border']},
                controvalore:   { label: 'CTV', formatter: 'formatCtv', thClass:'table-header', tdClass:['text-right'], class: ['ws-nowrap','table-border']},
                percentuale:    { label: '%', formatter: 'formatPerc', thClass:'table-header', tdClass:['text-right'], class: ['ws-nowrap','table-border']}
            }
        }
    },
    methods: {
        formatCtv(value, key, item) {
            return currency(value);
        },
        formatPerc(value,key,item) {
            return percentage(value);
        },
        showBottomField(item) {
            if(item.key == "descrizione")
            {
                return "TOTALE"
            }
            else if(item.key == "controvalore")
            {
                return currency(this.totaleControvalore);
            }
            else if(item.key == "percentuale")
            {
                return percentage(this.totalePercentuale);
            }
            return "";
        }
  },
    computed: {
        totaleControvalore: function() {
            return this.items.reduce(function(sum, item){
                return sum + item.controvalore
            },0);
        },
        totalePercentuale: function() {
            return this.items.reduce(function(sum, item){
                    return (sum + item.percentuale); 
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
