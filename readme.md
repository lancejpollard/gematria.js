
# Gematria in JavaScript

For Node.js, not the browser, as it requires a database basically to do across cultures.

Pass in an array of characters, which you can get with the _spread_ operator.

```js
const gematria = require('@lancejpollard/gematria.js')
const chars = [...'幸福']
const integers = gematria.chinese.map9(chars)
// add all the integers together
const sum = gematria.sum(integers)
// multiply all the integers together
const product = gematria.product(integers)
// add numbers of sum together continuously until it is 1 digit.
const peak = gematria.peak(integers)
// rotate around sum like clock, between 1 and 9.
const cycle = gematria.cycle(integers)
```

Logs from some of the tests:

```
chinese.map9(["幸","福"])
    array [8,4]
      sum 12
     peak 3
    cycle 3
  product 32

chinese.mapLineCountModulo32(["幸","福"])
    array [8,40]
      sum 48
     peak 3
    cycle 3
  product 320

latin.map9(["h","e","l","l","o"," ","w","o","r","l","d"])
    array [8,5,3,3,6,5,6,9,3,4]
      sum 52
     peak 7
    cycle 6
  product 6998400

latin.mapHebrew(["h","e","l","l","o"," ","w","o","r","l","d"])
    array [8,5,20,20,50,900,50,80,20,4]
      sum 1157
     peak 5
    cycle 4
  product 230400000000000

greek.mapAlphabet(["χ","ξ","ϛ"])
    array [600,60,6]
      sum 666
     peak 9
    cycle 1
  product 216000

hebrew.mapMisparHechrachi(["י","ה","ו","ה"])
    array [10,5,6,5]
      sum 26
     peak 8
    cycle 1
  product 1500

gothic.mapAlphabet(["𐌼","𐌰","𐌽","𐌰","𐍃","𐌴","𐌸","𐍃"])
    array [40,1,50,1,200,5,9,200]
      sum 506
     peak 2
    cycle 8
  product 3600000000

devanagari.map32(["क","ृ","ष","्","ण"])
    array [1,4000,60]
      sum 4061
     peak 2
    cycle 3
  product 240000

devanagari.map9(["क","ृ","ष","्","ण"])
    array [1,4,6]
      sum 11
     peak 2
    cycle 3
  product 24
```

These 4 operations are simple operations you can do on the number, but there are an infinite number of other possible calculations you could do on these numbers.

## `gematria.chinese`

This uses the line number information for each Chinese character for figuring out the integers.

```js
gematria.chinese.mapLineCountModulo32
gematria.chinese.map9
```

## `gematria.arabic`

```js
gematria.arabic.mapAbjad
gematria.arabic.map9
```

## `gematria.coptic`

```js
gematria.coptic.mapAlphabet
gematria.coptic.map9
```

## `gematria.cyrillic`

```js
gematria.cyrillic.mapAlphabet
gematria.cyrillic.map9
```

## `gematria.devanagari`

```js
gematria.devanagari.map32
gematria.devanagari.map9
```

## `gematria.elderFuthark`

```js
gematria.elderFuthark.mapSymbols
gematria.elderFuthark.map9
```

## `gematria.greek`

```js
gematria.greek.mapAlphabet
gematria.greek.map9
```

## `gematria.gothic`


```js
gematria.gothic.mapAlphabet
gematria.gothic.map9
```

## `gematria.hebrew`


```js
gematria.hebrew.mapMisparHechrachi
gematria.hebrew.map9
gematria.hebrew.mapMisparGadol
gematria.hebrew.mapMisparSiduri
gematria.hebrew.mapMisparKatan
gematria.hebrew.mapLatin
```

## `gematria.japanese`

```js
gematria.japanese.mapHiragana
gematria.japanese.mapKatakana
gematria.japanese.mapHiragana9
gematria.japanese.mapKatakana9
```

## `gematria.latin`

```js
gematria.latin.mapChaldean
gematria.latin.mapHebrew
gematria.latin.map26
gematria.latin.map9
gematria.latin.mapKabbalah
gematria.latin.mapPythagorean
```

## `gematria.tibetan`

```js
gematria.tibetan.mapAlphabet
gematria.tibetan.map9
```
