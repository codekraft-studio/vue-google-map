/**
 * Returns an object of mapped methods
 * based on a given names list
 * that return the call on a given target
 */
export function redirectMethods ({ target, names }) {
  return names.reduce((obj, name) => {
    obj[name] = function (...args) {
      const t = target.call(this)
      if (t) {
        return t[name].apply(t, args)
      }
    }
    return obj
  }, {})
}
