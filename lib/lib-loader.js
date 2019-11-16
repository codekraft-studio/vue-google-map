const loader = {

  loaded: false,

  loading: false,

  readyPromises: [],

  /**
  * @param apiKey    API Key, or object with the URL parameters. For example
  *                  to use Google Maps Premium API, pass
  *                    `{ client: <YOUR-CLIENT-ID> }`.
  * @param version   Google for Maps version
  * @param loadCn    Boolean. If set to true, the map will be loaded from goole maps China
  *                  (@see https://developers.google.com/maps/documentation/javascript/basics#GoogleMapsChina)
  */
  load (args, callback = () => { }) {
    // If script is run from server-side just return
    // without doing nothing until is run from client
    if (typeof window === 'undefined') {
      return Promise.resolve()
    }

    if (this.loading) {
      return this.ensureReady()
    }

    const {
      apiKey,
      version,
      loadCn,
      sync,
      ...options
    } = args

    if (!this.loaded && (!window.google || !window.google.maps)) {
      this.loading = true

      // Allow apiKey to be an object, add support for
      // more authentication such as Google for business
      // https://developers.google.com/maps/documentation/javascript/get-api-key#premium-auth
      switch (typeof apiKey) {
        case 'string':
          options.key = apiKey
          break
        case 'object':
          for (let k in apiKey) {
            options[k] = apiKey[k]
          }
          break
        default:
          throw new Error('The `apiKey` should either be a string or an object')
      }

      // Add libraries as csv string
      if (Array.isArray(options.libraries)) {
        options.libraries = options.libraries.join(',')
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

      // Add script version
      if (version) {
        url = url + '&v=' + version
      }

      // Finally add the script
      const googleMapScript = document.createElement('SCRIPT')
      googleMapScript.setAttribute('src', url)

      // Load script asynchronously
      if (!sync) {
        googleMapScript.setAttribute('defer', '')
        googleMapScript.setAttribute('async', '')
      }

      document.body.appendChild(googleMapScript)

      // Returns a promise which is resolved when the
      // function callback specified to google map script is called
      return new Promise(resolve => {
        window.VueGoogleMapsLoaded = () => {
          this._setLoaded()
          return Promise
            .resolve(callback())
            .then(resolve)
        }
      })
    } else {
      // eslint-disable-next-line
      console.info('The Google Maps library is already loaded')
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

  /**
   * Sets the loaded status to true
   * and resolves all the pending loading promises
   */
  _setLoaded () {
    this.loaded = true
    this.loading = false
    for (let i = 0; i < this.readyPromises.length; i++) {
      this.readyPromises[i]()
    }
    this.readyPromises = []
  }

}

export default loader
