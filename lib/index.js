import loader from './lib-loader'
import { optionMergeStrategies } from './options'
import { initErrorHandling } from './utils/error'
import { getDefaultComponentsOptions, mergeDeep } from './utils/misc'
import { version } from '../package.json'

import MapElement from './mixins/MapElement'
import Service from './mixins/Service'

import * as components from './components'

const defaultOptions = getDefaultComponentsOptions()

export {
  MapElement,
  Service
}

export default {
  version: version,
  install (Vue, opts) {
    const options = mergeDeep({}, {
      // should be set by user
      load: false,
      installComponents: true,
      defaultOptions,
      // called when the google map client is loaded
      onReady: () => { }
    }, opts)

    // Add root property with plugin options
    Vue.prototype.$googleMap = {
      defaultOptions: options.defaultOptions,
      services: {}
    }

    optionMergeStrategies(Vue)
    initErrorHandling(Vue)

    // Register all map components
    if (options.installComponents) {
      Object.values(components).forEach(c => {
        c = c.default
        Vue.component(c.name, c)
      })
    }

    // Load google maps api right now
    if (options.load) {
      loader.load(options.load)
        .then(() => {
          return options.onReady(
            window.google.maps,
            Vue.prototype.$googleMap
          )
        })
    }
  }
}
