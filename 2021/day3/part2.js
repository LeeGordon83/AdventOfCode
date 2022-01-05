(async function () {
  const fs = require('fs')
  const util = require('util')
  const path = require('path')
  const readFile = util.promisify(fs.readFile)
  const data = await readFile(path.resolve(__dirname, 'binary.txt'))
  const binary = data.toString().trim().split('\n')

  let i

  // part 2
  let oxygenList = JSON.parse(JSON.stringify(binary))
  let coList = JSON.parse(JSON.stringify(binary))

  for (i = 0; i < binary[0].length; i++) {
    const columnO = []
    const columnC = []
    for (const value of oxygenList) {
      columnO.push(Number(value[i]))
    }
    for (const value of coList) {
      columnC.push(Number(value[i]))
    }

    if (oxygenList.length > 1) {
      const sumO = getMostFrequent(columnO, 'O')
      if (sumO === 1) {
        oxygenList = oxygenList.filter(item => {
          return (Number(item.charAt(i)) === 1)
        })
      } else {
        oxygenList = oxygenList.filter(item => {
          return (Number(item.charAt(i)) === 0)
        })
      }
    }
    if (coList.length > 1) {
      const sumC = getMostFrequent(columnC, 'C')
      if (sumC === 1) {
        coList = coList.filter(item => {
          return (Number(item.charAt(i)) === 1)
        })
      } else {
        coList = coList.filter(item => {
          return (Number(item.charAt(i)) === 0)
        })
      }
    }
  }

  function getMostFrequent (array, type) {
    let oneCount = 0
    let zeroCount = 0
    let item
    for (let i = 0; i < array.length; i++) {
      if (array[i] === 1) {
        oneCount += 1
      } else {
        zeroCount += 1
      }
    }
    if (oneCount > zeroCount) {
      if (type === 'O') {
        item = 1
      } else {
        item = 0
      }
    } else if (zeroCount > oneCount) {
      if (type === 'O') {
        item = 0
      } else {
        item = 1
      }
    } else if (zeroCount === oneCount) {
      if (type === 'O') {
        item = 1
      } else {
        item = 0
      }
    }
    return item
  }

  console.log(parseInt(oxygenList[0], 2) * parseInt(coList[0], 2))
}())
