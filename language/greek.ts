const alphabet: { [key: string]: number } = {
  α: 1,
  β: 2,
  γ: 3,
  δ: 4,
  ε: 5,
  ϝ: 6,
  ϛ: 6,
  ζ: 7,
  η: 8,
  θ: 9,
  ι: 10,
  κ: 11,
  λ: 12,
  μ: 13,
  ν: 14,
  ξ: 15,
  ο: 16,
  π: 17,
  ϙ: 18,
  ρ: 19,
  σ: 20,
  ς: 20,
  τ: 21,
  υ: 22,
  φ: 23,
  χ: 24,
  ψ: 25,
  ω: 26,
  ϡ: 27,
}

const size: Array<number> = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
  200, 300, 400, 500, 600, 700, 800, 900,
]

const mapAlphabet = (array: Array<string>): Array<number> =>
  array
    .map(x => size[(alphabet[x] as number) - 1])
    .filter(x => x) as Array<number>
const map9 = (array: Array<string>): Array<number> =>
  array
    .map(x => size[((alphabet[x] as number) - 1) % 9])
    .filter(x => x) as Array<number>

export { mapAlphabet, map9 }
