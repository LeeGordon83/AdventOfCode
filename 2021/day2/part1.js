(async function () {
  const fs = require('fs')
  const util = require('util')
  const path = require('path')
  const readFile = util.promisify(fs.readFile)
  const data = await readFile(path.resolve(__dirname, 'course.txt'))
  const course = data.toString().trim().split('\n')

  let horizontal = 0
  let depth = 0

  for (const movement of course) {
    const singleMovement = movement.split(' ')
    if (singleMovement[0] === 'up') {
      depth = depth - Number(singleMovement[1])
    } else if (singleMovement[0] === 'down') {
      depth = depth + Number(singleMovement[1])
    } else if (singleMovement[0] === 'forward') {
      horizontal = horizontal + Number(singleMovement[1])
    }
  }
  console.log(horizontal * depth)
}())
