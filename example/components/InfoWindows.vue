<template lang="html">

  <div class="info-windows">

    <google-map
      id="map"
      ref="Map"
      :center.sync="center"
      :zoom.sync="zoom"
      :options="mapOptions">

      <google-map-info-window v-for="infowindow in infoWindowsList" :position="infowindow.position" :options="{
        maxWidth: 300
      }">
        <h4>{{infowindow.title}}</h4>
        <p>{{infowindow.description}}</p>
      </google-map-info-window>

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
			zoom: 5,
      mapOptions: {},
      infoWIndowContext: {},
      infoWindowsList: cities
    }
  },
  methods: {}
}
</script>

<style lang="css">
</style>
