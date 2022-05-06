
const resolve = (chars, map) => {
  let i = 0
  const result = []
  while (i < chars.length) {
    const char = chars[i++]
    const number = map.get(char)
    if (number == null) {
      throw new Error(`Unknown ${char} in ${word}`)
    }
    result.push(number)
  }
  return result
}

module.exports = resolve
