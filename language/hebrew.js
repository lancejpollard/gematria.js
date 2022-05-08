
// https://en.wikipedia.org/wiki/Gematria

// https://torahcalc.com/info/gematria/

// 'מספר הכרחי'
const misparHechrachi = {
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

const size = [
  1, 2, 3, 4, 5, 6, 7, 8, 9,
  10, 20, 30, 40, 50, 60, 70, 80, 90,
  100, 200, 300, 400,
]

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

const mapMisparHechrachi = array => array.map(x => size[misparHechrachi[x] - 1]).filter(x => x)
const map9 = array => array.map(x => size[(misparHechrachi[x] - 1) % 9]).filter(x => x)
const mapMisparGadol = array => array.map(x => misparGadol[x]).filter(x => x)
const mapMisparSiduri = array => array.map(x => misparSiduri[x]).filter(x => x)
const mapMisparKatan = array => array.map(x => misparKatan[x]).filter(x => x)

module.exports = {
  mapMisparHechrachi,
  mapMisparGadol,
  mapMisparSiduri,
  mapMisparKatan,
  map9,
}
