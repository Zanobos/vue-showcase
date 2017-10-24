<template>
  <div id="profilatura-cliente">
    <b-container fluid>
      <b-row>
        <b-col>
          <h3>Profilo Cliente</h3>
        </b-col>
      </b-row>
      <b-row class="mb-3">
        <b-col>
          TODO ACCORDION
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
  props: ['cliente']
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  background: #f3f3f3;
  border: 1px solid #ccc;
  margin: 14px auto;
  padding: 14px;
  width: 75%;
}
</style>