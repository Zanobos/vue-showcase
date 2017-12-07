<template>
    <div id="profilatura-cliente">
        <b-container fluid>
            <b-row class="mb-3">
                <b-col>
                    <h3>Profilo Cliente</h3>
                </b-col>
            </b-row>
            <b-row class="mb-3">
                <b-col>
                    <b-carousel 
                        id="carousel"
                        controls
                        indicators
                        img-width="50px"
                        img-height="20px"
                        :interval="0"
                        background="#ababab"
                    >

                      <b-carousel-slide v-for="cointestatario in cliente.cointestatari" 
                        :key="cointestatario.nsg" 
                        img-blank>
                            <div class="mb-5 mt-4" slot="img">
                                <div>
                                    {{cointestatario.anagrafica}}
                                </div>
                                <div>
                                    <strong>CF </strong>{{cointestatario.cf}}
                                </div>
                            </div>
                        </b-carousel-slide>

                    </b-carousel>
                </b-col>
            </b-row>
            <b-row class="mb-3">
                <b-col>
                    <div><strong>Livello di Conoscenza ed Esperienza</strong></div>
                    <div>{{cliente.livelloEsperienza}}</div>
                </b-col>
            </b-row>
            <b-row class="mb-3">
                <b-col>
                    <img src="../assets/dett_customer.png"/>
                    <div>{{cliente.anagrafica}}</div>
                    <div><strong>NSG</strong> {{cliente.nsg}}</div>
                </b-col>
            </b-row>
            <b-row class="mb-3">
                <b-col>
                    <div>Soglia di spesa</div>
                    <div class="box">{{cliente.spesa | currency }}</div>
                </b-col>
                <b-col>
                    <div>Obiettivo di riserva</div>
                    <div class="box">{{cliente.riserva | currency }}</div>
                </b-col>
                <b-col>
                    <div>Importo massimo di lungo periodo</div>
                    <div class="box">{{cliente.lungoPeriodo | currency }}</div>
                </b-col>
            </b-row>
            <b-row class="mb-3">
                <b-col>
                    <img src="../assets/man_body_circle.png"/>
                    <div>Propensione al rischio</div>
                    <div><strong>{{cliente.rischio.toUpperCase()}}</strong></div>
                </b-col>
                <b-col>
                    <img src="../assets/calendar.png"/>
                    <div>Data di scadenza questionario</div>
                    <div><strong>{{cliente.dataScadenza}}</strong></div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'ProfilaturaCliente',
    props: ['cliente'],
    data() {
        return {
            slide: 0
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#carousel * {
    outline: none;
}

.box {
    background: #f3f3f3;
    border: 1px solid #ccc;
    margin: 14px auto;
    padding: 14px;
    width: 75%;
    white-space: nowrap;
}
</style>