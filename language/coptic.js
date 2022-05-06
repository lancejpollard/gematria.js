
const ALPHABET_MAP = {
  'ⲁ': 1,
  'ⲃ': 2,
  'ⲅ': 3,
  'ⲇ': 4,
  'ⲉ': 5,
  'ⲋ': 6,
  'ⲍ': 7,
  'ⲏ': 8,
  'ⲑ': 9,
  'ⲓ': 10,
  'ⲕ': 11,
  'ⲗ': 12,
  'ⲙ': 13,
  'ⲛ': 14,
  'ⲝ': 15,
  'ⲟ': 16,
  'ⲡ': 17,
  'ⲣ': 18,
  'ⲥ': 19,
  'ⲧ': 20,
  'ⲩ': 21,
  'ⲫ': 22,
  'ⲭ': 23,
  'ⲯ': 24,
  'ⲱ': 25,
  'ϣ': 26,
  'ϥ': 27,
  'ϧ': 28,
  'ⳉ': 29,
  'ϩ': 30,
  'ϫ': 31,
  'ϭ': 32,
  'ϯ': 33,
}

const size = [
  1, 2, 3, 4, 5, 6, 7, 8, 9,
  10, 20, 30, 40, 50, 60, 70, 80, 90,
  100, 200, 300, 400, 500, 600, 700, 800, 900,
  1000, 2000, 3000, 4000, 5000
]

const map32 = array => array.map(x => size[(ALPHABET_MAP[x] - 1) % 32]).filter(x => x)
const map9 = array => array.map(x => size[(ALPHABET_MAP[x] - 1) % 9]).filter(x => x)

module.exports = {
  map32,
  map9
}