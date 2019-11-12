export function autoCall (value) {
  return typeof value === 'function' ? value() : value
}

export function capitalize (text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export function assignDefined (target, ...sources) {
  for (const source of sources) {
    for (const key of Object.keys(source)) {
      const val = source[key]
      if (val !== undefined) {
        target[key] = val
      }
    }
  }
  return target
}

const isObject = (obj) => obj && typeof obj === 'object'

export function mergeDeep (target, ...sources) {
  sources.forEach(source => {
    if (!isObject(target) || !isObject(source)) {
      return source
    }

    Object.keys(source).forEach(key => {
      const targetValue = target[key]
      const sourceValue = source[key]

      if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
        target[key] = targetValue.concat(sourceValue)
      } else if (isObject(targetValue) && isObject(sourceValue)) {
        target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue)
      } else {
        target[key] = sourceValue
      }
    })
  })

  return target
}

export function getDefaultComponentsOptions () {
  const opts = {}
  const replaceStr = 'GoogleMap'
  const components = require('../components')
  for (const key in components) {
    if (components.hasOwnProperty(key)) {
      const { default: component, defaultOptions } = components[key]
      const optName = component.name.length === replaceStr.length
        ? component.name.replace(replaceStr, 'Map')
        : component.name.replace(replaceStr, '')
      opts[optName] = defaultOptions || {}
    }
  }
  return opts
}
