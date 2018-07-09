import {shapeOptions} from '../common/props'
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
	'mousemove'
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
