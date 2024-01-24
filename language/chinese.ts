import CHARACTER from './characters.json'

const size: Array<number> = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
  200, 300, 400, 500, 600, 700, 800, 900,
]

const map27 = (array: Array<string>): Array<number> =>
  array
    .map((x: string) => size[(CHARACTER[x].lineCount - 1) % 27])
    .filter(x => x) as Array<number>

const map9 = (array: Array<string>): Array<number> =>
  array
    .map((x: string) => size[(CHARACTER[x].lineCount - 1) % 9])
    .filter(x => x) as Array<number>

export { map27, map9 }
