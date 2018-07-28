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

  created () {
    const mapAncestor = this.$_findAncestor(
      a => a.$options.name === 'GoogleMap'
    )

    if (!mapAncestor) {
      throw new Error(`${this.constructor.name} component must be used within a <google-map> component.`)
    }

    this.$_mapAncestor = mapAncestor
  },

  async googleMapsPrepare () {
    const mapComp = this.$_mapAncestor
    this.$_map = await mapComp.$_getMap()
  }
}
