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
	name: 'GoogleMapCircle',

  mixins: [
    MapElement,
  ],

	data () {
		return {}
	},

	props: {
		center: {
			type: Object,
			required: true,
		},
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
		options: {
			type: Object,
			default: () => ({}),
		},
		radius: {
			type: Number,
			required: true,
		},
		visible: {
			default: true,
		},
		zIndex: {
			type: Number,
			default: 1
		}
	},

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

		console.log('created circle', this.$_circle)
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
