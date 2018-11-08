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
    required: true
  },
  radius: {
    type: Number,
    required: true
  },
  fitBounds: {
    type: [Boolean, String],
    default: false
  }
}

export default {
  name: 'GoogleMapCircle',

  mixins: [
    MapElement
  ],

  props: circleProps,

  watch: {
    clickable: 'updateOptions',
    editable: 'updateOptions',
    draggable: 'updateOptions',
    radius: 'updateOptions',
    zIndex: 'updateOptions'
  },

  methods: {
    ...redirectMethods({
      target () {
        return this.$_mapElement
      },
      names: redirectedMethods
    }),
    updateOptions (options) {
      this.$_mapElement && this.$_mapElement.setOptions(options || this.$props)
    }
  },

  // When Google Maps is ready
  googleMapsReady () {
    const options = Object.assign({}, this.$props)
    options.center = this.$props.center
    options.map = this.$_map
    this.$_mapElement = new window.google.maps.Circle(options)
    this.bindProps(this.$_mapElement, boundProps)
    this.redirectEvents(this.$_mapElement, redirectedEvents)

    // Automatically fit bounds when created
    if (this.fitBounds) {
      this.$_map.fitBounds(this.$_mapElement.getBounds())
    }
  }
}
