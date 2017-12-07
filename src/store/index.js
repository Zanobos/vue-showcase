import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        patrimoni: null,
        nsgSelezionato: "38659947224"
    },
    mutations: {
        fetchPatrimoni(state, payload) {
            state.patrimoni = payload;
        },
        cambiaPatrimonio(state, payload){
            state.nsgSelezionato = payload;
        }
    },
    getters: {
        patrimonioSelezionato: state => {
            if(!state.patrimoni) return null;
            return state.patrimoni.find(patrimonio => patrimonio.nsg === state.nsgSelezionato)
        }
    },
    //qui sto creando una proprieta col nome actions e col valore di actions
    actions
})