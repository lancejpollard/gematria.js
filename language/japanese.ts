const hiragana: { [key: string]: number } = {
  あ: 1,
  い: 2,
  う: 3,
  え: 4,
  お: 5,
  か: 6,
  き: 7,
  く: 8,
  け: 9,
  こ: 10,
  さ: 11,
  し: 12,
  す: 13,
  せ: 14,
  そ: 15,
  た: 16,
  ち: 17,
  つ: 18,
  て: 19,
  と: 20,
  な: 21,
  に: 22,
  ぬ: 23,
  ね: 24,
  の: 25,
  は: 26,
  ひ: 27,
  ふ: 28,
  へ: 29,
  ほ: 30,
  ま: 31,
  み: 32,
  む: 33,
  め: 34,
  も: 35,
  や: 36,
  ゆ: 38,
  よ: 40,
  ら: 41,
  り: 42,
  る: 43,
  れ: 44,
  ろ: 45,
  わ: 46,
  ゐ: 47,
  ゑ: 49,
  を: 50,
  ん: 33,
}

const katakana: { [key: string]: number } = {
  ア: 1,
  イ: 2,
  ウ: 3,
  エ: 4,
  オ: 5,
  カ: 6,
  キ: 7,
  ク: 8,
  ケ: 9,
  コ: 10,
  サ: 11,
  シ: 12,
  ス: 13,
  セ: 14,
  ソ: 15,
  タ: 16,
  チ: 17,
  ツ: 18,
  テ: 19,
  ト: 20,
  ナ: 21,
  ニ: 22,
  ヌ: 23,
  ネ: 24,
  ノ: 25,
  ハ: 26,
  ヒ: 27,
  フ: 28,
  ヘ: 29,
  ホ: 30,
  マ: 31,
  ミ: 32,
  ム: 33,
  メ: 34,
  モ: 35,
  ヤ: 36,
  ユ: 38,
  ヨ: 40,
  ラ: 41,
  リ: 42,
  ル: 43,
  レ: 44,
  ロ: 45,
  ワ: 46,
  ヰ: 47,
  ヱ: 49,
  ヲ: 50,
  ン: 33,
}

const size: Array<number> = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
  200, 300, 400, 500, 600, 700, 800, 900,
]

const mapHiragana27 = (array: Array<string>): Array<number> =>
  array
    .map(x => size[((hiragana[x] as number) - 1) % 27])
    .filter(x => x) as Array<number>
const mapKatakana27 = (array: Array<string>): Array<number> =>
  array
    .map(x => size[((katakana[x] as number) - 1) % 27])
    .filter(x => x) as Array<number>
const mapHiragana9 = (array: Array<string>): Array<number> =>
  array
    .map(x => size[((hiragana[x] as number) - 1) % 9])
    .filter(x => x) as Array<number>
const mapKatakana9 = (array: Array<string>): Array<number> =>
  array
    .map(x => size[((katakana[x] as number) - 1) % 9])
    .filter(x => x) as Array<number>

export { mapHiragana27, mapKatakana27, mapHiragana9, mapKatakana9 }
