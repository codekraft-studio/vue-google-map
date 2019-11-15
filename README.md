# vue-google-map

> Google Map components and integration for VueJs

[![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]

#### Important disclaimer!

This package is under active development, I personally use it in various projects that are already in production but this doesn't mean it hasn't bug or it won't change the API structure in the future. Also the documentation is not complete yet, so if is missing something open a request or look at the [source code](https://github.com/codekraft-studio/vue-google-map).

## Installation

```
npm i @codekraft-studio/vue-google-map
```

## Usage

Before starting you need a Google API key from the [developer console](http://console.developers.google.com/), once you obtained your key, import the module in your application and register it as plugin:

```js
import VueGoogleMap from '@codekraft-studio/vue-google-map'

Vue.use(VueGoogleMap, {

  // register globally all plugin provided components
  installComponents: true,
  
  // loading options for google map script
  load: {
    sync: false,
    apiKey: 'your-api-key',
    libraries: ['...'],
    // other options
  },

  // called when the google map client is loaded
  onReady: () => { }
  
})
```

For all the specific script loading options checkout Google Developers [website](https://developers.google.com/maps/documentation/javascript/tutorial#Loading_the_Maps_API).

This module tries to map GoogleMap with Vue components as much as possible so any of the options available on the original GoogleMap class will be available as component props and all the events emitted will be mapped to component events.

## Components

Here a list of the available components that you can use with this plugin, click on them to discover more about the usage and see examples..

* [Marker](#marker)
* [AutoComplete](#autocomplete)
* [Circle](#circle)
* [Rectangle](#rectangle)
* [Polygon](#polygon)
* [Polyline](#polyline)

#### Marker

The Google Map Marker element require to be inside a `<google-map>` component., it support the __default slot__.

```html
<google-map-marker
  title="String"
  label="String|Object"
  clickable="Boolean"
  draggable="Boolean"
  visible="Boolean"
  z-index="Number"
  click="Function"
  dblclick="Function"
  rightclick="Function"
  drag="Function"
  dragstart="Function"
  dragend="Function"
  mouseup="Function"
  mousedown="Function"
  mouseover="Function"
  mouseout="Function"
></google-map-marker>
```

#### AutoComplete

The AutoComplete component does not require to be inside a `<google-map>` component, it can be used anyway inside your app. It display an input and optionally the autocomplete controls, when a place is selected the __place-changed__ event is triggered with the result.

```html
<google-map-autocomplete
  model="String"
  types="Array"
  controls="Boolean"
  update-map="Boolean"
  place-changed="Function"
></google-map-autocomplete>
```

---

## Development

If you want to contribute in the development clone or fork the repository, than install all the dependencies.

```
npm install
```

Create a `.env` file containing a key called __VUE_APP_GOOGLE_APIKEY__ with as value a valid API key obtained from Google Developers website.

```env
VUE_APP_GOOGLE_APIKEY=my-apy-key
```

Finally start the project in development mode with the command `npm run dev` it will start the demo project where are the features are showcased and live tested.

## Contributing

1.  Create an issue and describe your idea
2.  Fork the project (<https://github.com/codekraft-studio/generator-wordpress-plugin/fork>)
3.  Create your feature branch (`git checkout -b my-new-feature`)
4.  Commit your changes (`git commit -am 'Add some feature'`)
5.  Publish the branch (`git push origin my-new-feature`)
6.  Create a new Pull Request

---

## License

This package is released under [MIT License](./LICENSE).

[npm-image]: https://badge.fury.io/js/%40codekraft-studio%2Fvue-google-map.svg
[npm-url]: https://npmjs.org/package/@codekraft-studio/vue-google-map
[daviddm-image]: https://david-dm.org/codekraft-studio/vue-google-map.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/codekraft-studio/vue-google-map
