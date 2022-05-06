
const CHARACTER_MAP = require('./characters.json')

const size = [
  1, 2, 3, 4, 5, 6, 7, 8, 9,
  10, 20, 30, 40, 50, 60, 70, 80, 90,
  100, 200, 300, 400, 500, 600, 700, 800, 900,
  1000, 2000, 3000, 4000, 5000
]

const mapLineCountModulo32 = (array) =>
  array.map(x => size[(CHARACTER_MAP[x].lineCount - 1) % 32])
    .filter(x => x)
const map9 = (array) =>
  array.map(x => size[(CHARACTER_MAP[x].lineCount - 1) % 9])
    .filter(x => x)

module.exports = {
  mapLineCountModulo32,
  map9,
}
