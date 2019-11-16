import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

import VueGoogleMap from '../lib'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(VueGoogleMap, {
  load: {
    immediate: true,
    sync: false,
    apiKey: process.env.VUE_APP_GOOGLE_APIKEY,
    libraries: [
      'places',
      'visualization'
    ]
  },
  onReady(maps, plugin) {
    console.log('Google Map client:', maps)
    console.log('Vue Google Map plugin object:', plugin)
  }
})

new Vue({
  data() {
    return {
      defaultMapOptions: {
        zoom: 8,
        minZoom: 3,
        center: {
          lat: 41.89193,
          lng: 12.51133
        }
      }
    }
  },
  router,
  render: h => h(App)
}).$mount('#app')
