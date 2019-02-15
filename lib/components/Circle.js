import ShapeElement from '../mixins/ShapeElement'

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

export default {
  name: 'GoogleMapCircle',

  mixins: [
    ShapeElement
  ],

  googleMapsElement: {
    boundProps,
    redirectedEvents,
    redirectedMethods
  },

  props: {
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
  },

  googleMapsReady () {
    // Automatically fit bounds when created
    if (this.fitBounds) {
      this.$_map.fitBounds(this.$_mapElement.getBounds())
    }
  }
}
