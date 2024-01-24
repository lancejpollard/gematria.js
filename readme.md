
# Gematria in JavaScript

For Node.js, not the browser, as it requires a database basically to do across cultures.

Pass in an array of characters, which you can get with the _spread_ operator.

```js
import chinese from '@lancejpollard/gematria.js/language/chinese'
import { sum, peak, cycle } from '@lancejpollard/gematria.js'
const chars = [...'幸福']
const integers = chinese.map9(chars)
// add all the integers together
const sum = sum(integers)
// add numbers of sum together continuously until it is 1 digit.
const peak = peak(integers)
// rotate around sum like clock, between 1 and 9.
const cycle = cycle(integers)
```

Logs from some of the tests:

```
chinese.map9(["幸","福"])
    array [8,4]
      sum 12
     peak 3
    cycle 5

latin.map9(["h","e","l","l","o"," ","w","o","r","l","d"])
    array [9,6,4,4,7,1,6,7,1,4,5]
      sum 54
     peak 9
    cycle 5

latin.mapHebrew(["h","e","l","l","o"," ","w","o","r","l","d"])
    array [9,6,30,30,60,1,60,90,30,5]
      sum 321
     peak 6
    cycle 6

greek.mapAlphabet(["χ","ξ","ϛ"])
    array [700,70,7]
      sum 777
     peak 3
    cycle 7

hebrew.mapMisparHechrachi(["י","ה","ו","ה"])
    array [20,6,7,6]
      sum 39
     peak 3
    cycle 4

gothic.mapAlphabet(["𐌼","𐌰","𐌽","𐌰","𐍃","𐌴","𐌸","𐍃"])
    array [50,2,60,2,300,6,10,300]
      sum 730
     peak 1
    cycle 2

devanagari.map27(["क","ृ","ष","्","ण"])
    array [2,1,5,1,70]
      sum 79
     peak 7
    cycle 2

devanagari.map9(["क","ृ","ष","्","ण"])
    array [2,1,5,1,7]
      sum 16
     peak 7
    cycle 2
```
