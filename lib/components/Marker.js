import MapElement from '../mixins/MapElement'

const boundProps = [
  'animation',
  'clickable',
  'cursor',
  'draggable',
  'icon',
  'label',
  'opacity',
  'place',
  'position',
  'shape',
  'title',
  'visible',
  'zIndex'
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
  'mouseover',
  'mouseout'
]

export default {
  name: 'GoogleMapMarker',

  mixins: [
    MapElement
  ],

  props: {
    animation: {
      type: Number
    },
    clickable: {
      type: Boolean,
      default: true
    },
    cursor: {
      type: String
    },
    draggable: {
      type: Boolean,
      default: false
    },
    icon: {
      type: [String, Object]
    },
    label: {
      type: [String, Object]
    },
    opacity: {
      type: Number,
      default: 1
    },
    place: {
      type: Object
    },
    position: {
      type: Object
    },
    shape: {
      type: Object
    },
    title: {
      type: String
    },
    visible: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number
    }
  },

  render (h) {
    if (!this.$slots.default || this.$slots.default.length === 0) {
      return ''
    } else if (this.$slots.default.length === 1) {
      // So that infowindows can have a marker parent
      return this.$slots.default[0]
    } else {
      return h(
        'div',
        this.$slots.default
      )
    }
  },

  googleMapsReady () {
    const options = Object.assign({}, this.$props)
    options.map = this.$_map

    this.$_mapElement = new window.google.maps.Marker(options)
    this.bindProps(this.$_mapElement, boundProps)
    this.redirectEvents(this.$_mapElement, redirectedEvents)
  }
}
