const loader = {
  loaded: false,
  readyPromises: [],

  /**
  * @param apiKey    API Key, or object with the URL parameters. For example
  *                  to use Google Maps Premium API, pass
  *                    `{ client: <YOUR-CLIENT-ID> }`.
  *                  You may pass the libraries and/or version (as `v`) parameter into
  *                  this parameter and skip the next two parameters
  * @param version   Google for Maps version
  * @param libraries Libraries to load (@see
  *                  https://developers.google.com/maps/documentation/javascript/libraries)
  * @param loadCn    Boolean. If set to true, the map will be loaded from goole maps China
  *                  (@see https://developers.google.com/maps/documentation/javascript/basics#GoogleMapsChina)
  */
  load ({ apiKey, version, libraries, loadCn }) {
    if (typeof window === 'undefined') {
      // Do nothing if run from server-side
      return Promise.resolve()
    }

    if (!this.loaded && (!window.google || !window.google.maps)) {
      // Allow apiKey to be an object.
      // This is to support more esoteric means of loading Google Maps,
      // such as Google for business
      // https://developers.google.com/maps/documentation/javascript/get-api-key#premium-auth
      var options = {}
      if (typeof apiKey === 'string') {
        options.key = apiKey
      } else if (typeof apiKey === 'object') {
        for (let k in apiKey) { // transfer values in apiKey to options
          options[k] = apiKey[k]
        }
      } else {
        throw new Error('`apiKey` should either be a string or an object')
      }

      // Add libraries
      if (Array.isArray(libraries)) {
        options.libraries = libraries.join(',')
      }

      // Add client script load callback
      options.callback = 'VueGoogleMapsLoaded'

      let baseUrl = 'https://maps.googleapis.com/'

      if (typeof loadCn === 'boolean' && loadCn === true) {
        baseUrl = 'http://maps.google.cn/'
      }

      // Build google map client script options string
      const searchParams = new URLSearchParams()
      for (const key in options) {
        if (options.hasOwnProperty(key)) {
          searchParams.append(key, options[key])
        }
      }

      let url = baseUrl + 'maps/api/js?' + searchParams.toString()
      if (version) {
        url = url + '&v=' + version
      }

      // Finally add the script
      const googleMapScript = document.createElement('SCRIPT')
      googleMapScript.setAttribute('src', url)
      googleMapScript.setAttribute('async', '')
      googleMapScript.setAttribute('defer', '')
      document.body.appendChild(googleMapScript)

      return new Promise(resolve => {
        window.VueGoogleMapsLoaded = () => {
          this._setLoaded()
          resolve()
        }
      })
    } else {
      // eslint-disable-next-line
      console.warn('The Google Maps library is already loaded')
      this._setLoaded()
      return Promise.resolve()
    }
  },

  ensureReady () {
    if (this.loaded) {
      return Promise.resolve()
    } else {
      const promise = new Promise((resolve) => {
        this.readyPromises.push(resolve)
      })
      return promise
    }
  },

  _setLoaded () {
    this.loaded = true
    for (var i = 0; i < this.readyPromises.length; i++) {
      this.readyPromises[i]()
    }
    this.readyPromises = []
  }
}

export default loader
