import MapElement from '../mixins/MapElement'

const boundProps = [
	'bounds',
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

export default {
	name: 'GoogleMapPolygon',

  mixins: [
    MapElement,
  ],

	props: {
		bounds: {
			type: [Object, Array],
			required: true
		},

		// Beheviour customization
		clickable: {
			type: Boolean,
			default: true,
		},
		draggable: {
			type: Boolean,
			default: false,
		},
		editable: {
			type: Boolean,
			default: false,
		},
		geodesic: {
			type: Boolean,
			default: false
		},
		visible: {
			type: Boolean,
			default: true
		},

		// Style customization
		zIndex: {
			type: Number
		},
		fillColor: {
			type: String
		},
		fillOpacity: {
			type: Number
		},
		strokeColor: {
			type: String
		},
		strokeWeight: {
			type: Number
		},
		strokeOpacity: {
			type: Number
		},
	},

	watch: {
		bounds: 'updateBounds',
		clickable: 'updateOptions',
		editable: 'updateOptions',
		draggable: 'updateOptions',
		visible: 'updateOptions',
		geodesic: 'updateOptions',
		fillColor: 'updateOptions',
		fillOpacity: 'updateOptions',
		strokeColor: 'updateOptions',
		strokeWeight: 'updateOptions',
		strokeOpacity: 'updateOptions'
	},

	methods: {
		updateBounds (paths) {
			this.$_rectangle && this.$_rectangle.setBounds(paths)
		},
		updateOptions () {
			this.$_rectangle && this.$_rectangle.setOptions(this.$props)
		}
	},

  // When Google Maps is ready
  googleMapsReady () {
    const options = Object.assign({}, this.$props)
    options.map = this.$_map
		this.$_rectangle = new window.google.maps.Rectangle(options)
		this.bindProps(this.$_rectangle, boundProps)
		this.redirectEvents(this.$_rectangle, redirectedEvents)
  },

	render () {
		return ''
	},

  beforeDestroy () {
		if (this.$_rectangle) {
			this.$_rectangle.setMap(null)
		}
  }
}
