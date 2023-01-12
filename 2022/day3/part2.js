(async function () {
  const fs = require('fs')
  const util = require('util')
  const path = require('path')
  const readFile = util.promisify(fs.readFile)
  const data = await readFile(path.resolve(__dirname, 'input.txt'))
  const values = data.toString().trim().split('\n')

  let items = []
  let totalScore = 0

  for (i = 0; i < values.length; i) {
    

    let string1 = values[i].split('')
    let string2 = values[i+1].toString()
    let string3 = values[i+2].toString()
    let letterFound

    for (let item1 of string1) {
      if(string2.includes(item1)) {
        if(string3.includes(item1)) {
          letterFound = item1
        }
      }
    }

    items.push(letterFound)
    i = i + 3

 }

  

for (i = 0; i < items.length; i++) {
 let score = tallyScore(items[i])
 totalScore = totalScore + score
 }

 function tallyScore(item) {
  
  const alphabet = new Array(26).fill(1).map( ( _, i ) => String.fromCharCode( 97 + i ) );
  let score

  for (q = 0; q < alphabet.length; q++) {
      if(item.toLowerCase() === alphabet[q]) {
        score = q + 1
      }
  }

  if (item === item.toUpperCase()) {
    score = score + 26
  }

  return score
}

  console.log(totalScore)
}())

