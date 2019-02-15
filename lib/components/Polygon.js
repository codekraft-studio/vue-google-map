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
  name: 'GoogleMapPolygon',

  mixins: [
    ShapeElement
  ],

  googleMapsElement: {
    boundProps,
    redirectedEvents
  },

  props: {
    paths: {
      type: Array,
      required: true,
      default: () => []
    }
  },

  watch: {
    paths: 'updatePaths'
  },

  methods: {
    updatePaths (paths) {
      this.$_mapElement && this.$_mapElement.setPaths(paths)
    }
  }
}
