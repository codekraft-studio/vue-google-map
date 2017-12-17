import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

import App from './App.vue'

import router from './router'
import VueGoogleMap from '../src/index'

Vue.use(VueMaterial)

Vue.use(VueGoogleMap, {
  load: {
    apiKey: process.env.GOOGLE_API_KEY,
    libraries: ['places'],
  },
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
