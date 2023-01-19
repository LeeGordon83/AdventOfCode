(async function () {
  const fs = require('fs')
  const util = require('util')
  const path = require('path')
  const readFile = util.promisify(fs.readFile)
  const data = await readFile(path.resolve(__dirname, 'input.txt'))
  const values = data.toString().trim().split(/[\n,]+/)

  let blockedOut = []
  let total = 0

//create the blocks
for (i = 0; i < values.length; i++) {
    let numberOne = values[i].split('-')
    let block = countOut(Number(numberOne[0]), Number(numberOne[1]))
    blockedOut.push(block)
}

//compare the blocks
for (q = 0; q < blockedOut.length; q++) {
 
  blockOne = blockedOut[q]
  blockTwo = blockedOut[q + 1]
  
  for (let item1 of blockOne) {
    for (let item2 of blockTwo) {
      if(item1 === item2){
        blockOne = blockOne.filter(function(item) {
          return item !== item1
      })
        blockTwo = blockTwo.filter(function(item) {
        return item !== item1
    })
      }
    }
  }

if (blockOne.length === 0 || blockTwo.length === 0) {
  total = total + 1
}

q = q + 1

}

console.log(total)

}())



function countOut(x, y) {
  let counted = []

  for (var i = x; i <= y; i++) {
    counted.push(Number(i));
}

return counted
}



