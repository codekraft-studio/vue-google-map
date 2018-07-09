<template>
	<div class="vue-google-map">
		<div ref="map" class="map-view"></div>
		<div class="hidden-content">
			<slot></slot>
		</div>
		<slot name="visible"></slot>
	</div>
</template>

<script>
import Ready from '../mixins/Ready'
import BoundProps from '../mixins/BoundProps'
import Events from '../mixins/Events'
import { autoCall } from '../utils/misc'
import { redirectMethods } from '../utils/redirect-methods'

const coordinatesRegex = new RegExp('[+-]?\\d+(\\.\\d+)?', 'g')

// The default center is Rome the mother of all culture
const defaultCenter = {
  lat: 41.89193,
  lng: 12.51133
}

const boundProps = [
	{
		name: 'center',
		watcher: value => ({
			lat: autoCall(value.lat),
			lng: autoCall(value.lng),
		}),
		identity: (a, b) => {
			if (a && b) {
				if (typeof a.equals !== 'function') {
					a = new window.google.maps.LatLng(a)
				}
				if (typeof b.equals !== 'function') {
					b = new window.google.maps.LatLng(b)
				}
				return a.equals(b)
			}
		},
		retriever: (value) => ({
			lat: value.lat(),
			lng: value.lng(),
		}),
	},
	'heading',
	'mapTypeId',
	'tilt',
	'zoom',
]

const redirectedMethods = [
	'panBy',
	'panTo',
	'panToBounds',
	'fitBounds',
	'getBounds',
]

const redirectedEvents = [
	'click',
	'dblclick',
	'drag',
	'dragend',
	'dragstart',
	'mousemove',
	'mouseout',
	'mouseover',
	'resize',
	'rightclick',
	'tilesloaded',
]

export default {
	name: 'GoogleMap',

	mixins: [
		Ready,
		BoundProps,
		Events,
	],

	props: {
		center: {
			required: true,
			type: [String, Object, Array]
		},
		heading: {
			type: Number
		},
		mapTypeId: {
			type: String,
      required: false
		},
		options: {
			type: Object,
			default: () => ({})
		},
		tilt: {
			type: Number,
      required: false
		},
		zoom: {
			required: false,
			type: Number,
      default: 10
		}
	},

	beforeCreate () {
		this.$_mapPromises = []
	},

	googleMapsReady () {
		const element = this.$refs.map
    const center = this.parseCenter(this.center)

		const options = {
			center: center,
			heading: this.heading,
			mapTypeId: this.mapTypeId,
			tilt: this.tilt,
			zoom: this.zoom,
			...this.options,
		}

		this.$_map = new window.google.maps.Map(element, options)

		this.bindProps(this.$_map, boundProps)

		this.$_streetView = this.$_map.getStreetView();
		this.$_streetViewService = new google.maps.StreetViewService()
		this.$_directionsService = new google.maps.DirectionsService()
		this.$_directionsRenderer = new google.maps.DirectionsRenderer()

		this.$_directionsRenderer.setMap(this.$_map)

		this.listen(this.$_map, 'bounds_changed', () => {
			this.$emit('update:bounds', this.$_map.getBounds())
		})

		this.listen(this.$_map, 'idle', () => {
			this.$emit('idle', this)
			this.lastCenter = this.$_map.getCenter()
		})

		this.lastCenter = this.$_map.getCenter()

		this.redirectEvents(this.$_map, redirectedEvents)

		// Code that awaits `$_getMap()`
		this.$_mapPromises.forEach(resolve => resolve(this.$_map))
	},

	methods: {
		...redirectMethods({
			target () {
				return this.$_map
			},
			names: redirectedMethods,
		}),

		resize (preserveCenter = true) {
			if (this.$_map) {
				// let center
				// preserveCenter && (center = this.$_map.getCenter())
				window.google.maps.event.trigger(this.$_map, 'resize')
				preserveCenter && this.$_map.setCenter(this.lastCenter)
			}
		},

		visibilityChanged (isVisible) {
			if (isVisible) {
				this.$nextTick(this.resize)
			}
		},

		$_getMap () {
			if (this.$_map) {
				return Promise.resolve(this.$_map)
			} else {
				return new Promise(resolve => {
					this.$_mapPromises.push(resolve)
				})
			}
		},

    // This method simulate the DirectionsService api directly on map
    // Route; An object with the route request properties
    // @see: https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRequest
    getDirections (route, callback) {
			this.$_directionsService.route(route, (result, status) => {
				if (status !== 'OK') {
					callback(status)
					return
		    }
				this.$_directionsRenderer.setDirections(result)
				callback(null, result)
			})
		},

    // This method simulate the StreetViewService directly on current map
    // Position: Lat Lng position to get panoramas
    // Options: { location, preference, radius, source }
    //  @see: https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewLocationRequest
    // Callback: The callback to run when the streetview service has done
		setStreetView (position, options, callback) {
			this.$_streetViewService.getPanorama({
				location: position
			}, (data, status) => {
				if (status !== 'OK') {
					callback(status)
					return
				}
				this.$_streetView.setPano(data.location.pano)
				this.$_streetView.setVisible(true)
				callback(null, data)
			})
		},

    // Takes a value and tries to evaluate the center otherwise
    // fails back to the default center that can be customized through settings
    parseCenter (value) {
      if (Array.isArray(value)) {
        if (value.length < 2) {
          console.warn('The center array is invalid', value, 'the component will fallback to default')
          this.$emit('update:center', defaultCenter)
          return defaultCenter
        }

        return {
          lat: value[0],
          lng: value[1]
        }
      }

      if (typeof value === 'object') {
        if (!value.hasOwnProperty('lat') || !value.hasOwnProperty('lng')) {
          console.warn('The center object is invalid', value, 'the component will fallback to default')
          this.$emit('update:center', defaultCenter)
          return defaultCenter
        }
        return value
      }

      if (typeof value === 'string') {
        const matches = this.center.match(coordinatesRegex)
        if (!matches || matches.length < 2) {
          console.warn('The center string is invalid', value, 'the component will fallback to default')
          this.$emit('update:center', defaultCenter)
          return defaultCenter
        }
      }

      console.warn('Invalid center property', value, 'the component will fallback to default')
      return defaultCenter;
    },
  },

	watch: {
		options: {
			handler (val) {
				this.$_map.setOptions(val)
			},
			deep: true
		}
	}
}
</script>

<style lang="css" scoped>
.vue-google-map {
	position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}

.vue-google-map .map-view {
	height: 100%;
	width: 100%;
}

.vue-google-map .hidden-content {
	display: none;
}
</style>
