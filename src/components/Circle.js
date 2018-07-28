import {shapeOptions} from '../common/props'
import {redirectMethods} from '../utils/redirect-methods'
import MapElement from '../mixins/MapElement'

const boundProps = [
	'center',
	'draggable',
	'editable',
	'radius',
	'visible'
]

const redirectedEvents = [
  'click',
  'rightclick',
  'dblclick',
  'drag',
	'dragstart',
	'dragend',
	'mouseup',
	'mousedown',
	'mouseout',
	'mouseover',
	'mousemove',
  'radius_changed',
  'center_changed'
]

const redirectedMethods = [
	'getBounds',
	'getCenter',
	'getRadius',
	'getVisible'
]

const circleProps = {
	...shapeOptions,
	center: {
		type: Object,
		required: true,
	},
	radius: {
		type: Number,
		required: true,
	},
  fitBounds: {
    type: [Boolean, String],
    default: false
  }
}

export default {
	name: 'GoogleMapCircle',

  mixins: [
    MapElement,
  ],

	data () {
		return {}
	},

	props: circleProps,

	watch: {
		clickable: 'updateOptions',
		editable: 'updateOptions',
		draggable: 'updateOptions',
		radius: 'updateOptions',
		zIndex: 'updateOptions',
	},

	methods: {
    ...redirectMethods({
			target () {
				return this.$_circle
			},
			names: redirectedMethods,
		}),
		updateOptions (options) {
			this.$_circle && this.$_circle.setOptions(options || this.$props)
		},
	},

  // When Google Maps is ready
  googleMapsReady () {
    const options = Object.assign({}, this.$props)
		options.center = this.$props.center
    options.map = this.$_map
		this.$_circle = new window.google.maps.Circle(options)
		this.bindProps(this.$_circle, boundProps)
		this.redirectEvents(this.$_circle, redirectedEvents)

    // Automatically fit bounds when created
    if (this.fitBounds) {
      this.$_map.fitBounds(this.$_circle.getBounds())
    }
  },

	render () {
		return ''
	},

  beforeDestroy () {
		if (this.$_circle) {
			this.$_circle.setMap(null)
		}
  }
}
