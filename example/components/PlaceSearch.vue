<template lang="html">

  <div class="simple-map">

    <google-map-autocomplete ref="Place" @place-changed="onPlaceChanged" />

    <google-map
      id="map"
      ref="Map"
      :center.sync="center"
      :options="mapOptions"
      @idle="onIdle">

      <div slot="visible">
        <!-- <google-map-autocomplete @place-changed="onPlaceChanged" /> -->
      </div>

    </google-map>

  </div>

</template>

<script>
import cities from '../assets/cities.json'
export default {
  data () {
    const mapOptions = this.$root.defaultMapOptions
    return {
      center: mapOptions.center,
      mapOptions: mapOptions
    }
  },
  methods: {
    onPlaceChanged (data) {
      console.log('Place data:', data)
    },
    onIdle (map) {
      this.mapBounds = map.getBounds()
      this.$refs.Place.setBounds(this.mapBounds)
    }
  }
}
</script>
