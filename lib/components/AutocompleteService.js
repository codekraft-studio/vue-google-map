import Service from '../mixins/Service'

export default {
  name: 'GoogleMapAutocompleteService',
  mixins: [Service],
  data () {
    return {
      results: []
    }
  },
  methods: {
    createServices () {
      this.$_service = new window.google.maps.places.AutocompleteService()
    },
    update () {
      this.loading = true
      this.$_service.getPlacePredictions(this.request, (results, status) => {
        this.setResults(results, status)
        this.loading = false
      })
    }
  }
}
