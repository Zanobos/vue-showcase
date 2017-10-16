<template>
  <div id="profilatura-cliente">
    <h3>Profilatura Cliente</h3>
    <b-container fluid>
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
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ProfilaturaCliente',
  data() {
    return {
      spesa: "-",
      riserva: "-",
      lungoPeriodo: "-"
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