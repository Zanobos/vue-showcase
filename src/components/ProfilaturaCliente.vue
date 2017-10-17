<template>
  <div id="profilatura-cliente">
    <h3>Profilatura Cliente</h3>
    <b-container fluid>
      <b-row>
        <b-col>
          <img src="../assets/dett_customer.png"/>
          <div>{{anagrafica}}</div>
          <div><b>NSG</b> {{nsg}}</div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div>Soglia di spesa</div>
          <div class="box">{{spesa}}</div>
        </b-col>
        <b-col>
          <div>Obiettivo di riserva</div>
          <div class="box">{{riserva}}</div>
        </b-col>
        <b-col>
          <div>Importo massimo di lungo periodo</div>
          <div class="box">{{lungoPeriodo}}</div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <img src="../assets/man_body_circle.png"/>
          <div>Propensione al rischio</div>
          <div>{{rischio}}</div>
        </b-col>
        <b-col>
          <img src="../assets/calendar.png"/>
          <div>Data di scadenza questionario</div>
          <div>{{dataScadenza}}</div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ProfilaturaCliente',
  data() {
    return {
      anagrafica: "-",
      nsg: "-",
      spesa: "-",
      riserva: "-",
      lungoPeriodo: "-",
      rischio: "-",
      dataScadenza: "-"
    }
  }
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