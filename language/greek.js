
const resolve = require('..')

const alphabet = new Map()
alphabet.set('α', 1)
alphabet.set('β', 2)
alphabet.set('γ', 3)
alphabet.set('δ', 4)
alphabet.set('ε', 5)
alphabet.set('ϝ', 6)
alphabet.set('ϛ', 6)
alphabet.set('ζ', 7)
alphabet.set('η', 8)
alphabet.set('θ', 9)
alphabet.set('ι', 10)
alphabet.set('κ', 20)
alphabet.set('λ', 30)
alphabet.set('μ', 40)
alphabet.set('ν', 50)
alphabet.set('ξ', 60)
alphabet.set('ο', 70)
alphabet.set('π', 80)
alphabet.set('ϙ', 90)
alphabet.set('ρ', 100)
alphabet.set('σ', 200)
alphabet.set('ς', 200)
alphabet.set('τ', 300)
alphabet.set('υ', 400)
alphabet.set('φ', 500)
alphabet.set('χ', 600)
alphabet.set('ψ', 700)
alphabet.set('ω', 800)
alphabet.set('ϡ', 900)

const mapAlphabet = word => resolve(word, alphabet)

module.exports = {
  mapAlphabet,
}
