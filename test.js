
const gematria = require('.')

console.log('')

logLang('chinese', '9', [...'幸福'])
logLang('chinese', 'LineCountModulo32', [...'幸福'])
logLang('latin', '9', [...'hello world'])
logLang('latin', 'Hebrew', [...'hello world'])
logLang('greek', 'Alphabet', [...'χξϛ'])
logLang('hebrew', 'MisparHechrachi', [...'יהוה'])
logLang('gothic', 'Alphabet', [...'𐌼𐌰𐌽𐌰𐍃𐌴𐌸𐍃'])
logLang('devanagari', '32', [...'कृष्ण'])
logLang('devanagari', '9', [...'कृष्ण'])

function logLang(l, t, i) {
  const array = gematria[l][`map${t}`](i)
  console.log(`${l}.map${t}(${JSON.stringify(i)})`)
  console.log(`    array`, JSON.stringify(array))
  logSum(array)
  logPeak(array)
  logCycle(array)
  logProduct(array)
  console.log('')
}

function logSum(i) {
  console.log('      sum', String(gematria.sum(i)))
}

function logPeak(i) {
  console.log('     peak', String(gematria.peak(i)))
}

function logCycle(i) {
  console.log('    cycle', String(gematria.cycle(i)))
}

function logProduct(i) {
  console.log('  product', String(gematria.product(i)))
}
