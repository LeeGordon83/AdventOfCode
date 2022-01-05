(async function () {
  const fs = require('fs')
  const util = require('util')
  const path = require('path')
  const readFile = util.promisify(fs.readFile)
  const data = await readFile(path.resolve(__dirname, 'binary.txt'))
  const binary = data.toString().trim().split('\n')

  let gamma = ''
  let epsilon = ''
  let i

  // part 1

  for (i = 0; i < binary[0].length; i++) {
    const column = []
    for (const value of binary) {
      column.push(Number(value[i]))
    }
    const sum = column.reduce((a, b) => a + b, 0)
    if ((binary.length / 2) < sum) {
      gamma = gamma + '1'
      epsilon = epsilon + '0'
    } else {
      gamma = gamma + '0'
      epsilon = epsilon + '1'
    }
  }

  console.log(parseInt(gamma, 2) * parseInt(epsilon, 2))
}())
