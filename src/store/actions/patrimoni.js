//Esporto la funzione che mi permette di recuperare i patrimoni

//Destrutturo il parametro tramite le parentesi graffe chiedendo solo la property commit
export function fetchPatrimoni({commit}) {
    //Qui ci dovrebbe essere la chiamata REST
    const patrimoni = [
        {
            anagrafica: "Mario Rossi e Simone Verdi",
            nsg: "38659947224",
            livelloEsperienza: 'ESPERIENZA MEDIO BASSA',
            spesa: 1500,
            riserva: 15000,
            lungoPeriodo: 20000,
            rischio: 'moderato',
            dataScadenza: '11.05.2016',
            cointestatari: [
                {
                    nsg: '11129994555',
                    anagrafica: 'Mario Rossi',
                    cf: 'RSSMRA85B01L378W'
                },
                {
                    nsg: '66660035555',
                    anagrafica: 'Simone Verdi',
                    cf: 'VRDSMN78C12L378W'
                }
            ]
        },
        {
            anagrafica: "Marco Blu",
            nsg: "1888922381155",
            livelloEsperienza: 'ESPERIENZA ALTA',
            spesa: 2000,
            riserva: 4000,
            lungoPeriodo: 60000,
            rischio: 'alto',
            dataScadenza: '23.11.2018',
            cointestatari: [
                {
                    nsg: '1888922381155',
                    anagrafica: 'Marco Blu',
                    cf: 'BLUMRC82L23A944W'
                }
            ]
        }
    ];
//    setTimeout(() => {
//        commit('fetchPatrimoni',patrimoni)
//    }, 0)
    commit('fetchPatrimoni',patrimoni)
}