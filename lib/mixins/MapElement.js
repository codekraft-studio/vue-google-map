import { redirectMethods } from '../utils/redirect-methods'

import MapChild from './MapChild'
import BoundProps from './BoundProps'
import Events from './Events'

/**
 * This mixin is the base for every map rendered elements
 * it wrap the main functionality such
 * binding map properties, events and methods to the component
 * and automatically destroying all listeners and itself
 */
export default {
  mixins: [
    MapChild,
    BoundProps,
    Events
  ],

  /**
   * This option should be defined in components
   * to define which properties, events and methods
   * should be tied to the vue component instance
   */
  googleMapsElement: {
    boundProps: [],
    redirectedEvents: [],
    redirectedMethods: []
  },

  /**
   * By default render a empty string since most of map elements
   * are added through google map programmatic api
   */
  render () {
    return ''
  },

  /**
   * Create the map element with given component props as options
   * double way bind defined properties, redirect defined events
   * and create the component methods based on defined map element methods
   */
  googleMapsReady () {
    const name = this.$options.name.replace('GoogleMap', '')
    const options = Object.assign({}, this.$props)
    options.map = this.$_map

    if (!window.google.maps[name]) {
      throw new Error(`Invalid google map element ${name}`)
    }

    // Create element and bind it to vue component
    const { boundProps, redirectedEvents, redirectedMethods } = this.$options.googleMapsElement
    // Get the user defined default element options
    // frome the Vue instance plugin object
    const defaultOptions = this.$googleMap.defaultOptions[name] || {}
    this.$_mapElement = new window.google.maps[name]({
      ...defaultOptions,
      ...options
    })
    this.bindProps(this.$_mapElement, boundProps)
    this.redirectEvents(this.$_mapElement, redirectedEvents)
    Object.assign(this, redirectMethods({
      target () {
        return this.$_mapElement
      },
      names: redirectedMethods
    }))
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
