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
        },
        totalePatrimonioSelezionatoSimulato: state => {
            if(!state.patrimoni) return null;
            const patrimonioSelezionato = state.patrimoni.find(patrimonio => patrimonio.nsg === state.nsgPatrimonioSelezionato);
            return patrimonioSelezionato.posizioniSimulazioneManuale.reduce( (totalePatrimonio ,gruppo) => {
                return totalePatrimonio + gruppo.posizioni.reduce((totaleGruppo, posizione) => {
                    return totaleGruppo + posizione.ctvIniziale + (Number(posizione.acquista) || 0) - (Number(posizione.vendi) || 0 );
                }, 0)
            }, 0)
        }
    },
    //qui sto creando una proprieta col nome actions e col valore di actions
    actions
})