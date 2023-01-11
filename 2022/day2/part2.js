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
      let resultScore = []
      
      resultScore = rockPaperScissors(instructions)
      let totalScore = resultScore[0] + resultScore[1]

      myScore.push(totalScore)


   }
  
   
function rockPaperScissors(instructions) {

  // rock = 1 (A)
  // paper = 2 (B)
  // scissors = 3 (C)
  // X = lose
  // Y = draw
  // Z = win
 
  let selection
  let score
  let result
 
  if(instructions.charAt(1) === 'X') {
    result = 'lose'
  } else if (instructions.charAt(1) === 'Z') {
    result = 'win'
  } else {
    result = 'draw'
  }

  if(instructions.charAt(0) === 'A') {
    if(result === 'win') { 
      selection = 2
      score = 6
    } else if (result === 'lose') {
      selection = 3
      score = 0
    } else {
      selection = 1
      score = 3
    }
  }
    
  if(instructions.charAt(0) === 'B') {
    if(result === 'win') { 
      selection = 3
      score = 6
    } else if (result === 'lose') {
      selection = 1
      score = 0
    } else {
      selection = 2
      score = 3
    }
  }

  if(instructions.charAt(0) === 'C') {
    if(result === 'win') { 
      selection = 1
      score = 6
    } else if (result === 'lose') {
      selection = 2
      score = 0
    } else {
      selection = 3
      score = 3
    }
  }

  let returnResult = [selection, score]
  return returnResult;
  }

  console.log(myScore.reduce((a, b) => a + b, 0))

}())
