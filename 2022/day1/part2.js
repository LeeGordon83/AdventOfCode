(async function () {
  const fs = require('fs')
  const util = require('util')
  const path = require('path')
  const readFile = util.promisify(fs.readFile)
  const data = await readFile(path.resolve(__dirname, 'input.txt'))
  const values = data.toString().trim().split('\n\n')

  let highestValue = 0
  let highestValuePosition
  let topThreeValue = 0
  let allElves = []
  let i

  for (i = 0; i < values.length; i++) {
    let caloriesArray = []
    column = values[i].split('\n')

    for (const value of column) {
      caloriesArray.push(Number(value))
    }
    let total = caloriesArray.reduce((a, b) => a + b, 0)
    let elf = [i, total]
    allElves.push(elf)
    if(total > highestValue) {
      highestValue = total
      highestValuePosition = i
    }
  }

allElves = allElves.sort(compareSecondColumn);


topThreeValue = allElves[0][1] + allElves[1][1] + allElves[2][1]

function compareSecondColumn(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] > b[1]) ? -1 : 1;
    }
}

  console.log(highestValue, highestValuePosition, topThreeValue)
}())
