<template>
    <div id="navbar">
        <b-navbar toggleable="md" type="dark" variant="info">

            <b-nav-toggle target="nav_collapse"></b-nav-toggle>

            <b-navbar-brand>Momento Volvente</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">

                <b-navbar-nav>
                    <b-nav-item v-for="route in routes" :key="route.name" :to="route">{{ route.label }}</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">

                    <b-nav-item-dropdown right>
                        <template slot="button-content">
                            {{ patrimonioSelezionato.anagrafica }}
                            <!-- <div>NSG: {{ patrimonioSelezionato.nsg }}</div> -->
                        </template>
                        <b-dropdown-item 
                            v-for="patrimonio in patrimoni" :key="patrimonio.nsg" href="#" 
                            v-on:click="cambiaPatrimonio(patrimonio.nsg)" v-bind:active="isPatrimonioSelezionato(patrimonio.nsg)">
                            <div>{{ patrimonio.anagrafica }}</div>
                            <div>NSG: {{ patrimonio.nsg }}</div>
                        </b-dropdown-item>
                    </b-nav-item-dropdown>

                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>


<script>
export default {
    name: 'Navbar',
    computed: {
        routes: function() {
            var routes = []
            for (var i in this.$router.options.routes) {
                if (!this.$router.options.routes.hasOwnProperty(i)) {
                    continue
                }
                var route = this.$router.options.routes[i]
                if (route.hasOwnProperty('label')) {
                    routes.push(route)
                }
            }
            return routes
        },
        patrimoni: function() {
            return this.$store.state.patrimoni;
        },
        patrimonioSelezionato: function() {
            return this.$store.getters.patrimonioSelezionato;
        } 
    },
    methods: {
        cambiaPatrimonio: function(nsgPatrimonioSelezionato) {
            this.$store.commit('cambiaPatrimonio',nsgPatrimonioSelezionato);
        },
        isPatrimonioSelezionato: function(nsgPatrimonio) {
            return nsgPatrimonio === this.patrimonioSelezionato.nsg ? true : false;
        }
    }
}
</script>
