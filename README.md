# vue-google-map

> Google Map components and integration for VueJs

[![Dependency Status][daviddm-image]][daviddm-url]

This package is under development, until the first release comes out use it in production at your risk, also the documentation is not complete, so if is missing something open a request or look at the [source code](https://github.com/codekraft-studio/vue-google-map).

## Installation

```
npm i @codekraft-studio/vue-google-map
yarn add @codekraft-studio/vue-google-map
```

## Usage

Before starting you need a Google API key from the [developer console](http://console.developers.google.com/), once you obtained your key, import the module in your application and register it as plugin:

```js
import VueGoogleMap from '@codekraft-studio/vue-google-map'

Vue.use(VueGoogleMap, {
  load: {
    apiKey: 'your-api-key',
    libraries: ['...']
  }
})
```

This module tries to map GoogleMap with Vue components as much as possible so any of the options available on the original GoogleMap class will be available as component props and all the events emitted will be mapped to component events.

## Components

Here a list of the available components that you can use with this plugin, click on them to discover more about the usage and see examples. If you are interested to see a __real life use__ checkout the [example](example) folder which contains the source code of the [website]().

* [Marker](#marker)
* [AutoComplete](#autocomplete)
* [PlaceDetails](#placedetails)
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

If you want to contribute in the development clone or fork the repository, than install all the dependencies:

```
npm install
yarn install
```

Create a `.env` file containing the __GOOGLE_APIKEY__ variable with your API key:

```
GOOGLE_APIKEY=my-apy-key
```

Once is all ready you can start the development server by typing:

```
npm run dev
yarn run dev
```

---

## License

This package is under the MIT license.

[daviddm-image]: https://david-dm.org/codekraft-studio/vue-google-map.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/codekraft-studio/vue-google-map
