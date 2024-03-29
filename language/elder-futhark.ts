const SYMBOL_MAP: { [key: string]: number } = {
  ᚠ: 1,
  ᚢ: 2,
  ᚦ: 3,
  ᚨ: 4,
  ᚱ: 5,
  ᚲ: 6,
  ᚷ: 7,
  ᚹ: 8,
  ᚺ: 9,
  ᚾ: 10,
  ᛁ: 11,
  ᛃ: 12,
  ᛈ: 13,
  ᛇ: 14,
  ᛉ: 15,
  ᛊ: 16,
  ᛏ: 17,
  ᛒ: 18,
  ᛖ: 19,
  ᛗ: 20,
  ᛚ: 21,
  ᛜ: 22,
  ᛞ: 23,
  ᛟ: 24,
}

const size: Array<number> = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
  200, 300, 400, 500, 600,
]

const mapSymbols = (array: Array<string>): Array<number> =>
  array
    .map(x => size[(SYMBOL_MAP[x] as number) - 1])
    .filter(x => x) as Array<number>
const map9 = (array: Array<string>): Array<number> =>
  array
    .map(x => size[((SYMBOL_MAP[x] as number) - 1) % 9])
    .filter(x => x) as Array<number>

export { mapSymbols, map9 }
