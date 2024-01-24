const ALPHABET_MAP: { [key: string]: number } = {
  '𐌰': 1,
  '𐌱': 2,
  '𐌲': 3,
  '𐌳': 4,
  '𐌴': 5,
  '𐌵': 6,
  '𐌶': 7,
  '𐌷': 8,
  '𐌸': 9,
  '𐌹': 10,
  '𐌺': 11,
  '𐌻': 12,
  '𐌼': 13,
  '𐌽': 14,
  '𐌾': 15,
  '𐌿': 16,
  '𐍀': 17,
  '𐍁': 18,
  '𐍂': 19,
  '𐍃': 20,
  '𐍄': 21,
  '𐍅': 22,
  '𐍆': 23,
  '𐍇': 24,
  '𐍈': 25,
  '𐍉': 26,
  '𐍊': 27,
}

const size: Array<number> = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
  200, 300, 400, 500, 600, 700, 800, 900,
]

const mapAlphabet = (array: Array<string>): Array<number> =>
  array
    .map(x => size[ALPHABET_MAP[x] ?? 1 - 1])
    .filter(x => x) as Array<number>
const map9 = (array: Array<string>): Array<number> =>
  array
    .map(x => size[(ALPHABET_MAP[x] ?? 1 - 1) % 9])
    .filter(x => x) as Array<number>

export { mapAlphabet, map9 }
