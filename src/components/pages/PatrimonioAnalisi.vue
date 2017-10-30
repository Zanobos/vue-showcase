<template>
<div>
   <h1>{{ msg }}</h1>
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
export default {
    name: 'PatrimonioAnalisi',
    data () {
        return {
            msg: 'Analisi patrimonio'             
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
                if(route.label == 'Analisi Patrimonio') {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
    font-weight: normal;
}
</style>
