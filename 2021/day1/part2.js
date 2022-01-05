(async function () {
  const fs = require('fs')
  const util = require('util')
  const path = require('path')
  const readFile = util.promisify(fs.readFile)
  const data = await readFile(path.resolve(__dirname, 'input.txt'))
  const values = data.toString().trim().split('\n').map(x => Number(x))
  const newData = []
  let i

  for (i = 0; i <= values.length - 2; i++) {
    const summedData = values[i] + values[i + 1] + values[i + 2]
    newData.push(summedData)
  }

  let lastValue = 0
  let increments = 0

  for (const value of newData) {
    if (value > lastValue) {
      increments += 1
    }
    lastValue = value
  }

  console.log(increments - 1)
}())
