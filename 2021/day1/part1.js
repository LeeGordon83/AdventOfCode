(async function () {
  const fs = require('fs')
  const util = require('util')
  const path = require('path')
  const readFile = util.promisify(fs.readFile)
  const data = await readFile(path.resolve(__dirname, 'input.txt'))
  const values = data.toString().trim().split('\n').map(x => Number(x))

  let lastValue = 0
  let increments = 0

  for (const value of values) {
    if (value > lastValue) {
      increments += 1
    }
    lastValue = value
  }

  console.log(increments - 1)
}())
