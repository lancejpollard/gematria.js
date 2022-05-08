
const languages = require('./language')

const sum = array => array.reduce((m, x) => m + x)

const peak = array => {
  let input = array
  while (true) {
    const s = sum(input)
    if (s < 10) {
      return s
    }
    input = String(s).split('').map(x => parseInt(x, 10))
  }
}

const cycle = (start, end, array) => {
  const base = end - start + 1
  const offset = start - 1
  const sum = array.reduce((m, x) => m + x)
  const rotation = sum % base || base
  return rotation + offset
}

const split = (value) => value.toString().split('').map(x => parseInt(x, 10))

module.exports = {
  sum,
  peak,
  cycle,
  split,
  ...languages
}
