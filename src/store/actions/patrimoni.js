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
            ],
            evoluzionePortafoglio: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], 
                datasets: [
                    {
                        label: 'Evoluzione Portafoglio',
                        backgroundColor: '#f3f3f3',
                        pointBackgroundColor: 'white',
                        borderWidth: 1,
                        pointBorderColor: '#249EBF',
                        //Data to be represented on y-axis
                        data: [14000, 13020, 15030, 16050, 17790, 18110, 17920, 16440, 18950, 19270, 20190, 21100]
                    }
                ]
            }
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
            ],
            evoluzionePortafoglio: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], 
                datasets: [
                    {
                        label: 'Evoluzione Portafoglio',
                        backgroundColor: '#f3f3f3',
                        pointBackgroundColor: 'white',
                        borderWidth: 1,
                        pointBorderColor: '#249EBF',
                        //Data to be represented on y-axis
                        data: [8000, 9520, 15030, 6050, 17790, 21410, 19920, 16440, 16950, 15870, 20190, 20900]
                    }
                ]
            }
        }
    ];
//    setTimeout(() => {
//        commit('fetchPatrimoni',patrimoni)
//    }, 0)
    commit('fetchPatrimoni', patrimoni)
}

export function cambiaPatrimonio({commit}, nsgSelezionato) {
    commit('cambiaPatrimonio', nsgSelezionato)
}