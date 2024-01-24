import { sum, peak, cycle } from '.'

import * as chinese from './language/chinese'
import * as latin from './language/latin'
import * as greek from './language/greek'
import * as hebrew from './language/hebrew'
import * as gothic from './language/gothic'
import * as devanagari from './language/devanagari'

const gematria = {
  chinese,
  latin,
  greek,
  hebrew,
  gothic,
  devanagari,
}

console.log('')

logLang('chinese', '9', [...'幸福'])
logLang('latin', '9', [...'hello world'])
logLang('latin', 'Hebrew', [...'hello world'])
logLang('greek', 'Alphabet', [...'χξϛ'])
logLang('hebrew', 'MisparHechrachi', [...'יהוה'])
logLang('gothic', 'Alphabet', [...'𐌼𐌰𐌽𐌰𐍃𐌴𐌸𐍃'])
logLang('devanagari', '27', [...'कृष्ण'])
logLang('devanagari', '9', [...'कृष्ण'])

function logLang(l: string, t: string, i: Array<string>) {
  const array: Array<number> = gematria[l][`map${t}`](i)
  console.log(`${l}.map${t}(${JSON.stringify(i)})`)
  console.log(`    array`, JSON.stringify(array))
  logSum(array)
  logPeak(array)
  logCycle(array)
  console.log('')
}

function logSum(i: Array<number>) {
  console.log('      sum', String(sum(i)))
}

function logPeak(i: Array<number>) {
  console.log('     peak', String(peak(i)))
}

function logCycle(i: Array<number>) {
  console.log('    cycle', String(cycle(1, 7, i)))
}
