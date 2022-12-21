(async function () {
  const fs = require('fs')
  const util = require('util')
  const path = require('path')
  const readFile = util.promisify(fs.readFile)
  const data = await readFile(path.resolve(__dirname, 'input.txt'))
  const values = data.toString().trim().split('\n')



   let myScore = []
   let opponentScore = 0
   let i

   for (i = 0; i < values.length; i++) {
  
      let instructions = values[i].replace(/\s/g, '')
      let choiceScore = 0
      let resultScore

      if(instructions.charAt(1) === 'X') {
        choiceScore = 1
      } else if (instructions.charAt(1) === 'Y') {
        choiceScore = 2
      } else {
        choiceScore = 3
      }

      resultScore = rockPaperScissors(instructions)

      let totalScore = choiceScore + resultScore

      myScore.push(totalScore)

   }


function rockPaperScissors(instructions) {

  // A = Rock
  // B = Paper
  // C = Scissors
  // X = Rock (you)
  // Y = Paper (you)
  // Z = Scissors (you)

  let result;

  switch (instructions) {
    // they win
    case "AZ":
    case "CY":
    case "BX":
      result = 0;
      break;
    // you win
    case "CX":
    case "BZ":
    case "AY":
      result = 6;
      break;
    //draw
    case "BY":
    case "CZ":
    case "AX":
      result = 3;
      break;
  }
  return result;
}

console.log(myScore.reduce((a, b) => a + b, 0))
}())
