import loader from './lib-loader'
import { optionMergeStrategies } from './options'
import { getDefaultComponentsOptions, mergeDeep } from './utils/misc'
import { version } from '../package.json'

import MapElement from './mixins/MapElement'
import Service from './mixins/Service'

import * as components from './components'

// Object mapping components names
// with their default options if any
const defaultOptions = getDefaultComponentsOptions()

// List of "root" map components
// that will wait until the client script is loaded
const AsyncComponents = [
  'GoogleMap'
]

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

    if (!options.load) {
      throw new Error('You must specify Google Map client loading options')
    }

    const { immediate, ...loadOptions } = options.load

    // Function called during client script loading
    const loadFn = () => loader.load(
      loadOptions,
      () => options.onReady(window.google.maps, Vue.prototype.$googleMap)
    )

    // Add root property with plugin options
    Vue.prototype.$googleMap = {
      defaultOptions: options.defaultOptions,
      services: {}
    }

    // Customize the vue instance to adapt the plugin
    optionMergeStrategies(Vue)

    // Register all map components
    if (options.installComponents) {
      Object.values(components).forEach(c => {
        let component = c.default
        const name = component.name

        if (AsyncComponents.includes(name)) {
          component = async () => {
            await loadFn()
            return c
          }
        }

        Vue.component(name, component)
      })
    }

    // Load google maps api right now
    if (immediate) {
      return loadFn()
    }
  }
}
