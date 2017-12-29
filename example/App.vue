<template>
  <md-app id="app" md-mode="fixed">
    <md-app-toolbar class="md-primary">
      <h3 class="md-title" style="flex: 1">
        <img width="32" height="32" src="./assets/logo.png"> Vue Google Map
      </h3>
      <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
        <md-icon>menu</md-icon>
      </md-button>
    </md-app-toolbar>

    <md-app-drawer :md-active.sync="menuVisible" md-right>

      <md-toolbar class="md-transparent" md-elevation="0">
        Vue Google Map
      </md-toolbar>

      <md-list>
        <md-list-item :to="route.path" v-for="route in routes" :key="route.name">
          <span class="md-list-item-text" v-text="route.label"></span>
        </md-list-item>
      </md-list>
    </md-app-drawer>

    <md-app-content>
      <router-view />
    </md-app-content>
  </md-app>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      menuVisible: false,
      routes: []
    }
  },
  created () {
    this.routes = this.$router.options.routes
  }
}
</script>

<style>

html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.md-content {
  position: relative;
}

.md-drawer {
  background-color: white;
}

#map {
  width: 100%;
  min-height: 800px;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}

.infowindow .infowindow-header {
  background-color: #333;
  color: white;
  padding: 15px;
}

.infowindow .infowindow-footer {
  background-color: #eee;
  padding: 10px;
}

a {
  color: #42b983;
}
</style>
