import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

import App from './App.vue'

import router from './router'
import VueGoogleMap from '../src/index'

Vue.use(VueMaterial)

Vue.use(VueGoogleMap, {
  load: {
    apiKey: process.env.GOOGLE_APIKEY,
    libraries: ['places'],
  },
})

new Vue({
  el: '#app',
  data () {
    return {
      defaultMapOptions: {
        zoom: 8,
        minZoom: 2,
        center: {
          lat: 41.89193,
          lng: 12.51133
        }
      }
    }
  },
  router,
  render: h => h(App)
})
