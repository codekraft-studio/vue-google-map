<template lang="html">

  <div class="pac-card">

    <div v-if="controls">
      <div class="pac-controls">
        <input type="checkbox" value="establishment" v-model="types">
        <label for="changetype-establishment">Establishments</label>
        <input type="checkbox" value="address" v-model="types">
        <label for="changetype-address">Addresses</label>
        <input type="checkbox" value="geocode" v-model="types">
        <label for="changetype-geocode">Geocodes</label>
      </div>
      <div class="pac-controls">
        <input type="checkbox">
        <label for="use-strict-bounds">Strict Bounds</label>
      </div>
    </div>

    <div class="pac-input-container">
      <input id="pac-input" type="text" placeholder="Enter a location">
    </div>

  </div>

</template>

<script>
import BoundProps from '../mixins/BoundProps'
import Events from '../mixins/Events'
import Ready from '../mixins/Ready'
import FindAncestor from '../mixins/FindAncestor'

import {
  redirectMethods
} from '../utils/redirect-methods'

const redirectedMethods = [
  'getBounds',
  'getPlace',
  'setTypes',
  'setBounds'
]

export default {
  name: 'GoogleMapsAutocomplete',

  props: {
    // types: {
    //   type: Array,
    //   default: () => ([])
    // },
    controls: {
      type: Boolean,
      default: false
    },
    updateMap: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      types: []
    }
  },

  mixins: [
    BoundProps,
    Events,
    FindAncestor,
    Ready,
  ],

  methods: {
    ...redirectMethods({
      target() {
        return this.$_autocomplete
      },
      names: redirectedMethods,
    }),
  },

  created() {
    const mapAncestor = this.$_findAncestor(
      a => a.$options.name === 'GoogleMap'
    )
    if (!mapAncestor) {
      return
    }
    this.$_mapAncestor = mapAncestor
  },

  async googleMapsPrepare() {
    const mapComp = this.$_mapAncestor
    this.$_map = mapComp ? await mapComp.$_getMap() : null
  },

  googleMapsReady() {
    let input = this.$el.querySelector('#pac-input')
    this.$_autocomplete = new window.google.maps.places.Autocomplete(input)

    if (this.$_map) {
      this.$_autocomplete.bindTo('bounds', this.$_map)
    }

    this.$_autocomplete.addListener('place_changed', () => {
      let place = this.$_autocomplete.getPlace()
      this.$emit('place-changed', place)

      if (this.$_map && this.updateMap) {
        if (place.geometry.viewport) {
          this.$_map.fitBounds(place.geometry.viewport);
        } else {
          this.$_map.setCenter(place.geometry.location);
        }
      }
    })
  }
}
</script>

<style lang="css">
.pac-card {
  border-radius: 2px 0 0 2px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  outline: none;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  font-family: Roboto;
  z-index: 10000;
  position: absolute;
  right: 40px;
  margin-right: 10px;
  z-index: 10000;
  position: absolute;
  right: 40px;
  top: 10px;
}

.pac-controls {
  display: inline-block;
  padding: 5px 11px;
}
.pac-input-container {
  padding: 5px 11px;
}

.pac-input-container input {
  min-width: 300px;
  width: 100%;
  padding: 4px;
  margin: 0;
}
</style>
