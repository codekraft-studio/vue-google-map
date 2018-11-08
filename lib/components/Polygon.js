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

const polygonProps = {
  ...shapeOptions,
  paths: {
    type: Array,
    required: true,
    default: () => []
  }
}

export default {
  name: 'GoogleMapPolygon',

  mixins: [
    MapElement
  ],

  props: polygonProps,

  watch: {
    paths: 'updatePaths',
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
    updatePaths (paths) {
      this.$_mapElement && this.$_mapElement.setPaths(paths)
    },
    updateOptions () {
      this.$_mapElement && this.$_mapElement.setOptions(this.$props)
    }
  },

  // When Google Maps is ready
  googleMapsReady () {
    const options = Object.assign({}, this.$props)
    options.map = this.$_map
    this.$_mapElement = new window.google.maps.Polygon(options)
    this.bindProps(this.$_mapElement, boundProps)
    this.redirectEvents(this.$_mapElement, redirectedEvents)
  }
}
