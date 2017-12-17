'use strict'

import { version } from '../package.json'

import 'regenerator-runtime/runtime'
import loader from './lib-loader'
import { optionMergeStrategies } from './options'
import { initErrorHandling } from './utils/error'

import Map from './components/Map.vue'
import Marker from './components/Marker'

import InfoWindow from './components/InfoWindow'

export {
	Circle,
	Geocoder,
	Map,
	Marker,
	NearbyPlaces,
	PlaceDetails,
  InfoWindow
}

function registerComponents (Vue, prefix) {
	Vue.component(`${prefix}`, Map)
	Vue.component(`${prefix}-marker`, Marker)
	Vue.component(`${prefix}-info-window`, InfoWindow)
}

const plugin = {
	version: version,
	install (Vue, options) {
		const finalOptions = Object.assign({}, {
			installComponents: true,
			componentsPrefix: 'google-map',
		}, options)

		optionMergeStrategies(Vue)
		initErrorHandling(Vue)

		if (finalOptions.installComponents) {
			registerComponents(Vue, finalOptions.componentsPrefix)
		}

		if (finalOptions.load) {
			loader.load(finalOptions.load)
		}
	},
}

export default plugin

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue
}
if (GlobalVue) {
	GlobalVue.use(plugin)
}
