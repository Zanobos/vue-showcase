<template>
    <div>
        <indicatore-evoluzione-portafoglio :evoluzionePortafoglio="patrimonioSelezionato.evoluzionePortafoglio" class="mt-3"/>

        <b-nav justified pills class="mt-3" id="nav-simulazione">
            <b-nav-item 
                v-for="subRoute in subRoutes" :key="subRoute.name" :to="subRoute" 
            >
            {{ subRoute.label }}
            </b-nav-item>
            
        </b-nav>

        <router-view class="mt-3"/>
        
    </div>
</template>

<script>
import IndicatoreEvoluzionePortafoglio from "@/components/IndicatoreEvoluzionePortafoglio.vue";

export default {
    name: 'Simulazione',
    components: {
        IndicatoreEvoluzionePortafoglio
    },
    computed: {
        subRoutes: function() {
            var subRoutes = []
            for (var i in this.$router.options.routes) {

                if (!this.$router.options.routes.hasOwnProperty(i)) {
                    continue
                }
                var route = this.$router.options.routes[i]
                if(route.label == 'Simulazione') {
                    for(var j in route.children){
                        var subRoute = route.children[j]
                        if (subRoute.hasOwnProperty('label')) {
                            subRoutes.push(subRoute)
                        }
                    }
                }
            }
            return subRoutes
        },
        patrimonioSelezionato: function() {
            return this.$store.getters.patrimonioSelezionato;
        }
    }
}
</script>

<style>
#nav-simulazione {
    font-size: x-large;
}
</style>
