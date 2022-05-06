
const resolve = require('./resolve')

// english kaballah https://en.wikipedia.org/wiki/English_Qaballa
// A=1  L=2  W=3  H=4  S=5  D=6  O=7  Z=8  K=9  V=10 G=11 R=12 C=13
// N=14 Y=15 J=16 U=17 F=18 Q=19 B=20 M=21 X=22 I=23 T=24 E=25 P=26

const alphabetToNumberMap = new Map()
const a = (x, z) => alphabetToNumberMap.set(x, z)
a('a', 1)
a('b', 2)
a('c', 3)
a('d', 4)
a('e', 5)
a('f', 6)
a('g', 7)
a('h', 8)
a('i', 9)
a('j', 10)
a('k', 11)
a('l', 12)
a('m', 13)
a('n', 14)
a('o', 15)
a('p', 16)
a('q', 17)
a('r', 18)
a('s', 19)
a('t', 20)
a('u', 21)
a('v', 22)
a('w', 23)
a('x', 24)
a('y', 25)
a('z', 26)

const numberToAlphabetMap = generateNumberToAlphabetMap()

const mapAlphabet = word => resolve(word, alphabetToNumberMap)

module.exports = {
  alphabetToNumberMap,
  numberToAlphabetMap,
  mapAlphabet,
}

function generateNumberToAlphabetMap() {
  const array = []
  for (const [key, val] of alphabetToNumberMap) {
    array.push([key, val])
  }
  array.reverse()
  const map = new Map
  array.forEach(([key, val]) => {
    map.set(String(val), key)
  })
  return map
}
