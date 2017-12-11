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
                        <!-- Using button-content slot -->
                        <template slot="button-content">
                            <em>User</em>
                        </template>
                        <b-dropdown-item v-for="patrimonio in patrimoni" :key="patrimonio.nsg" href="#" v-on:click="cambiaPatrimonio(patrimonio.nsg)">{{ patrimonio.nsg }}</b-dropdown-item>
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
        }
    },
    methods: {
        cambiaPatrimonio: function(nsgPatrimonioSelezionato) {
            this.$store.commit('cambiaPatrimonio',nsgPatrimonioSelezionato);
        }
    }
}
</script>
