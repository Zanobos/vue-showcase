import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        patrimoni: null,
        nsgPatrimonioSelezionato: null
    },
    mutations: {
        fetchPatrimoni(state, payload) {
            state.patrimoni = payload;
            //di default seleziono il primo
            state.nsgPatrimonioSelezionato = state.patrimoni[0].nsg;
        },
        cambiaPatrimonio(state, payload){
            state.nsgPatrimonioSelezionato = payload;
        }
    },
    getters: {
        patrimonioSelezionato: state => {
            if(!state.patrimoni) return null;
            return state.patrimoni.find(patrimonio => patrimonio.nsg === state.nsgPatrimonioSelezionato)
        }
    },
    //qui sto creando una proprieta col nome actions e col valore di actions
    actions
})