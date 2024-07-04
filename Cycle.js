/**
 * @template T
 * @param  {...T} values
 *
 * @returns () => T
 */
export default function cycle(...values) {
  const arr = [...values]
  return function () {
    if (arr.length === 0) {
      arr = [...values];
    }
    return arr.shift()
  }
}
