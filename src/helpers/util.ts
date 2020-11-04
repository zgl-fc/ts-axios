const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

// export function isObject(val: any): val is Object {
//   return val !== null && typeof val === 'object'
// }

// send中能接受好几种对象 我们需要判断普通对象
export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}
