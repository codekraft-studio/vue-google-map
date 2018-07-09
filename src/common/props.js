export const beheviorOptions = {
  clickable: {
    type: Boolean,
    default: true,
  },
  draggable: {
    type: Boolean,
    default: false,
  },
  editable: {
    type: Boolean,
    default: false,
  },
  geodesic: {
    type: Boolean,
    default: true
  },
  visible: {
    type: Boolean,
    default: true
  }
};

export const styleOptions = {
  zIndex: {
    type: Number,
    required: false
  },
  fillColor: {
    type: String,
    required: false
  },
  fillOpacity: {
    type: Number,
    required: false
  },
  strokeColor: {
    type: String,
    required: false
  },
  strokeWeight: {
    type: Number,
    required: false
  },
  strokeOpacity: {
    type: Number,
    required: false
  },
}

export const shapeOptions = {
  ...beheviorOptions,
  ...styleOptions
};
