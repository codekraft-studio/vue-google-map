import loader from '../lib-loader'

/**
 * Ensure the google map script is ready before calling
 * any optionally defined prepare or ready functions
 */
export default {
  data () {
    return {
      googleMapsReady: false
    }
  },

  async mounted () {
    await loader.ensureReady()

    // Prepare
    {
      const handlers = this.$options.googleMapsPrepare
      if (handlers) {
        const promises = []
        for (let i = 0; i < handlers.length; i++) {
          const result = handlers[i].call(this)
          if (typeof result.then === 'function') {
            promises.push(result)
          }
        }
        await Promise.all(promises)
      }
    }

    // Ready
    this.googleMapsReady = true
    {
      const handlers = this.$options.googleMapsReady
      if (handlers) {
        for (let i = 0; i < handlers.length; i++) {
          handlers[i].call(this)
        }
      }
    }

    // I'm ready
    this.$emit('ready')
  }
}
