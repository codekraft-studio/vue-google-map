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
			type: Object,
		},
		heading: {
			type: Number,
		},
		mapTypeId: {
			type: String,
		},
		options: {
			type: Object,
			default: () => ({}),
		},
		tilt: {
			type: Number,
		},
		zoom: {
			required: true,
			type: Number,
		},
	},

	beforeCreate () {
		this.$_mapPromises = []
	},

	googleMapsReady () {
		const element = this.$refs.map

		const options = {
			center: this.center,
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
	position: relative;
}
.vue-google-map .map-view {
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	position: absolute;
}
.vue-google-map .hidden-content {
	display: none;
}
</style>
