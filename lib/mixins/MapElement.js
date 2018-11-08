import BoundProps from './BoundProps'
import Events from './Events'
import Ready from './Ready'
import FindElement from './FindElement'

export default {
  mixins: [
    BoundProps,
    Events,
    FindElement,
    Ready
  ],

  /**
   * By default render a empty string since most of map elements
   * are added through google map programmatic api
   */
  render () {
    return ''
  },

  created () {
    const mapAncestor = this.$_findAncestor(
      a => a.$options.name === 'GoogleMap'
    )

    if (!mapAncestor) {
      throw new Error(`${this.constructor.name} component must be used within a <google-map> component.`)
    }

    this.$_mapAncestor = mapAncestor
  },

  /**
   * Prepare the map element child by adding
   * the map element reference to his scope
   */
  async googleMapsPrepare () {
    const mapComp = this.$_mapAncestor
    this.$_map = await mapComp.$_getMap()
  },

  /**
   * Remove the map element from the map when component is destroyed
   */
  beforeDestroy () {
    if (this.$_mapElement) {
      this.$_mapElement.setMap(null)
    }
  }
}
