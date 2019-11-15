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
  'mousemove'
]

export default {
  name: 'GoogleMapPolyline',

  mixins: [
    ShapeElement
  ],

  googleMapsElement: {
    boundProps,
    redirectedEvents
  },

  props: {
    path: {
      type: Array,
      required: true,
      default: () => []
    }
  },

  watch: {
    path: 'updatePath'
  },

  methods: {
    updatePath (paths) {
      this.$_mapElement && this.$_mapElement.setPath(paths)
    }
  }
}
