import React from 'react'
import './Alphabet.css'

export default function Alphabet({ alphabet, playersTurn, attempts }) {
  const handleClick = (letter) => {
    // playerLives(letter)
    if (!attempts.includes(letter.toLowerCase())) {
      playersTurn(letter)
    }
  }
  return (
    <ul>
      {alphabet.split('').map(letter => {
        return <li className={(attempts.indexOf(letter.toLowerCase()) !== -1) ? "unclicked" : "clicked"} key={letter} onClick={(event) => {
          if (attempts.indexOf(event.target.innerText.toLowerCase() === -1)) {
            return handleClick(letter)
          } else {
            return
          }
        }
        }>{letter}</li>
      })}
    </ul>
  )
}