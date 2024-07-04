// https://www.greatfrontend.com/questions/javascript/mean

/**
 * @param {Array} array - Array from which the elements are all numbers.
 * @return {Number} Returns mean.
 */
export default function mean(array) {
  let res = 0
  for (let ele of array) res += ele

  return res / array.length
}
