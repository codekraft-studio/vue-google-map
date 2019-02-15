import { shapeOptions } from '../common/props'
import MapElement from './MapElement'

const watchers = Object.keys(shapeOptions)
  .reduce((obj, k) => {
    obj[k] = 'updateOptions'
    return obj
  }, {})

/**
 * This mixins defineds the common props and whatchers
 * for a shape map element and extends the map element mixin
 */
export default {
  mixins: [
    MapElement
  ],
  props: shapeOptions,
  watch: watchers,
  methods: {
    updateOptions () {
      this.$_mapElement && this.$_mapElement.setOptions(this.$props)
    }
  }
}
