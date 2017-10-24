<template>
    <div id="navbar">
        <b-navbar toggleable="md" type="dark" variant="info">

            <b-nav-toggle target="nav_collapse"></b-nav-toggle>

            <b-navbar-brand>NavBar</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">

                <b-nav is-nav-bar>
                    <b-nav-item v-for="route in routes" :key="route.name" :to="route">{{ route.name }}</b-nav-item>
                </b-nav>

                <!-- Right aligned nav items -->
                <b-nav is-nav-bar class="ml-auto">
                    
                    <b-nav-item-dropdown text="Lang" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                        <!-- Using button-content slot -->
                        <template slot="button-content">
                            <em>User</em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Signout</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-nav>
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
                if (route.hasOwnProperty('name')) {
                    routes.push(route)
                }
            }
            return routes
        }
    }
}
</script>
