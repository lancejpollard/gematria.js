const originalConsonant25: { [key: string]: number } = {
  क: 1,
  ख: 2,
  ग: 3,
  घ: 4,
  ङ: 5,
  च: 6,
  छ: 7,
  ज: 8,
  झ: 9,
  ञ: 10,
  ट: 11,
  ठ: 12,
  ड: 13,
  ढ: 14,
  ण: 15,
  त: 16,
  थ: 17,
  द: 18,
  ध: 19,
  न: 20,
  प: 21,
  फ: 22,
  ब: 23,
  भ: 24,
  म: 25,
}

const the4Semivowels: { [key: string]: number } = {
  य: 26,
  र: 27,
  ल: 28,
  व: 29,
}

const the3Sibilants: { [key: string]: number } = {
  श: 30,
  ष: 31,
  स: 32,
}

const theGlottal: { [key: string]: number } = {
  ह: 33,
}

const extraConsonants: { [key: string]: number } = {
  क़: 1,
  ख़: 2,
  ग़: 3,
  ज़: 8,
  ड़: 13,
  ढ़: 14,
  फ़: 22,
  ॠ: 27,
}

const combinationCharacters: { [key: string]: number } = {
  क्ष: 31,
  त्र: 24,
  ज्ञ: 29,
  श्र: 43,
}

const CONSONANT_MAP: { [key: string]: number } = {
  ...originalConsonant25,
  ...the4Semivowels,
  ...the3Sibilants,
  ...theGlottal,
  ...extraConsonants,
  ...combinationCharacters,
}

const VOWEL_MAP: { [key: string]: number } = {
  अ: 1,
  आ: 2,
  'ा': 2,
  इ: 3,
  'ि': 3,
  ई: 4,
  'ी': 4,
  उ: 5,
  'ु': 5,
  ऊ: 6,
  'ू': 6,
  ऋ: 7,
  'ृ': 7,
  ए: 8,
  'े': 8,
  ऐ: 9,
  'ै': 9,
  ओ: 10,
  'ो': 10,
  औ: 11,
  'ौ': 11,
}

const ALPHABET_MAP: { [key: string]: number } = {
  ...CONSONANT_MAP,
  // ...VOWEL_MAP,
}

const size: Array<number> = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
  200, 300, 400, 500, 600, 700, 800, 900,
]

const map27 = (array: Array<string>): Array<number> =>
  array
    .map(x => size[(ALPHABET_MAP[x] ?? 1 - 1) % 27])
    .filter(x => x != null) as Array<number>

const map9 = (array: Array<string>): Array<number> =>
  array
    .map(x => size[(ALPHABET_MAP[x] ?? 1 - 1) % 9])
    .filter(x => x != null) as Array<number>

export { ALPHABET_MAP, map27, map9 }
