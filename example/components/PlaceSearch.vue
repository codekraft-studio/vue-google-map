<template lang="html">

  <div class="simple-map">

    <google-map-autocomplete ref="Place" @place-changed="onPlaceChanged" />

    <google-map
      id="map"
      ref="Map"
      :center.sync="center"
      :zoom.sync="zoom"
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
    return {
      center: {
				lat: 48.853,
				lng: 2.298,
			},
			zoom: 8,
      mapOptions: {},
      mapBounds: {}
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
