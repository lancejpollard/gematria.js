const alphabet = {
  а: 1,
  в: 2,
  г: 3,
  д: 4,
  є: 5,
  е: 5,
  ѕ: 6,
  ꙃ: 6,
  ꙅ: 6,
  з: 7,
  ꙁ: 7,
  и: 8,
  ѳ: 9,
  і: 10,
  ї: 10,
  к: 11,
  л: 12,
  м: 13,
  н: 14,
  ѯ: 15,
  ѻ: 16,
  о: 16,
  п: 17,
  ч: 18,
  р: 19,
  с: 20,
  т: 21,
  у: 22,
  ѵ: 22,
  ѹ: 22,
  ꙋ: 22,
  ф: 23,
  х: 24,
  ѱ: 25,
  ѡ: 26,
  ѿ: 26,
  ꙍ: 26,
  ц: 27,
  ѧ: 27,
}

const size = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
  200, 300, 400, 500, 600, 700, 800, 900,
]

const mapAlphabet = array =>
  array.map(x => size[alphabet[x] - 1]).filter(x => x)
const map9 = array =>
  array.map(x => size[(alphabet[x] - 1) % 9]).filter(x => x)

export { mapAlphabet, map9 }
