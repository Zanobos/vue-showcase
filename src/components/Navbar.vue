<template>
  <div id="navbar">
    <nav class="navbar navbar-toggleable-md navbar-light bg-success navbar-inverse">
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">Vue (ab)use router</a>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                  <li class="nav-item" v-for="route in routes" :key="route.name">
                      <router-link :to="route" class="nav-link" active-class="active">
                          {{ route.name }}
                      </router-link>
                  </li>
              </ul>
          </div>
      </nav>
	</div>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
        routes: function () {
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
