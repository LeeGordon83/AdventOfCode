(async function () {
  const fs = require('fs')
  const util = require('util')
  const path = require('path')
  const readFile = util.promisify(fs.readFile)
  const data = await readFile(path.resolve(__dirname, 'input.txt'))
  const values = data.toString().trim().split('\n')

  let items = []
  let totalScore = 0

  for (i = 0; i < values.length; i++) {
    

    let stringCheck =  values[i].toString()
    let stringLength = stringCheck.length
    let half1 = stringCheck.substring(0, stringLength/2).split('');
    let half2 = stringCheck.substring(stringLength/2).split('');
    let letterFound


    for (let item1 of half1) {
      for (let item2 of half2) {
        if(item1 === item2){
          letterFound = item1
        }
      }
    }

    items.push(letterFound)

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

