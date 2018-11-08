import MapElement from '../mixins/MapElement'

const boundProps = []

const redirectedEvents = [
  'closeclick',
  'content_changed',
  'position_changed',
  'zindex_changed'
]

export default {
  name: 'GoogleMapInfoWindow',

  mixins: [
    MapElement
  ],

  props: {
    show: {
      type: Boolean,
      default: () => false
    },
    position: {
      type: Object
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },

  methods: {
    open (position) {
      this.$_mapElement.setPosition(position)
      this.$_mapElement.open(this.$_map)
      this.$emit('update:show', true)
    }
  },

  watch: {
    show (val) {
      val ? this.$_mapElement.open(this.$_map) : this.$_mapElement.close()
    },
    position (val) {
      this.$_mapElement.setPosition(val)
    },
    options: {
      handler (val) {
        this.$_mapElement.setOptions(val)
      },
      deep: true
    }
  },

  render (h) {
    return h(
      'div',
      {
        style: {
          display: 'none'
        }
      },
      this.$slots.default
    )
  },

  mounted () {
    this.observer = new MutationObserver(() => {
      this.content = this.$el.innerHTML
      this.$_mapElement.setContent(this.content)
    })
    this.observer.observe(this.$el, {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true
    })
  },

  googleMapsReady () {
    const options = this.$props
    options.content = options.content || this.$el.innerHTML

    // If show is true set the map before initialization
    // so it will open the infowindow automatically
    if (this.show) {
      options.map = this.$_map
    }

    // Create infowindow element
    this.$_mapElement = new window.google.maps.InfoWindow(options)

    // Sync parent show property
    this.listen(this.$_mapElement, 'closeclick', () => {
      this.$emit('update:show', false)
    })

    this.bindProps(this.$_mapElement, boundProps)
    this.redirectEvents(this.$_mapElement, redirectedEvents)
  }
}
