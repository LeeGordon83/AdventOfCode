(async function () {
  const fs = require('fs')
  const util = require('util')
  const path = require('path')
  const readFile = util.promisify(fs.readFile)
  const data = await readFile(path.resolve(__dirname, 'input.txt'))
  const values = data.toString().trim().split('\n\n')

  let highestValue = 0
  let highestValuePosition
  let i

  for (i = 0; i < values.length; i++) {
    let caloriesArray = []
    column = values[i].split('\n')

    for (const value of column) {
      caloriesArray.push(Number(value))
    }
    let total = caloriesArray.reduce((a, b) => a + b, 0)
    if(total > highestValue) {
      highestValue = total
      highestValuePosition = i
    }
  }

  console.log(highestValue, highestValuePosition)
}())
