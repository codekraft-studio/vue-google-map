import MapElement from '../mixins/MapElement'

const travelModes = [
  'BICYCLING',
  'DRIVING',
  'TRANSIT',
  'WALKING'
]

const boundProps = [
  'draggable',
  'hideRouteList',
  'suppressBicyclingLayer',
  'suppressInfoWindows',
  'suppressMarkers',
  'suppressPolylines'
]

const redirectedEvents = [
  'directions_changed'
]

export default {
  name: 'GoogleMapDirections',

  mixins: [
    MapElement
  ],

  props: {
    origin: {
      type: [String, Object],
      required: true
    },
    destination: {
      type: [String, Object],
      required: true
    },
    travelMode: {
      type: String,
      required: false,
      default: 'DRIVING',
      validator: (value) => travelModes.includes(value)
    },
    draggable: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  watch: {
    origin: 'findRoute',
    destination: 'findRoute',
    travelMode: 'findRoute'
  },

  methods: {
    findRoute () {
      this.$_mapAncestor.$_directionsService.route({
        origin: this.$props.origin,
        destination: this.$props.destination,
        travelMode: this.$props.travelMode
      }, (response, status) => {
        if (status !== 'OK') {
          console.warn('No directions found.')
          return
        }

        this.$_mapElement.setDirections(response)
      })
    }
  },

  googleMapsReady () {
    const options = Object.assign({}, this.$props)
    options.map = this.$_map

    this.$_mapElement = new window.google.maps.DirectionsRenderer(options)
    this.bindProps(this.$_mapElement, boundProps)
    this.redirectEvents(this.$_mapElement, redirectedEvents)
    this.findRoute()
  }
}
