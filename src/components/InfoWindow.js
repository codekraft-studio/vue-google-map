import MapElement from '../mixins/MapElement'

const boundProps = []

const redirectedEvents = [
	'closeclick',
	'content_changed',
	'position_changed',
	'zindex_changed',
]

export default {
	name: 'GoogleMapsInfoWindow',

	mixins: [
		MapElement,
	],

	props: {
		show: {
			type: Boolean,
			default: () => false,
		},
		position: {
			type: Object,
		},
		options: {
			type: Object,
			default: () => ({}),
		},
	},

	methods: {
		open (position) {
			this.$_infoWindow.setPosition(position)
			this.$_infoWindow.open(this.$_map)
			this.$emit('update:show', true)
		},
	},

	watch: {
		show (val) {
			val ? this.$_infoWindow.open(this.$_map) : this.$_infoWindow.close()
		},
		options: {
			handler (val) {
				this.$_infoWindow.setOptions(val)
			},
			deep: true,
		},
	},

	render (h) {
		return h(
			'div',
			{
				style: {
					display: 'none',
				},
			},
			this.$slots.default
		)
	},

	googleMapsReady () {
		const options = this.$props
		options.map = this.$_map
		options.content = options.content || this.$el.innerHTML

    console.log('Vue Google Map => InfoWindow: Opening infowindow with options:', options)

		this.$_infoWindow = new window.google.maps.InfoWindow(options)

		// Sync parent show property
		this.listen(this.$_infoWindow, 'closeclick', () => {
			this.$emit('update:show', false)
		})

		this.bindProps(this.$_infoWindow, boundProps)
		this.redirectEvents(this.$_infoWindow, redirectedEvents)
	},

	mounted () {
		this.observer = new MutationObserver((mutations) => {
			this.content = this.$el.innerHTML
			this.$_infoWindow.setContent(this.content)
		})
		this.observer.observe(this.$el, {
			attributes: true,
			childList: true,
			characterData: true,
			subtree: true,
		})
	},

	beforeDestroy () {
		this.observer.disconnect()
		if (this.$_infoWindow) {
			this.$_infoWindow.setMap(null)
		}
	},
}
