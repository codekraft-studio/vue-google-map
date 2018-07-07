<template lang="html">

  <div class="simple-map">

    <div class="position-details">
      Map Center: {{ center }}
      Map Zoom {{ zoom }}
      Coordinates: {{ userPosition.coordinates }}
      Accuracy: {{ userPosition.accuracy }}
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
        coordinates: {}
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
