'use strict'

import { version } from '../package.json'

import 'regenerator-runtime/runtime'
import loader from './lib-loader'
import { optionMergeStrategies } from './options'
import { initErrorHandling } from './utils/error'

import Map from './components/Map.vue'
import Marker from './components/Marker'

import InfoWindow from './components/InfoWindow'
import Autocomplete from './components/Autocomplete'
import UserPosition from './components/UserPosition'
import Polygon from './components/Polygon'
import Polyline from './components/Polyline'
import Rectangle from './components/Rectangle'

export {
	Circle,
	Geocoder,
	Map,
	Marker,
	Rectangle,
	Polyline,
	NearbyPlaces,
	PlaceDetails,
	UserPosition,
  InfoWindow,
	Polygon
}

function registerComponents (Vue, prefix) {
	Vue.component(`${prefix}`, Map)
	Vue.component(`${prefix}-marker`, Marker)
	Vue.component(`${prefix}-info-window`, InfoWindow)
	Vue.component(`${prefix}-autocomplete`, Autocomplete)
	Vue.component(`${prefix}-userposition`, UserPosition)
	Vue.component(`${prefix}-polygon`, Polygon)
	Vue.component(`${prefix}-polyline`, Polyline)
	Vue.component(`${prefix}-rectangle`, Rectangle)
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
