const CONSONANT_MAP: { [key: string]: number } = {
  ㄱ: 1,
  ㄲ: 2,
  ㄴ: 3,
  ㄷ: 4,
  ㄸ: 5,
  ㄹ: 6,
  ㅁ: 7,
  ㅂ: 8,
  ㅃ: 9,
  ㅅ: 10,
  ㅆ: 11,
  ㅇ: 12,
  ㅈ: 13,
  ㅉ: 14,
  ㅊ: 15,
  ㅋ: 16,
  ㅌ: 17,
  ㅍ: 18,
  ㅎ: 19,
}

const VOWEL_MAP: { [key: string]: number } = {
  ㅏ: 20,
  ㅐ: 21,
  ㅑ: 22,
  ㅒ: 23,
  ㅓ: 24,
  ㅔ: 25,
  ㅕ: 26,
  ㅖ: 27,
  ㅗ: 28,
  ㅘ: 29,
  ㅙ: 30,
  ㅚ: 31,
  ㅛ: 32,
  ㅜ: 33,
  ㅝ: 34,
  ㅞ: 35,
  ㅟ: 36,
  ㅠ: 37,
  ㅡ: 38,
  ㅢ: 39,
  ㅣ: 40,
}

const CONSONANT_CLUSTER_MAP: { [key: string]: number } = {
  ㄳ: 41,
  ㄵ: 42,
  ㄶ: 43,
  ㄺ: 44,
  ㄻ: 45,
  ㄼ: 46,
  ㄽ: 47,
  ㄾ: 48,
  ㄿ: 49,
  ㅀ: 50,
  ㅄ: 51,
}

const SYMBOL_MAP: { [key: string]: number } = {
  ...CONSONANT_MAP,
  ...VOWEL_MAP,
  ...CONSONANT_CLUSTER_MAP,
}

const size: Array<number> = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
  200, 300, 400, 500, 600, 700, 800, 900,
]

const map27 = (array: Array<string>): Array<number> =>
  array
    .map(x => size[((SYMBOL_MAP[x] as number) - 1) % 27])
    .filter(x => x) as Array<number>
const map9 = (array: Array<string>): Array<number> =>
  array
    .map(x => size[((SYMBOL_MAP[x] as number) - 1) % 9])
    .filter(x => x) as Array<number>

export { map27, map9 }
