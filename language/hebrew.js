
const resolve = require('./resolve')

const latin = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 600,
  K: 10,
  L: 20,
  M: 30,
  N: 40,
  O: 50,
  P: 60,
  Q: 70,
  R: 80,
  S: 90,
  T: 100,
  U: 200,
  V: 700,
  W: 900,
  X: 300,
  Y: 400,
  Z: 500,
}

// https://en.wikipedia.org/wiki/Gematria

// https://torahcalc.com/info/gematria/

// 'מספר הכרחי'
const misparHechrachi = new Map()
misparHechrachi.set('א', 1)
misparHechrachi.set('ב', 2)
misparHechrachi.set('ג', 3)
misparHechrachi.set('ד', 4)
misparHechrachi.set('ה', 5)
misparHechrachi.set('ו', 6)
misparHechrachi.set('ז', 7)
misparHechrachi.set('ח', 8)
misparHechrachi.set('ט', 9)
misparHechrachi.set('י', 10)
misparHechrachi.set('כ', 20)
misparHechrachi.set('ל', 30)
misparHechrachi.set('מ', 40)
misparHechrachi.set('נ', 50)
misparHechrachi.set('ס', 60)
misparHechrachi.set('ע', 70)
misparHechrachi.set('פ', 80)
misparHechrachi.set('צ', 90)
misparHechrachi.set('ק', 100)
misparHechrachi.set('ר', 200)
misparHechrachi.set('ש', 300)
misparHechrachi.set('ת', 400)
misparHechrachi.set('ך', 20)
misparHechrachi.set('ם', 40)
misparHechrachi.set('ן', 50)
misparHechrachi.set('ף', 80)
misparHechrachi.set('ץ', 90)

// 'מספר גדול'
const misparGadol = {
  'א': 1,
  'ב': 2,
  'ג': 3,
  'ד': 4,
  'ה': 5,
  'ו': 6,
  'ז': 7,
  'ח': 8,
  'ט': 9,
  'י': 10,
  'כ': 20,
  'ל': 30,
  'מ': 40,
  'נ': 50,
  'ס': 60,
  'ע': 70,
  'פ': 80,
  'צ': 90,
  'ק': 100,
  'ר': 200,
  'ש': 300,
  'ת': 400,
  'ך': 500,
  'ם': 600,
  'ן': 700,
  'ף': 800,
  'ץ': 900,
}

// 'מספר סידורי'
const misparSiduri = {
  'א': 1,
  'ב': 2,
  'ג': 3,
  'ד': 4,
  'ה': 5,
  'ו': 6,
  'ז': 7,
  'ח': 8,
  'ט': 9,
  'י': 10,
  'כ': 11,
  'ל': 12,
  'מ': 13,
  'נ': 14,
  'ס': 15,
  'ע': 16,
  'פ': 17,
  'צ': 18,
  'ק': 19,
  'ר': 20,
  'ש': 21,
  'ת': 22,
  'ך': 11,
  'ם': 13,
  'ן': 14,
  'ף': 17,
  'ץ': 18,
}

// 'מספר קטן'
const misparKatan = {
  'א': 1,
  'ב': 2,
  'ג': 3,
  'ד': 4,
  'ה': 5,
  'ו': 6,
  'ז': 7,
  'ח': 8,
  'ט': 9,
  'י': 1,
  'כ': 2,
  'ל': 3,
  'מ': 4,
  'נ': 5,
  'ס': 6,
  'ע': 7,
  'פ': 8,
  'צ': 9,
  'ק': 1,
  'ר': 2,
  'ש': 3,
  'ת': 4,
  'ך': 2,
  'ם': 4,
  'ן': 5,
  'ף': 8,
  'ץ': 9,
}

const mapMisparHechrachi = word => resolve(word, misparHechrachi)
const mapMisparGadol = word => resolve(word, misparGadol)
const mapMisparSiduri = word => resolve(word, misparSiduri)
const mapMisparKatan = word => resolve(word, misparKatan)

module.exports = {
  mapMisparHechrachi,
  mapMisparGadol,
  mapMisparSiduri,
  mapMisparKatan,
}
