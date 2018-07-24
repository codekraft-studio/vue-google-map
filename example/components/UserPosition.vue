<template lang="html">

  <div class="simple-map">

    <div class="position-details" v-if="userPosition.coordinates">
      <div>Center: {{center.lat}} {{center.lng}}</div>
      <div>Map Zoom {{ zoom }}</div>
      <div>Your position: {{userPosition.coordinates.lat}} {{userPosition.coordinates.lng}}</div>
      <div>Accuracy: {{ userPosition.accuracy }}</div>
    </div>

    <google-map
      id="map"
      ref="Map"
      :center.sync="center"
      :zoom.sync="zoom"
      :options="mapOptions">

      <google-map-userposition
        :accuracy.sync="userPosition.accuracy"
        :position.sync="userPosition.coordinates"
      ></google-map-userposition>

    </google-map>

  </div>

</template>

<script>
export default {
  data () {
    return {
      userPosition: {
        accuracy: 0,
        coordinates: null
      },
      center: {
        lat: 41.89193,
				lng: 12.51133
			},
			zoom: 8,
      mapOptions: {}
    }
  },
  methods: {}
}
</script>

<style lang="css">
.position-details {
  position: absolute;
  bottom: 20px;
  width: 300px;
  height: 200px;
  background-color: white;
  padding: 10px;
  left: 20px;
  z-index: 1000;
  border: thin solid black;
}
</style>
