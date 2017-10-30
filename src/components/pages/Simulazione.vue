<template>
    <div>
        <indicatore-evoluzione-portafoglio :evoluzionePortafoglio="evoluzionePortafoglio" class="mt-3"/>

        <b-nav justified pills class="mt-3">
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

const evoluzionePortafoglio= {
    //Data to be represented on x-axis
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
};

export default {
    name: 'Simulazione',
    components: {
        IndicatoreEvoluzionePortafoglio
    },
    data () {
        return {
            evoluzionePortafoglio: evoluzionePortafoglio
        }
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
        }
    }
}
</script>
