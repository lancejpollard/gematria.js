
const languages = require('./language')

const sum = array => array.reduce((m, x) => m + x, 0)

const product = array => array.reduce((m, x) => m * BigInt(x), 1n)

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

const cycle = array => {
  let i = 0
  let x = array[i++]
  while (i < array.length) {
    let y = array[i++]
    const s = x + y
    const remainder = (s % 9) + 1
    x = remainder
  }
  return (x - 1) % 9
}

module.exports = {
  sum,
  product,
  peak,
  cycle,
  ...languages
}
