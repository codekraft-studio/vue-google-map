import 'regenerator-runtime/runtime'
import loader from './lib-loader'
import { optionMergeStrategies } from './options'
import { initErrorHandling } from './utils/error'
import { version } from '../package.json'

import MapElement from './mixins/MapElement'
import Service from './mixins/Service'

import * as components from './components'

// @see: https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
const defaultMapOptions = {
  zoom: 5,
  center: {
    lat: 41.89193,
    lng: 12.51133
  }
}

export {
  MapElement,
  Service
}

export default {
  version: version,
  install (Vue, opts) {
    const options = Object.assign({}, {
      installComponents: true,
      mapOptions: defaultMapOptions
    }, opts)

    // Add root property with plugin options
    Vue.prototype.$googleMap = options.mapOptions

    optionMergeStrategies(Vue)
    initErrorHandling(Vue)

    // Register all map components
    if (options.installComponents) {
      Object.values(components).forEach(c => {
        Vue.component(c.name, c)
      })
    }

    // Load google maps api right now
    if (options.load) {
      loader.load(options.load)
    }
  }
}
