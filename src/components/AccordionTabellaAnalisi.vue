<template>
    <div>
        <b-btn block v-b-toggle.collapse class="accordion">{{title}}</b-btn>

        <!-- element to collapse -->
        <b-collapse id="collapse" class="p-3">
            <tabella-analisi
                :items="items">
            </tabella-analisi>
        </b-collapse>
    </div>
  
</template>

<script>
import TabellaAnalisi from "@/components/TabellaAnalisi.vue";
export default {
    name: 'AccordionTabellaAnalisi',
    props: ['items','title'],
    components: {
        TabellaAnalisi
    }
}
</script>

<style scoped>
.accordion {
    background: #f3f3f3;
    color: black;
    border-radius: 0;
    border: 1px solid #ccc;
}
</style>
