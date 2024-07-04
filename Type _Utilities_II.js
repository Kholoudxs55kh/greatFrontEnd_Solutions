// https://www.greatfrontend.com/questions/javascript/type-utilities-ii

export function isArray(value) {
  return Array.isArray(value);
}

export function isFunction(value) {
  return typeof value === 'function';
}

export function isObject(value) {
  return Object.isExtensible(value) || isFunction(value);
}

export function isPlainObject(value) {
  // new for me
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}
