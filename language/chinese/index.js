
const CHARACTER_LIST = require('./characters.json')

const size = [
  1, 2, 3, 4, 5, 6, 7, 8, 9,
  10, 20, 30, 40, 50, 60, 70, 80, 90,
  100, 200, 300, 400, 500, 600, 700, 800, 900,
  1000, 2000, 3000, 4000, 5000
]

const mapLineCountModulo = (array) => array.map(x => size[CHARACTER_LIST[x].lineCount % 32])

module.exports = {
  mapLineCountModulo,
}
