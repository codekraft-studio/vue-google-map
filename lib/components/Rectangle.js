import ShapeElement from '../mixins/ShapeElement'

const boundProps = [
  'bounds',
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
  name: 'GoogleMapRectangle',

  mixins: [
    ShapeElement
  ],

  googleMapsElement: {
    boundProps,
    redirectedEvents
  },

  props: {
    bounds: {
      type: [Object, Array],
      required: true
    }
  },

  watch: {
    bounds: 'updateBounds'
  },

  methods: {
    updateBounds (paths) {
      this.$_mapElement && this.$_mapElement.setBounds(paths)
    }
  }
}
