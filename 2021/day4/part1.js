(async function () {
  const fs = require('fs')
  const util = require('util')
  const path = require('path')
  const readFile = util.promisify(fs.readFile)
  const baseData = await readFile(path.resolve(__dirname, 'data.txt'))
  const data = baseData.toString().trim().split('\n\n')

  const balls = data[0].replace('\n', '').split(',')

  const bingoCards = []

  mapBingoCards(data)
  checkLines()

  function mapBingoCards (data) {
    for (let i = 0; i < data.length; i++) {
      if (i > 0) {
        const ticket = data[i].split('\n')
        for (let z = 0; z < ticket.length; z++) {
          ticket[z] = ticket[z].split(' ').filter(x => x !== '')
        }
        bingoCards.push(ticket)
      }
    }
  }

  function checkLines () {
    let winner = false
    balls.forEach(ball => {
      if (winner !== true) {
        bingoCards.forEach(card => {
          if (winner !== true) {
            card.forEach(row => {
              if (row.includes(ball)) {
                const index = row.indexOf(ball)
                row[index] = 'X'

                if (row.length === row.filter(x => x === 'X').length) {
                  winner = true
                }
                for (let z = 0; z < card.length; z++) {
                  let xCount = 0
                  for (let y = 0; y < card[0].length; y++) {
                    if (card[y][z] === 'X') {
                      xCount += 1
                    }
                  }
                  if (xCount === card.length) {
                    winner = true
                  }
                }
              }
              if (winner) {
                let ticketTotal = 0
                card.forEach(row => {
                  row.forEach(number => {
                    if (number !== 'X') {
                      ticketTotal += Number(number)
                    }
                  })
                })
                console.log(ticketTotal * ball)
              }
            })
          }
        })
      }
    })
  }
}())
