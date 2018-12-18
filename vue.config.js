module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/vue-google-map/'
    : '/',
  css: {
    extract: process.env.EXTRACT_CSS === 'true'
  }
}
