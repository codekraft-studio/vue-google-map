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

export default {
	name: 'GoogleMapPolygon',

  mixins: [
    MapElement,
  ],

	props: {
		path: {
			type: Array,
			required: true,
			default: () => []
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
		path: 'updatePath',
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
		updatePath (paths) {
			this.$_polyline && this.$_polyline.setPath(paths)
		},
		updateOptions () {
			this.$_polyline && this.$_polyline.setOptions(this.$props)
		}
	},

  // When Google Maps is ready
  googleMapsReady () {
    const options = Object.assign({}, this.$props)
    options.map = this.$_map
		this.$_polyline = new window.google.maps.Polyline(options)
		this.bindProps(this.$_polyline, boundProps)
		this.redirectEvents(this.$_polyline, redirectedEvents)
  },

	render () {
		return ''
	},

  beforeDestroy () {
		if (this.$_polyline) {
			this.$_polyline.setMap(null)
		}
  }
}
